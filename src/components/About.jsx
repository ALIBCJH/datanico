import React from "react";
import { FaInfoCircle, FaBullseye, FaEye } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="bg-white px-6 sm:px-10 py-20 max-w-7xl mx-auto text-gray-700"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition border-2 border-[#FF770F]">
          <div className="flex justify-center items-center mb-6">
            <FaInfoCircle className="text-[#FF770F] text-6xl" />
          </div>
          <h3 className="text-4xl font-light text-black mb-4 text-center">
            About Us
          </h3>
          <p className="text-lg leading-relaxed text-center">
            At Datani Insurance, we believe insurance is more than just cover —
            it’s about being there when it counts. We offer{" "}
            <span className="text-black font-semibold">
              service that shields
            </span>
            : expert advice, reliable protection, and personal support.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition border-2 border-[#FF770F]">
          <div className="flex justify-center items-center mb-6">
            <FaEye className="text-[#FF770F] text-6xl" />
          </div>
          <h3 className="text-4xl font-light text-black mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed text-center">
            To be Kenya’s most trusted and customer-driven insurance agency,
            known for personalized service and lasting impact.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center b">
        <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition max-w-3xl w-full text-center border-2 border-[#FF770F] ">
          <div className="flex justify-center items-center mb-6">
            <FaBullseye className="text-[#FF770F] text-6xl" />
          </div>
          <h3 className="text-4xl font-light text-black mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To empower you with insurance solutions that offer peace of mind,
            financial protection, and confidence in life’s uncertain moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
