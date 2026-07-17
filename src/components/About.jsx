import { FaInfoCircle, FaBullseye, FaEye } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white via-white to-[#FAFAFA] font-montserrat"
    >
      <div className="px-6 sm:px-10 pt-10 pb-20 max-w-7xl mx-auto text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition border border-orange-200">
          <div className="flex justify-center items-center mb-6">
            <FaInfoCircle className="text-brand-orange text-4xl" />
          </div>
          <h2 className="text-4xl font-light text-black mb-4 text-center">About Us</h2>
          <p className="text-lg leading-relaxed text-center">
            At Datani Insurance, we believe insurance is more than just cover — it&apos;s
            about being there when it counts. We offer{" "}
            <span className="text-black font-semibold">service that shields</span>: expert
            advice, reliable protection, and personal support.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition border border-orange-200">
          <div className="flex justify-center items-center mb-6">
            <FaEye className="text-brand-orange text-4xl" />
          </div>
          <h2 className="text-4xl font-light text-black mb-4 text-center">Our Vision</h2>
          <p className="text-lg leading-relaxed text-center">
            To be the most trusted and customer-driven insurance agency, known for
            personalized service and lasting impact.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition max-w-3xl w-full text-center border border-orange-200">
          <div className="flex justify-center items-center mb-6">
            <FaBullseye className="text-brand-orange text-4xl" />
          </div>
          <h2 className="text-4xl font-light text-black mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To empower our clients with insurance solutions that offer peace of mind,
            financial protection, and confidence in life&apos;s uncertain moments.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
