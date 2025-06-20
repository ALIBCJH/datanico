import React from "react";
import {
  FaShieldAlt,
  FaHeart,
  FaUsers,
  FaCheckCircle,
  FaRegHandshake,
  FaThumbsUp,
  FaInfoCircle,
  FaBullseye,
  FaEye,
  FaQuestionCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      className="bg-white px-6 sm:px-10 py-20 max-w-7xl mx-auto text-gray-700"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      {/* Intro Cards */}
      <section className="mb-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* About */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition">
            <FaInfoCircle className="text-[#FF5722] text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-black mb-4">About Us</h3>
            <p className="text-base leading-relaxed">
              At Datani Insurance, we believe insurance is more than just cover —
              it’s about being there when it counts. We offer
              <span className="text-black font-medium"> service that shields</span>:
              expert advice, reliable protection, and personal support.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition">
            <FaBullseye className="text-[#FF5722] text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
            <p className="text-base leading-relaxed">
              To empower you with insurance solutions that offer peace of mind,
              financial protection, and confidence in life’s uncertain moments.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow hover:shadow-lg transition">
            <FaEye className="text-[#FF5722] text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
            <p className="text-base leading-relaxed">
              To be Kenya’s most trusted and customer-driven insurance agency,
              known for personalized service and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-24">
        <h3 className="text-3xl font-bold text-black mb-10 text-center">
          Our Core Values
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Individual Cards */}
          {[
            { icon: <FaShieldAlt />, title: "Integrity", text: "We operate with honesty and transparency, always doing what’s right for our clients." },
            { icon: <FaHeart />, title: "Empathy", text: "We listen, understand, and serve with compassion, making every interaction meaningful." },
            { icon: <FaUsers />, title: "Excellence", text: "We hold ourselves to the highest standards in service delivery and client care." },
            { icon: <FaCheckCircle />, title: "Innovation", text: "We embrace smart ideas and tools to better serve and protect our clients." },
            { icon: <FaRegHandshake />, title: "Accountability", text: "We keep our word and stand by our service — delivering on promises every time." },
            { icon: <FaThumbsUp />, title: "Reliability", text: "You can count on us — we're responsive, dependable, and always by your side." },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-10 text-center shadow hover:shadow-xl hover:shadow-[#FF5722]/30 transition"
            >
              <div className="text-[#FF5722] text-5xl mx-auto mb-6">{value.icon}</div>
              <h4 className="text-xl font-semibold text-black mb-3">{value.title}</h4>
              <p className="text-base leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Datani */}
      <section>
        <div className="bg-gray-50 rounded-2xl p-10 text-center shadow hover:shadow-lg transition max-w-5xl mx-auto">
          <FaQuestionCircle className="text-[#FF5722] text-5xl mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-black mb-4">Why Choose Datani?</h3>
          <p className="text-base leading-relaxed">
            You get personalized guidance — not generic advice. <br />
            We work with top underwriters to give you flexible, affordable options. <br />
            Our team is trained, responsive, and ready to support you. <br />
            We handle claims fast and walk with you through the process. <br />
            We put people first — always. <br />
            With Datani, you're not just buying insurance. You're choosing
            <span className="font-semibold text-black"> service that shields</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
