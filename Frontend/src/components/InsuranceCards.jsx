import { useNavigate } from "react-router-dom";
import {
  Car,
  HeartPulse,
  Home,
  Plane,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

const insuranceProducts = [
  { title: "Motor Insurance", slug: "motor-insurance", icon: Car },
  { title: "Medical Insurance", slug: "medical-insurance", icon: HeartPulse },
  { title: "Property Insurance", slug: "property-insurance", icon: Home },
  {
    title: "Marine & Goods in Transit",
    slug: "marine-goods-in-transit",
    icon: Plane,
  },
  {
    title: "Liability Cover",
    slug: "liability-cover",
    icon: ShieldCheck,
  },
  { title: "Life Insurance", slug: "life-insurance", icon: Users },
  {
    title: "Retirement and Pension Plans",
    slug: "retirement-pension-plans",
    icon: Wallet,
  },
];

const InsuranceCards = () => {
  const navigate = useNavigate();

  return (
    <section
      id="our-services"
      className="bg-gray-100 py-10 px-6"
      style={{ fontFamily: "Segoe UI, SegoeUI, sans-serif" }}
    >
      <h2 className="text-3xl font-semibold text-center mb-10 text-black">
        Our Insurance Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {insuranceProducts.map(({ title, slug, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md w-full max-w-sm p-6 flex flex-col items-center justify-between transition duration-300 hover:shadow-lg hover:shadow-[#FF5722]/40"
          >
            <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow-sm">
              <Icon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-black mb-4 text-center">
              {title}
            </h3>
            <button
              onClick={() => navigate(`/services`)}
              className="bg-[#FF5722] hover:bg-[#e64a19] text-white py-2 px-6 rounded-full transition duration-200"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceCards;
