import { Link } from "react-router-dom";

const resources = [
  {
    title: "Blog",
    description:
      "Stay updated with expert insights, trends, and industry news from the world of insurance.",
    link: "/blogs",
  },
  {
    title: "Insurance Tips",
    description:
      "Get valuable advice to help you choose the right coverage, avoid pitfalls, and save more.",
    link: "/insurancetips",
  },
  {
    title: "FAQs",
    description:
      "Clear answers to your most common insurance questions, simplified for you.",
    link: "/faqs",
  },
];

const Resources = () => {
  return (
    <section
      id="resources"
      className="bg-white py-20 px-6"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-14">Resources</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map(({ title, description, link }, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-lg hover:bg-orange-50 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {description}
                </p>
              </div>

              <Link
                to={link}
                aria-label={`Explore ${title}`}
                className="inline-block bg-orange-600 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-orange-700 transition"
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
