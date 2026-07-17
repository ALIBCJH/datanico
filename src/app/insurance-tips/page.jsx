import { HeartPulse, Car, Home, User, Plane, Lock, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Smart Insurance Tips",
  description:
    "Practical insurance tips from Datani Insurance Agency: review policies annually, bundle to save, understand the fine print, and set the right coverage.",
  alternates: { canonical: "/insurance-tips" },
};

const tips = [
  {
    title: "Review Policies Annually",
    description:
      "Always review your insurance policies every year to ensure they still align with your life changes, like a new job, home, or family situation.",
    icon: ShieldCheck,
  },
  {
    title: "Bundle to Save",
    description:
      "Combining home, auto, and life insurance with the same provider can earn you significant discounts and simplify your payments.",
    icon: Home,
  },
  {
    title: "Understand the Fine Print",
    description:
      "Carefully read the terms and exclusions of your policy. Knowing what's not covered prevents disappointment when you need to make a claim.",
    icon: Lock,
  },
  {
    title: "Set the Right Coverage Amount",
    description:
      "Avoid underinsurance by calculating how much coverage you really need based on your assets, lifestyle, and liabilities.",
    icon: User,
  },
  {
    title: "Keep Emergency Contacts Updated",
    description:
      "Ensure your beneficiaries, emergency contacts, and insurer have accurate details in case of claims or inquiries.",
    icon: HeartPulse,
  },
  {
    title: "Document Everything",
    description:
      "Store copies of your insurance policies, receipts, and claim forms digitally and physically. This simplifies the process during emergencies.",
    icon: Car,
  },
  {
    title: "Buy Travel Insurance Early",
    description:
      "Purchase your travel insurance immediately after booking to ensure trip cancellation and medical benefits kick in from day one.",
    icon: Plane,
  },
];

export default function InsuranceTipsPage() {
  return (
    <section className="bg-white pt-11 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Smart Insurance Tips"
          intro="Empower your financial future by making informed decisions. These simple yet powerful tips help you get the most out of your coverage."
          className="mb-16"
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {tips.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="p-6 shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="bg-brand-orange-muted w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
                <Icon className="w-6 h-6 text-brand-orange-dark" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-2 text-center">{title}</h2>
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
