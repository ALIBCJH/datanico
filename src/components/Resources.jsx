import { Newspaper, Lightbulb, HelpCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

const resources = [
  {
    icon: <Newspaper size={40} className="text-brand-orange" />,
    title: "Testimonials",
    description: "Hear what our customers say about us.",
    link: "/testimonial",
  },
  {
    icon: <Lightbulb size={44} className="text-brand-orange" />,
    title: "Insurance Tips",
    description:
      "Get valuable advice to help you choose the right coverage, avoid pitfalls, and save more.",
    link: "/insurance-tips",
  },
  {
    icon: <HelpCircle size={44} className="text-brand-orange" />,
    title: "FAQs",
    description:
      "Clear answers to your most common insurance claim questions, simplified for you.",
    link: "/faqs",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <PageHeader as="h2" title="Resources" className="mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map(({ icon, title, description, link }) => (
            <Card
              key={title}
              className="p-8 shadow-md hover:shadow-lg hover:bg-brand-orange-tint transition duration-300 flex flex-col justify-between text-center"
            >
              <div>
                <div className="flex justify-center items-center mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
              </div>

              <Button
                href={link}
                variant="soft"
                aria-label={`Explore ${title}`}
              >
                Explore
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
