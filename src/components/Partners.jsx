import Image from "next/image";
import JUBILEE from "@/assets/JUBILEE.png";
import BRITAM from "@/assets/britam.png";
import CIC from "@/assets/CIC.png";
import oldMutual from "@/assets/oldMutual.png";
import MADISON from "@/assets/MADISON.jpg";
import CANON from "@/assets/canon.png";
import GEMINI from "@/assets/geminia.png";
import HEIRTAGE from "@/assets/heirtage.png";

const partners = [
  { name: "Jubilee", logo: JUBILEE },
  { name: "Britam", logo: BRITAM },
  { name: "CIC", logo: CIC },
  { name: "Old Mutual", logo: oldMutual },
  { name: "Madison", logo: MADISON },
  { name: "Canon", logo: CANON },
  { name: "Geminia", logo: GEMINI },
  { name: "Heritage", logo: HEIRTAGE },
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-black mb-12 text-center">
          Our Insurance Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-40 shadow-md hover:shadow-brand-orange transition-shadow duration-300 border border-gray-100 hover:border-brand-orange-line"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-[144px] w-auto h-auto max-h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
