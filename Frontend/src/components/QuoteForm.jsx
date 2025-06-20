// src/components/QuoteForm.jsx
import React, { useState } from "react";

const categoryOffers = {
  life: [
    {
      details: "Get up to 20% discount on premiums for the first year!",
      company: "Madison Life Assurance",
    },
    {
      details: "Free medical checkup every year with your life cover.",
      company: "Jubilee Insurance",
    },
    {
      details: "Enjoy tax benefits under section 80C.",
      company: "Britam Insurance",
    },
  ],
  medical: [
    {
      details: "Comprehensive coverage with free annual health checkups.",
      company: "AAR Insurance",
    },
    {
      details: "Cashless claims in top hospitals across the country.",
      company: "APA Insurance",
    },
    {
      details: "No claim bonus benefits up to 100%.",
      company: "CIC Insurance Group",
    },
  ],
  general: [
    {
      details: "Roadside assistance included for all general insurance plans.",
      company: "ICEA LION General",
    },
    {
      details: "Easy online claim process.",
      company: "First Assurance Kenya",
    },
    {
      details: "Covers against natural disasters and theft.",
      company: "Heritage Insurance",
    },
  ],
  auto: [
    {
      details: "Get free towing service for the first year.",
      company: "Directline Assurance",
    },
    {
      details: "Zero depreciation cover included.",
      company: "GA Insurance",
    },
    {
      details: "Quick claim processing within 24 hours.",
      company: "UAP Old Mutual",
    },
  ],
};

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [offers, setOffers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.insuranceCategory.value;
    const selectedText =
      e.target.insuranceCategory.options[
        e.target.insuranceCategory.selectedIndex
      ].text;

    const matchedOffers = categoryOffers[category] || [];

    const structuredOffers = matchedOffers.map((offer) => ({
      type: selectedText,
      details: offer.details,
      company: offer.company,
    }));

    setOffers(structuredOffers);
    setSubmitted(true);
  };

  return (
    <section id="get-quotation" className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-orange-500">
            Get a Quote in Minutes
          </h2>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Let’s get you started
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              required
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="insuranceCategory"
              className="block text-sm font-semibold text-gray-700"
            >
              Insurance Category <span className="text-red-500">*</span>
            </label>
            <select
              id="insuranceCategory"
              name="insuranceCategory"
              required
              defaultValue=""
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
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
          </div>

          <div className="flex items-start">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              required
            />
            <label
              htmlFor="consent"
              className="ml-2 text-sm text-gray-700 select-none"
            >
              By clicking Get a Quote, I consent to receiving communication from
              this company using the contact information I provide.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 rounded-md transition duration-200 text-lg"
          >
            Get a Quote
          </button>
        </form>
      </div>

      {submitted && (
        <div className="max-w-md mx-auto mt-6 p-4 rounded-lg border border-orange-500 bg-purple-50 text-orange-800">
          <h3 className="text-xl font-semibold mb-3">
            Best Insurance Offers for You
          </h3>
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
        </div>
      )}
    </section>
  );
};

export default QuoteForm;
