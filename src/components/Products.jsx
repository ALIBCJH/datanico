import Link from "next/link";
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
  Truck,
  Briefcase,
} from "lucide-react";
import { CONTACT } from "@/data/constants";

const productData = [
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
    icon: Truck,
  },
  {
    title: "Liability Insurance",
    subtitle: "Protect Your Business from Legal Risks",
    points: [
      "Public Liability Insurance",
      "Employer's Liability",
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
  {
    title: "Investment Plans",
    subtitle: "Grow Your Wealth",
    points: [
      "Unit Linked Investment Plans",
      "Mutual Funds",
      "Fixed Deposits with Insurance Benefits",
    ],
    icon: Briefcase,
  },
  {
    title: "Travel Insurance",
    subtitle: "Travel with Peace of Mind",
    points: [
      "Trip Cancellation and Interruption",
      "Medical Emergencies Abroad",
      "Lost Luggage and Delays",
      "Personal Liability while Traveling",
    ],
    icon: Plane,
  },
];

const Products = () => {
  return (
    <section className="min-h-screen bg-white px-6 pt-11 pb-20 max-w-7xl mx-auto font-montserrat">
      <h1 className="text-4xl sm:text-5xl font-light text-black mb-8 text-center">
        Our Insurance Products
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {productData.map(({ title, subtitle, points, icon: Icon }) => (
          <div
            key={title}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg border border-gray-200 transition duration-300 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Icon className="w-8 h-8 text-brand-orange" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-2">{title}</h2>
              <p className="text-center text-gray-700 font-medium mb-4">{subtitle}</p>
              <ul className="list-disc text-gray-600 text-sm space-y-3 leading-relaxed pl-5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/quote"
              className="block bg-brand-orange hover:brightness-95 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-6 transition duration-200"
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-28 text-center">
        <h2 className="text-2xl font-light text-black mb-4">
          Let&apos;s Help You Pick the Right Product
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you&apos;re getting started with insurance or reviewing your current
          policy, our team is here to support you every step of the way.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`tel:+${CONTACT.phoneIntl}`}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-orange-500 hover:bg-orange-50 transition duration-300 w-[300px]"
          >
            <div className="bg-orange-100 text-brand-orange p-3 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Call us</p>
              <p className="text-gray-600 text-sm">{CONTACT.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-md hover:shadow-lg hover:border-orange-500 hover:bg-orange-50 transition duration-300 w-[300px]"
          >
            <div className="bg-orange-100 text-brand-orange p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Email Us</p>
              <p className="text-gray-600 text-sm">{CONTACT.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
