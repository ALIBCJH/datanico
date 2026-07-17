import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free insurance quote from Datani Insurance Agency. Motor, medical, life, home, travel and business cover tailored to you.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return <QuoteForm />;
}
