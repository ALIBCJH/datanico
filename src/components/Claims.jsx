import { FaClipboardList, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

const steps = [
  {
    icon: <FaClipboardList className="text-brand-orange text-5xl" />,
    title: "Step 1: Notify Us",
    description:
      "Contact us as soon as an incident occurs. Provide basic info about what happened.",
  },
  {
    icon: <FaRegFileAlt className="text-brand-orange text-5xl" />,
    title: "Step 2: Submit Required Documents",
    description:
      "Complete the claim form and attach the necessary supporting documents.",
  },
  {
    icon: <FaCheckCircle className="text-brand-orange text-5xl" />,
    title: "Step 3: Review, Approval, and Compensation",
    description:
      "After review, we'll process your claim and send your compensation promptly.",
  },
];

const Claims = () => {
  return (
    <section id="claims" className="bg-white pt-11 pb-20 px-6 sm:px-10 font-montserrat">
      <div className="max-w-6xl mx-auto text-center">
        <PageHeader as="h1" title="How Claims Work" className="mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="p-10 hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center items-center mb-6">{step.icon}</div>
              <h2 className="text-2xl font-light mb-3 text-black">{step.title}</h2>
              <p className="text-gray-600 text-base">{step.description}</p>
            </Card>
          ))}
        </div>

        <Button
          href="/claims/file"
          variant="primary"
          size="lg"
          className="mt-12"
        >
          File a Claim →
        </Button>
      </div>
    </section>
  );
};

export default Claims;
