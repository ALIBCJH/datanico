import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email = "", message = "", source = "Website" } = body || {};

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, error: "Name and phone are required." },
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
      subject: `New ${source} enquiry from ${name}`,
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
