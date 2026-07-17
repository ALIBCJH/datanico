"use client";

import { useState } from "react";

const CLAIM_TYPES = [
  { value: "general", label: "General Insurance" },
  { value: "medical", label: "Medical Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "auto", label: "Motor Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "business", label: "Business Insurance" },
];

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    policyNumber: "",
    claimType: "",
    description: "",
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
      CLAIM_TYPES.find((t) => t.value === formData.claimType)?.label ||
      formData.claimType;

    const message = [
      `Policy Number: ${formData.policyNumber}`,
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

  const inputClass =
    "mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange";

  return (
    <section id="claim-form" className="bg-gray-50 pt-11 pb-20 px-4 font-montserrat">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10 sm:p-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-light text-black">Make a Claim</h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            Submit your claim request below and we&apos;ll take care of the rest.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-brand-orange">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone <span className="text-brand-orange">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700">
              Policy Number <span className="text-brand-orange">*</span>
            </label>
            <input
              id="policyNumber"
              name="policyNumber"
              type="text"
              required
              placeholder="Enter your policy number"
              value={formData.policyNumber}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="claimType" className="block text-sm font-medium text-gray-700">
              Claim Type <span className="text-brand-orange">*</span>
            </label>
            <select
              id="claimType"
              name="claimType"
              required
              value={formData.claimType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>
                Select claim type
              </option>
              {CLAIM_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Claim Description <span className="text-brand-orange">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Describe the reason for your claim"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-lg shadow-md transition duration-200 text-base ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-brand-orange hover:brightness-95 text-white"
            }`}
          >
            {loading ? "Submitting..." : "Submit Claim"}
          </button>
        </form>

        <div aria-live="polite">
          {submitted && (
            <div
              role="status"
              className="mt-8 p-5 rounded-xl border border-green-500 bg-green-50 text-green-800 text-center"
            >
              <h2 className="text-lg font-semibold mb-2">✅ Claim Submitted</h2>
              <p className="text-sm">
                We have received your claim and will begin processing it shortly.
              </p>
            </div>
          )}
          {error && (
            <div
              role="alert"
              className="mt-8 p-5 rounded-xl border border-red-400 bg-red-50 text-red-700 text-center text-sm"
            >
              ⚠️ {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClaimForm;
