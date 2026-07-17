import { ClipboardList, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

const steps = [
  {
    number: 1,
    Icon: ClipboardList,
    title: "Step 1: Notify Us",
    description:
      "Contact us as soon as an incident occurs. Provide basic info about what happened.",
  },
  {
    number: 2,
    Icon: FileText,
    title: "Step 2: Submit Required Documents",
    description:
      "Complete the claim form and attach the necessary supporting documents.",
  },
  {
    number: 3,
    Icon: CheckCircle2,
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
          {steps.map(({ number, Icon, title, description }) => (
            <Card
              key={title}
              className="group p-10 text-center transition duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
            >
              <div className="relative mx-auto mb-6 h-20 w-20">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-orange-muted transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <Icon className="text-brand-orange" size={34} aria-hidden="true" />
                </div>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white shadow-md">
                  {number}
                </span>
              </div>
              <h2 className="text-2xl font-light mb-3 text-black">{title}</h2>
              <p className="text-gray-600 text-base">{description}</p>
            </Card>
          ))}
        </div>

        <Button href="/claims/file" variant="primary" size="lg" className="group mt-12">
          File a Claim
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
          />
        </Button>
      </div>
    </section>
  );
};

export default Claims;
