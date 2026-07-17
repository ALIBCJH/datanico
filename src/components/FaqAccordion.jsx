"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="pt-11 pb-20 px-6 max-w-4xl mx-auto">
      <PageHeader
        title="Frequently Asked Questions"
        intro="Answers to common questions about claims at Datani Insurance Agency."
        className="mb-12"
      />

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Card key={idx} className="overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-brand-orange-muted transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
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
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
