import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to settle my claim?",
    answer: `• For straightforward claims (e.g., minor car repairs, simple outpatient medical bills), we aim to process and settle within 14–21 days after receiving all required documents.
• More complex claims (e.g., total vehicle loss, major fire damage, large liability claims) may take 30–45 days, depending on investigations and third-party assessments.
• Throughout the process, we’ll keep you updated on progress and any outstanding requirements.`,
  },
  {
    question: "What documents do I need to submit for my claim?",
    answer: `• Motor Claims: Claim form, police abstract, driver’s license copy, vehicle logbook, repair estimates, and photos of damage at the scene.
• Property/Fire Claims: Claim form, police abstract (if theft/burglary), damage photos, fire brigade report (if applicable), receipts, and contractor quotes.
• Medical Claims: Claim form signed by you and your doctor, hospital bills/receipts, discharge summary, NHIF documents, prescriptions, lab/test invoices.
• Liability Claims: Claim form, witness statements, medical reports (if injury), receipts for repairs/legal fees, and third-party correspondence.

✅ Your claims adjuster will confirm exactly what’s needed. Having everything ready speeds up settlement.`,
  },
  {
    question: "Do I always need a Police Abstract for a motor claim?",
    answer: `Yes. If the claim is for your vehicle’s damage—such as a collision or vandalism—a Police Abstract is required. Also provide clear photos of damage and a repair estimate from an approved garage.`,
  },
  {
    question:
      "What is an excess (deductible) or co-payment, and how does it affect my claim?",
    answer: `• Excess (motor, property, liability): A fixed amount you pay first. If the bill is KSh 100,000 and your excess is KSh 10,000, you pay 10K and we pay 90K.
• Co-payment (medical claims): A percentage you pay. With a 10K co-payment on a 100K bill, we pay 90K.

📌 We’ll remind you of any applicable excess or co-payment during approval.`,
  },
  {
    question: "My claim was denied—what can I do next?",
    answer: `• You’ll receive a clear explanation citing policy clauses or missing info.
• You may appeal with new documents within 30 days via info@datani.co.ke.
• If unresolved, escalate to the Insurance Regulatory Authority (IRA) Ombudsman for independent review.`,
  },
  {
    question: "What happens if I’m underinsured (sum insured too low)?",
    answer: `• We apply a proportional penalty. If your property is insured at KSh 1M but is worth KSh 2M, any payout may be reduced by 50%.
✅ Tip: Regularly review your sums insured to match current market or replacement value.`,
  },
  {
    question: "How do I get a cashless settlement?",
    answer: `• Motor: Use approved garages—we pay them directly (minus your excess).
• Medical: Visit network hospitals—we handle the bill (minus co-payment).

💡 Confirm that the facility is on our approved list before proceeding.`,
  },
  {
    question:
      "I need clarification on my policy—can I speak to someone before filing a claim?",
    answer: `Absolutely. Call 0714 046604 or email info@datani.co.ke. Our claims team will help you understand your policy and file your claim correctly.`,
  },
  {
    question: "Is there a deadline to file my claim?",
    answer: `Yes. 
• Motor/Accident: Within 24 hours.
• Property/Fire/Burglary: Within 7 days.
• Medical: Before or within 48 hours of admission (if planned).`,
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <h1 className="text-5xl font-bold text-center text-black mb-6">
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
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-orange-100 transition"
            >
              <span className="text-lg font-semibold text-black">
                {faq.question}
              </span>
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

export default Faqs;
