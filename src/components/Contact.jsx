"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Lock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CONTACT } from "@/data/constants";
import Field, { inputClass } from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Contact form" }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  // Quick-contact channels — fastest paths first, so mobile users don't have
  // to scroll past the form to reach out.
  const channels = [
    {
      key: "call",
      href: `tel:+${CONTACT.phoneIntl}`,
      icon: <Phone size={22} aria-hidden="true" />,
      label: "Call us",
      detail: CONTACT.phone,
      accent: "bg-brand-orange-muted text-brand-orange",
      ring: "hover:border-brand-orange focus-visible:ring-brand-orange",
      glow: "rgba(255, 119, 15, 0.35)",
    },
    {
      key: "whatsapp",
      href: CONTACT.whatsapp,
      external: true,
      icon: <WhatsAppIcon className="text-[22px]" />,
      label: "WhatsApp",
      detail: "Chat with an agent now",
      accent: "bg-[#25D366]/10 text-[#1EBE5D]",
      ring: "hover:border-[#25D366] focus-visible:ring-[#25D366]",
      glow: "rgba(37, 211, 102, 0.40)",
    },
    {
      key: "email",
      href: `mailto:${CONTACT.email}`,
      icon: <Mail size={22} aria-hidden="true" />,
      label: "Email",
      detail: CONTACT.email,
      accent: "bg-brand-orange-muted text-brand-orange",
      ring: "hover:border-brand-orange focus-visible:ring-brand-orange",
      glow: "rgba(255, 119, 15, 0.35)",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-brand-orange-tint to-white pt-11 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
            We&apos;re here to help
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light text-black">Let&apos;s talk cover</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Questions about a policy, a claim, or a quote? Reach us the way that suits you —
            a real person usually replies within one business day.
          </p>
        </div>

        {/* Quick channels */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => (
            <a
              key={c.key}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:flex-col sm:gap-3 sm:text-center ${c.ring}`}
            >
              <span
                style={{ "--pulse-color": c.glow }}
                className={`channel-icon ${
                  i === 1 ? "channel-icon-2" : i === 2 ? "channel-icon-3" : ""
                } grid h-12 w-12 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${c.accent}`}
              >
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-gray-900">{c.label}</span>
                <span className="block truncate text-sm text-gray-600">{c.detail}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Form + location */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* Message form */}
          <Card className="p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-semibold text-black">Send us a message</h2>
            <p className="mt-1 text-sm text-gray-600">
              Prefer a callback? Leave your details and we&apos;ll come to you.
            </p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <Field label="Name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Phone" htmlFor="phone" required>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="e.g. 0714 046 604"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="How can we help?" htmlFor="message" required>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us what you need — a quote, a claim, or a question."
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending…" : (<><Send size={18} aria-hidden="true" /> Send message</>)}
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <Lock size={13} aria-hidden="true" />
                Your details are only used to respond to you. We never share them.
              </p>
            </form>

            <div aria-live="polite">
              {submitted && (
                <div
                  role="status"
                  className="mt-4 rounded-lg border border-green-500 bg-green-50 px-4 py-3 text-sm text-green-800"
                >
                  <span aria-hidden="true">✅</span> Thank you! Your message is on its way —
                  we&apos;ll be in touch shortly.
                </div>
              )}
              {error && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-red-400 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <span aria-hidden="true">⚠️</span> {error}
                </div>
              )}
            </div>
          </Card>

          {/* Location & hours */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit our office</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
                  <Clock size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Opening hours</h3>
                  <ul className="mt-1 space-y-0.5 text-sm text-gray-600">
                    <li className="flex justify-between gap-4"><span>Mon – Fri</span><span>8:00 AM – 5:00 PM</span></li>
                    <li className="flex justify-between gap-4"><span>Saturday</span><span>9:00 AM – 1:00 PM</span></li>
                    <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="h-56 w-full overflow-hidden rounded-2xl border border-gray-200 sm:h-64">
              <iframe
                title="Datani Insurance office location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.706716783397!2d36.95399971442664!3d-0.4253854996573771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182899375a5d9973%3A0x39d2c92f7a1b230b!2sMawaidha%20House%2C%20Kimathi%20St%2C%20Nyeri!5e0!3m2!1sen!2ske!4v1719246993383!5m2!1sen!2ske"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
