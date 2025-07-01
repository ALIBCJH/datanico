import { Link } from "react-router-dom";
import { FaClipboardList, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";

const Claims = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-[#FF5722] text-5xl" />,
      title: "Step 1: Notify Us",
      description:
        "Contact us as soon as an incident occurs. Provide basic info about what happened.",
    },
    {
      icon: <FaRegFileAlt className="text-[#FF5722] text-5xl" />,
      title: "Step 2: Submit Required Documents",
      description:
        "Complete the claim form and attach the necessary supporting documents.",
    },
    {
      icon: <FaCheckCircle className="text-[#FF5722] text-5xl" />,
      title: "Step 3: Review, Approval, and Compensation",
      description:
        "After review, we’ll process your claim and send your compensation promptly.",
    },
  ];

  return (
    <section
      id="claims"
      className="bg-white pt-40 pb-20 px-6 sm:px-10"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-light text-black mb-14">
          How Claims Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-10 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center items-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-light mb-3 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/requirementclaim"
          className="inline-block mt-12 bg-[#FF5722] text-white py-3 px-10 rounded-full text-lg font-medium hover:bg-[#e64a19] transition"
        >
          File a Claim →
        </Link>
      </div>
    </section>
  );
};

export default Claims;
