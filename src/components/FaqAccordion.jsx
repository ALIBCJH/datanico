"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { CONTACT } from "@/data/constants";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="pt-11 pb-20 px-6 max-w-3xl mx-auto">
      <PageHeader
        title="Frequently Asked Questions"
        intro="Everything you need to know about making a claim with Datani — settlement times, documents, excess and co-payments, and more."
        className="mb-10"
      />

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Card
              key={idx}
              className={`overflow-hidden transition ${isOpen ? "ring-2 ring-brand-orange/30" : ""}`}
            >
              <h2>
                <button
                  id={`faq-q-${idx}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-brand-orange-tint focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-inset sm:px-6"
                >
                  <span className="text-base font-semibold text-black sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-orange text-white"
                        : "bg-brand-orange-muted text-brand-orange"
                    }`}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </span>
                </button>
              </h2>

              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-q-${idx}`}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="whitespace-pre-line px-5 pb-5 text-base leading-relaxed text-gray-700 sm:px-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Still have questions */}
      <div className="mt-12 rounded-2xl bg-brand-orange-tint px-6 py-10 text-center">
        <h2 className="text-2xl font-light text-black">Still have questions?</h2>
        <p className="mx-auto mt-2 max-w-lg text-gray-700">
          Our team is happy to walk you through anything — before or during a claim.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={`tel:+${CONTACT.phoneIntl}`} variant="primary" size="lg">
            Call {CONTACT.phone}
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
