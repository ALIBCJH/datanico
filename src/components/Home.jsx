import { Link } from "react-router-dom";
import heroDesktop from "../assets/tech/hero.webp";
import heroMobile from "../assets/tech/mobileHero.webp";

const Hero = () => {
  return (
    <section className="w-full bg-white relative">
      <img
        src={heroMobile}
        alt="Hero Mobile"
        className="block md:hidden w-full h-auto object-cover"
      />

      <img
        src={heroDesktop}
        alt="Hero Desktop"
        className="hidden md:block w-full h-auto object-cover"
      />

      <div className="absolute top-[80%] sm:top-[%] left-1/2 transform -translate-x-1/2 sm:left-[80px] lg:left-[240px] z-20">
        <Link to="/quote">
          <button className="bg-[#FF770F] text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-6 md:px-12 py-2 sm:py-3 rounded-none shadow-md hover:bg-[#FF770F] hover:scale-105 transition-transform duration-300 max-w-fit">
            Get Your Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
