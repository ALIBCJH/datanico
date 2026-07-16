import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common insurance claim questions at Datani Insurance Agency — settlement times, required documents, excess, co-payment, appeals and deadlines.",
  alternates: { canonical: "/faqs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <FaqAccordion />
    </>
  );
}
