import React, { useState } from "react";

const ClaimPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="claim-form" className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-orange-500">
            Make a Claim
          </h2>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Submit your claim request below
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Policy Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your policy number"
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Claim Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select claim type</option>
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
            <label className="block text-sm font-semibold text-gray-700">
              Claim Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder="Describe the reason for your claim"
              rows={4}
              className="mt-1 block w-full rounded-md border border-orange-500 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 rounded-md transition duration-200 text-lg"
          >
            Submit Claim
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 rounded-lg border border-green-500 bg-green-50 text-green-800 text-center">
            <h3 className="text-xl font-semibold mb-2">Claim Submitted</h3>
            <p>We have received your claim and will process it shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClaimPage;
