import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Basic in-memory rate limiter -------------------------------------------
// NOTE: on serverless (Vercel) memory is per-instance and resets on cold start,
// so this is best-effort. For strong guarantees, back it with Vercel KV / Upstash.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // per IP per window
const hits = new Map(); // ip -> number[] of request timestamps

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Occasional cleanup so the map can't grow unbounded on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

const clamp = (v, max) => (typeof v === "string" ? v.slice(0, max) : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill. If it's set, silently accept
  // (so bots don't learn it was rejected) but send nothing.
  if (body?.company) {
    return NextResponse.json({ success: true, delivered: false });
  }

  const name = clamp(body?.name, 100).trim();
  const phone = clamp(body?.phone, 30).trim();
  const email = clamp(body?.email, 150).trim();
  const message = clamp(body?.message, 5000).trim();
  const source = clamp(body?.source, 60) || "Website";

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  const to = CONTACT_TO || "info@datani.co.ke";

  const text = [
    `New enquiry from the Datani website (${source})`,
    "",
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n");

  // If SMTP is not configured, don't fail the user — log the lead so it isn't lost
  // and return success. Configure .env.local to enable real email delivery.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("[send-email] SMTP not configured; logging submission instead:\n" + text);
    return NextResponse.json({ success: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Datani Website" <${SMTP_USER}>`,
      to,
      replyTo: email || undefined,
      // Strip CR/LF so a crafted name can't inject extra email headers.
      subject: `New ${source} enquiry from ${name}`.replace(/[\r\n]+/g, " "),
      text,
    });

    return NextResponse.json({ success: true, delivered: true });
  } catch (err) {
    console.error("[send-email] delivery failed:", err);
    return NextResponse.json(
      { success: false, error: "Could not send your message. Please call us instead." },
      { status: 502 }
    );
  }
}
