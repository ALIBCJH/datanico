"use client";

import { useState } from "react";
import Field, { inputClass } from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";

const categoryOffers = {
  life: [
    { details: "Get up to 20% discount on premiums for the first year!", company: "Madison Life Assurance" },
    { details: "Free medical checkup every year with your life cover.", company: "Jubilee Insurance" },
    { details: "Enjoy tax benefits under the Income Tax Act.", company: "Britam Insurance" },
  ],
  medical: [
    { details: "Comprehensive coverage with free annual health checkups.", company: "AAR Insurance" },
    { details: "Cashless claims in top hospitals across the country.", company: "APA Insurance" },
    { details: "No claim bonus benefits up to 100%.", company: "CIC Insurance Group" },
  ],
  general: [
    { details: "Roadside assistance included for all general insurance plans.", company: "ICEA LION General" },
    { details: "Easy online claim process.", company: "First Assurance Kenya" },
    { details: "Covers against natural disasters and theft.", company: "Heritage Insurance" },
  ],
  auto: [
    { details: "Get free towing service for the first year.", company: "Directline Assurance" },
    { details: "Zero depreciation cover included.", company: "GA Insurance" },
    { details: "Quick claim processing within 24 hours.", company: "UAP Old Mutual" },
  ],
};

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [offers, setOffers] = useState([]);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const select = form.insuranceCategory;
    const category = select.value;
    const selectedText = select.options[select.selectedIndex].text;
    const matchedOffers = categoryOffers[category] || [];

    // Show the tailored offers immediately.
    setOffers(
      matchedOffers.map((offer) => ({
        type: selectedText,
        details: offer.details,
        company: offer.company,
      }))
    );
    setSubmitted(true);

    // Send the lead to the agency in the background (non-blocking for the user).
    setSending(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName.value,
          phone: form.phone.value,
          email: form.email.value,
          message: `Quote request — Insurance category: ${selectedText}`,
          source: "Quote form",
        }),
      });
    } catch {
      // The user still sees their offers; the lead is logged server-side on retry.
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="get-quotation" className="bg-white px-4 pt-0 pb-16">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10">
        <PageHeader title="Get a Quote in Minutes" intro="Let's get you started" className="mb-8" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Field label="Full Name" htmlFor="fullName" required>
            <input id="fullName" name="fullName" type="text" placeholder="Full Name" required className={inputClass} />
          </Field>

          <Field label="Email" htmlFor="email">
            <input id="email" name="email" type="email" placeholder="Email" className={inputClass} />
          </Field>

          <Field label="Phone" htmlFor="phone" required>
            <input id="phone" name="phone" type="tel" placeholder="Phone" required className={inputClass} />
          </Field>

          <Field label="Insurance Category" htmlFor="insuranceCategory" required>
            <select id="insuranceCategory" name="insuranceCategory" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                What type of insurance are you interested in?
              </option>
              <option value="general">General Insurance</option>
              <option value="medical">Medical Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="auto">Motor Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="travel">Travel Insurance</option>
              <option value="business">Business Insurance</option>
            </select>
          </Field>

          <div className="flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="h-4 w-4 mt-1 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
              required
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-700 select-none">
              By clicking Get a Quote, I consent to receiving communication from this
              company using the contact information I provide.
            </label>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
            {sending ? "Sending…" : "Get a Quote"}
          </Button>
        </form>
      </div>

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="max-w-2xl mx-auto mt-8 p-6 rounded-lg border border-brand-orange bg-brand-orange-tint text-brand-orange-dark"
        >
          <p className="text-sm font-medium mb-4">
            {sending
              ? "Sending your request to our team…"
              : "✅ Your request has been received — an agent will be in touch shortly."}
          </p>
          <h2 className="text-xl font-semibold mb-4">Best Insurance Offers for You</h2>
          {offers.length ? (
            <ul className="list-disc list-inside space-y-3">
              {offers.map((offer, idx) => (
                <li key={idx}>
                  <strong>{offer.type}</strong>: {offer.details}
                  <br />
                  <span className="text-sm text-gray-600 italic">
                    Provided by {offer.company}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">
              Thanks! One of our agents will call you shortly with tailored offers for this
              category.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default QuoteForm;
