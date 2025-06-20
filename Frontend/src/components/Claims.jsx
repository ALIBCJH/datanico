import { Link } from "react-router-dom";
import { FaClipboardList, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";

const Claims = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-[#FF5722] text-4xl mb-3" />,
      title: "Step 1: Notify Us",
      description:
        "Contact us as soon as an incident occurs. Provide basic info about what happened.",
    },
    {
      icon: <FaRegFileAlt className="text-[#FF5722] text-4xl mb-3" />,
      title: "Step 2: Submit Required  Documents",
      description:
        "Complete the claim form and attach the necessary supporting documents.",
    },
    {
      icon: <FaCheckCircle className="text-[#FF5722] text-4xl mb-3" />,
      title: "Step 3: Review, Approval, and Compensation",
      description:
        "After review, we’ll process your claim and send your compensation promptly.",
    },
  ];

  return (
    <section
      id="claims"
      className="bg-white py-16 px-6"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black mb-10">
          How Claims Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/requirementclaim"
          className="inline-block mt-10 bg-[#FF5722] text-white py-3 px-8 rounded-full text-lg hover:bg-[#e64a19] transition"
        >
          File a Claim →
        </Link>
      </div>
    </section>
  );
};

export default Claims;
