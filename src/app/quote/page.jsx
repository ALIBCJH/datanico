import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free insurance quote from Datani Insurance Agency. Motor, medical, life, home, travel and business cover tailored to you.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <QuoteForm />
    </div>
  );
}
