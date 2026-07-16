import Link from "next/link";
import { Newspaper, Lightbulb, HelpCircle } from "lucide-react";

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
    link: "/insurancetips",
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
        <h2 className="text-5xl font-light text-black mb-14">Resources</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map(({ icon, title, description, link }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg hover:bg-orange-50 transition duration-300 flex flex-col justify-between text-center"
            >
              <div>
                <div className="flex justify-center items-center mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
              </div>

              <Link
                href={link}
                aria-label={`Explore ${title}`}
                className="inline-block bg-[#FFE5D3] text-brand-orange font-medium text-base px-6 py-3 rounded-full transition duration-300 hover:bg-brand-orange hover:text-white"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
