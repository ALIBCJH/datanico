import { Link } from "react-router-dom";
import heroDesktop from "../assets/tech/hero.webp";
import heroMobile from "../assets/tech/datanico2.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-white relative">
      {/* Mobile Image */}
      <img
        src={heroMobile}
        alt="Hero Mobile"
        className="block md:hidden w-full h-auto object-cover"
      />

      {/* Desktop Image */}
      <img
        src={heroDesktop}
        alt="Hero Desktop"
        className="hidden md:block w-full h-auto object-cover"
      />

      {/* Overlay Button */}
      <div className="absolute top-[80%] sm:left-[60px] lg:left-[140px] z-20">
        <Link to="/quote">
          <button className="bg-[#FF770F] text-white text-base sm:text-lg font-semibold px-6 sm:px-12 py-3 rounded-full shadow-md hover:bg-[#FF770F] hover:scale-105 transition-transform duration-300">
            Get Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
