"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, PhoneCall, ShieldCheck, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/data/constants";
import Field, { inputClass } from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Honeypot from "@/components/ui/Honeypot";

const CLAIM_TYPES = [
  { value: "general", label: "General Insurance" },
  { value: "medical", label: "Medical Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "auto", label: "Motor Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "business", label: "Business Insurance" },
];

const reassurances = [
  { Icon: Clock, text: "Takes about 3 minutes" },
  { Icon: PhoneCall, text: "An agent calls you within 24 hours" },
  { Icon: ShieldCheck, text: "No policy number? You can still file" },
];

const GroupLabel = ({ children }) => (
  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">{children}</p>
);

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    policyNumber: "",
    claimType: "",
    description: "",
    company: "",
  });
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

    const claimTypeLabel =
      CLAIM_TYPES.find((t) => t.value === formData.claimType)?.label || formData.claimType;

    const message = [
      `Policy Number: ${formData.policyNumber || "—"}`,
      `Claim Type: ${claimTypeLabel}`,
      "",
      "Claim Description:",
      formData.description,
    ].join("\n");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message,
          company: formData.company,
          source: "Claim form",
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          policyNumber: "",
          claimType: "",
          description: "",
          company: "",
        });
      } else {
        setError(data.error || "Failed to submit your claim. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-brand-orange-tint to-white pt-11 pb-20 px-5 sm:px-8 font-montserrat">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orange-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
            Claims
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light text-black">Make a claim</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Sorry you&apos;ve had an incident — let&apos;s sort it out. Tell us what happened and
            a claims agent will take it from here.
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

        {/* Form + help */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card className="p-6 sm:p-8 lg:col-span-2">
            {submitted ? (
              <div className="py-6 text-center" role="status" aria-live="polite">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-black">Claim received</h2>
                <p className="mx-auto mt-2 max-w-md text-gray-600">
                  Thank you — we&apos;ve got the details. A claims agent will call you within 24
                  hours to guide you through the next steps and any documents needed.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button href="/claims/process" variant="outline">
                    See what documents you&apos;ll need
                  </Button>
                  <Button href="/" variant="ghost">
                    Back to home
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <Honeypot value={formData.company} onChange={handleChange} />
                {/* Your details */}
                <div>
                  <GroupLabel>Your details</GroupLabel>
                  <div className="space-y-5">
                    <Field label="Full name" htmlFor="name" required>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
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
                  </div>
                </div>

                {/* About the claim */}
                <div>
                  <GroupLabel>About your claim</GroupLabel>
                  <div className="space-y-5">
                    <Field label="Type of claim" htmlFor="claimType" required>
                      <select
                        id="claimType"
                        name="claimType"
                        required
                        value={formData.claimType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select the cover you&apos;re claiming on
                        </option>
                        {CLAIM_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Policy number" htmlFor="policyNumber">
                      <input
                        id="policyNumber"
                        name="policyNumber"
                        type="text"
                        placeholder="If you have it handy (optional)"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>

                    <Field label="What happened?" htmlFor="description" required>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={5}
                        placeholder="Briefly describe the incident — what happened, when, and where."
                        value={formData.description}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting…" : "Submit claim"}
                </Button>

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-400 bg-red-50 px-4 py-3 text-center text-sm text-red-700"
                  >
                    <span aria-hidden="true">⚠️</span> {error}
                  </div>
                )}
              </form>
            )}
          </Card>

          {/* Help sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900">Prefer to talk it through?</h3>
              <p className="mt-1 text-sm text-gray-600">
                Our claims team is happy to help you file over the phone.
              </p>
              <Button href={`tel:+${CONTACT.phoneIntl}`} variant="soft" className="mt-4 w-full">
                <PhoneCall size={18} aria-hidden="true" /> {CONTACT.phone}
              </Button>
              <p className="mt-3 text-center text-xs text-gray-500">Mon – Fri, 8:00 AM – 5:00 PM</p>
            </Card>

            <Card className="p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-orange-muted text-brand-orange">
                <FileText size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-semibold text-gray-900">Not sure what you&apos;ll need?</h3>
              <p className="mt-1 text-sm text-gray-600">
                See the documents required for each type of claim and how settlement works.
              </p>
              <Link
                href="/claims/process"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark hover:underline"
              >
                View claim requirements <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimForm;
