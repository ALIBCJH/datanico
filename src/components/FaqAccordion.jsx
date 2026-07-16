"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="min-h-screen pt-11 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-light text-center text-black mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 text-center mb-12 text-lg">
        Answers to common questions about claims at Datani Insurance Agency.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-orange-100 transition"
            >
              <span className="text-lg font-semibold text-black">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-gray-600 transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-700 whitespace-pre-line text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
