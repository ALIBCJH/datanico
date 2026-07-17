import {
  CalendarCheck,
  Layers,
  FileText,
  Calculator,
  Contact,
  FolderArchive,
  Plane,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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
      "Review your policies every year so they still match your life — a new job, home, car or family situation.",
    icon: CalendarCheck,
  },
  {
    title: "Bundle to Save",
    description:
      "Combining home, motor and life cover with the same provider can earn real discounts and simplify your payments.",
    icon: Layers,
  },
  {
    title: "Understand the Fine Print",
    description:
      "Read the terms and exclusions. Knowing what isn't covered prevents nasty surprises when you make a claim.",
    icon: FileText,
  },
  {
    title: "Set the Right Coverage Amount",
    description:
      "Avoid underinsurance — work out how much cover you actually need based on your assets, lifestyle and liabilities.",
    icon: Calculator,
  },
  {
    title: "Keep Contacts Updated",
    description:
      "Make sure your beneficiaries, emergency contacts and insurer all have accurate details for claims and enquiries.",
    icon: Contact,
  },
  {
    title: "Document Everything",
    description:
      "Keep copies of policies, receipts and claim forms — digital and physical. It speeds things up in an emergency.",
    icon: FolderArchive,
  },
  {
    title: "Buy Travel Insurance Early",
    description:
      "Buy travel cover right after booking so trip-cancellation and medical benefits apply from day one.",
    icon: Plane,
  },
];

export default function InsuranceTipsPage() {
  return (
    <section className="bg-white pt-11 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Smart Insurance Tips"
          intro="Simple, practical advice to help you get the most out of your cover — and avoid the common mistakes that cost people at claim time."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map(({ title, description, icon: Icon }, i) => (
            <Card
              key={title}
              className="group flex h-full flex-col p-6 transition duration-300 hover:border-brand-orange hover:shadow-lg motion-safe:hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-orange-muted text-brand-orange-dark transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Tip {i + 1}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-black">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-brand-orange-tint px-6 py-10 text-center">
          <h2 className="text-2xl font-light text-black">Want advice for your situation?</h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-700">
            Our advisors will help you pick the right cover and get the most value — free, no jargon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/quote" variant="primary" size="lg">
              Get a free quote
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to an advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
