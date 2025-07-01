// src/components/Partners.jsx
import React from "react";

// Import images
import JUBILEE from "../assets/tech/JUBILEE.png";
import BRITAM from "../assets/tech/britam.png";
import CIC from "../assets/tech/CIC.png";
import oldMutual from "../assets/tech/oldMutual.png";
import MADISON from "../assets/tech/MADISON.png";
import CANON from "../assets/tech/canon.png";
import GEMINI from "../assets/tech/geminia.png";
import HEIRTAGE from "../assets/tech/heirtage.png";

const partners = [
  { name: "Jubilee", logo: JUBILEE },
  { name: "Britam", logo: BRITAM },
  { name: "CIC", logo: CIC },
  { name: "Old Mutual", logo: oldMutual },
  { name: "Madison", logo: MADISON },
  { name: "CANON", logo: CANON },
  { name: "Gemini", logo: GEMINI },
  { name: "Heirtage", logo: HEIRTAGE },
];

const Partners = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-black mb-12 text-center">
          Our Insurance Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-40 shadow-md hover:shadow-[#FF5722] transition-shadow duration-300 border border-gray-100 hover:border-yellow-400"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
