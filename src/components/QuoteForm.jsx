"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  HeartPulse,
  Users,
  Car,
  Home,
  Plane,
  Briefcase,
} from "lucide-react";
import { CONTACT } from "@/data/constants";
import Field, { inputClass } from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import Honeypot from "@/components/ui/Honeypot";

const CATEGORIES = [
  { value: "general", label: "General", Icon: ShieldCheck },
  { value: "medical", label: "Medical", Icon: HeartPulse },
  { value: "life", label: "Life", Icon: Users },
  { value: "auto", label: "Motor", Icon: Car },
  { value: "home", label: "Home", Icon: Home },
  { value: "travel", label: "Travel", Icon: Plane },
  { value: "business", label: "Business", Icon: Briefcase },
];

const reassurances = [
  { Icon: BadgeCheck, text: "Free & no obligation" },
  { Icon: ShieldCheck, text: "Quotes from Kenya's top insurers" },
  { Icon: PhoneCall, text: "An agent calls within one business day" },
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    consent: false,
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const categoryLabel =
      CATEGORIES.find((c) => c.value === formData.category)?.label || formData.category;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: `Quote request — Insurance category: ${categoryLabel}`,
          company: formData.company,
          source: "Quote form",
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "We couldn't submit your request. Please try again or call us.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const firstName = formData.name.trim().split(" ")[0];

  return (
    <section className="bg-gradient-to-b from-brand-orange-tint to-white pt-11 pb-20 px-5 sm:px-8 font-montserrat">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
            Free quote
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light text-black">Get a free quote</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Tell us a little about you and we&apos;ll come back with options tailored to your
            needs — in plain language, with no pressure.
          </p>
        </div>

        {/* Reassurance strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {reassurances.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 sm:p-8">
          {submitted ? (
            <div className="py-4 text-center" role="status" aria-live="polite">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={34} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-black">
                Request received{firstName ? `, ${firstName}` : ""}!
              </h2>
              <p className="mx-auto mt-2 max-w-md text-gray-600">
                Thanks — an agent will call you
                {formData.phone ? ` on ${formData.phone}` : ""} within one business day with
                quotes tailored to you. No obligation.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button href="/products" variant="outline">
                  Browse our products
                </Button>
                <Button href="/" variant="ghost">
                  Back to home
                </Button>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Honeypot value={formData.company} onChange={handleChange} />
              <Field label="Full name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
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

              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  What would you like cover for?{" "}
                  <span className="text-brand-orange">*</span>
                </legend>
                <div className="mt-2 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                  {CATEGORIES.map(({ value, label, Icon }) => {
                    const active = formData.category === value;
                    return (
                      <label
                        key={value}
                        className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center text-sm font-medium shadow-sm transition ${
                          active
                            ? "border-brand-orange bg-brand-orange-muted text-brand-orange-dark ring-2 ring-brand-orange"
                            : "border-gray-200 bg-white text-gray-700 hover:border-brand-orange/60 hover:bg-brand-orange-tint"
                        }`}
                      >
                        <input
                          type="radio"
                          name="category"
                          value={value}
                          checked={active}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-full transition ${
                            active
                              ? "bg-brand-orange text-white"
                              : "bg-brand-orange-muted text-brand-orange"
                          }`}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        {label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex items-start gap-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                />
                <label htmlFor="consent" className="select-none text-sm text-gray-600">
                  I agree to be contacted about my quote. We only use your details to respond —
                  we never share them.
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                {loading ? "Getting your quote…" : "Get my free quote"}
              </Button>

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
                >
                  <span aria-hidden="true">⚠️</span> {error} You can also call us on{" "}
                  <a href={`tel:+${CONTACT.phoneIntl}`} className="font-semibold underline">
                    {CONTACT.phone}
                  </a>
                  .
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
