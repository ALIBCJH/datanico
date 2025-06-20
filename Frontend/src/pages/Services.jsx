import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
  Users,
  Wallet,
  PhoneCall,
  Mail,
} from "lucide-react";

const servicesData = [
  {
    title: "Motor Insurance",
    subtitle: "Drive with Confidence",
    points: [
      "Third-Party Only",
      "Third-Party, Fire & Theft",
      "Comprehensive Cover",
      "Optional add-ons: Windscreen protection, personal accident cover, roadside assistance",
    ],
    icon: Car,
  },
  {
    title: "Medical Insurance",
    subtitle: "Your Health Comes First",
    points: [
      "Inpatient Cover",
      "Outpatient Services",
      "Maternity Cover",
      "Dental, Optical, and Chronic Illness Benefits",
    ],
    icon: HeartPulse,
  },
  {
    title: "Property Insurance",
    subtitle: "Protect Your Home and Business Premises",
    points: [
      "Fire & Allied Perils Cover",
      "Burglary & Theft Insurance",
      "Domestic Package (Home Insurance)",
      "Commercial Property Cover",
    ],
    icon: Home,
  },
  {
    title: "Marine & Goods in Transit Insurance",
    subtitle: "Cover Your Goods While They Move",
    points: [
      "Marine Cargo Insurance (Air/Sea)",
      "Goods in Transit Insurance (Road/Rail)",
    ],
    icon: Plane,
  },
  {
    title: "Liability Insurance",
    subtitle: "Protect Your Business from Legal Risks",
    points: [
      "Public Liability Insurance",
      "Employer’s Liability",
      "Professional Indemnity Cover",
      "Directors & Officers Liability (D&O)",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Life Insurance",
    subtitle: "Secure Their Future, Today",
    points: [
      "Term Life Cover",
      "Whole Life Insurance",
      "Endowment Plans",
      "Investment-Linked Plans",
    ],
    icon: Users,
  },
  {
    title: "Retirement & Pension Plans",
    subtitle: "Plan Now, Enjoy Later",
    points: [
      "Individual Retirement Plans",
      "Group Pension Schemes (for employers and teams)",
    ],
    icon: Wallet,
  },
];

const Services = () => {
  return (
    <section
      className="min-h-screen bg-white px-6 pt-32 pb-20 max-w-7xl mx-auto"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">
        Our Insurance Solutions
      </h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        At Datani Insurance Agency, we help you protect what truly matters—your
        life, health, home, vehicle, business, and your loved ones. Our private
        insurance products are tailored to meet your needs and offer peace of
        mind at every stage of life.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(({ title, subtitle, points, icon: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow-sm">
                <Icon className="w-7 h-7 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-black mb-1">{title}</h2>
              <p className="text-sm text-gray-600 mb-4 font-medium">
                {subtitle}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm leading-relaxed mb-6">
                {points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-orange-600 transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/quote"
              className="inline-block text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2 rounded-xl transition duration-200 mt-auto"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-28 text-center">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Let’s Find the Right Cover for You
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you’re getting started with insurance or reviewing your
          current policy, our team is here to support you every step of the way.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Phone Card */}
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-orange-500 hover:bg-orange-50 transition duration-300 w-[300px]">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Call us</p>
              <p className="text-gray-600 text-sm">0714 046 604</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-orange-500 hover:bg-orange-50 transition duration-300 w-[300px]">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600 text-sm">info@datani.co.ke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
