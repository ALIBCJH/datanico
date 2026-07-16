"use client";

import { useState } from "react";

const ClaimForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500";

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
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-brand-orange">*</span>
            </label>
            <input type="text" required placeholder="Enter your full name" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-brand-orange">*</span>
            </label>
            <input type="tel" required placeholder="Enter your phone number" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Policy Number <span className="text-brand-orange">*</span>
            </label>
            <input type="text" required placeholder="Enter your policy number" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Claim Type <span className="text-brand-orange">*</span>
            </label>
            <select required className={inputClass} defaultValue="">
              <option value="" disabled>
                Select claim type
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Claim Description <span className="text-brand-orange">*</span>
            </label>
            <textarea
              required
              placeholder="Describe the reason for your claim"
              rows={5}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-orange hover:brightness-95 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200 text-base"
          >
            Submit Claim
          </button>
        </form>

        {submitted && (
          <div className="mt-8 p-5 rounded-xl border border-green-500 bg-green-50 text-green-800 text-center">
            <h2 className="text-lg font-semibold mb-2">✅ Claim Submitted</h2>
            <p className="text-sm">
              We have received your claim and will begin processing it shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClaimForm;
