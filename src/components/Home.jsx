import { Link } from "react-router-dom";
import hero from "../assets/tech/hero.webp";

const Hero = () => {
  return (
    <section className="relative w-full pt-20 bg-white">
      <div className="w-full h-1 bg-orange-500 mb-2" />

      <img
        src={hero}
        alt="Hero"
        className="w-full object-cover max-h-[650px]"
      />

      <div className="absolute top-[80%] sm:left-[60px]   lg:left-[140px] z-20">
        <Link to="/quote">
          <button className="bg-orange-500 text-white text-base sm:text-lg font-semibold px-6 sm:px-12 py-3 rounded-full shadow-md hover:bg-orange-700 hover:scale-105 transition-transform duration-300">
            Get Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
