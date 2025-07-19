import { Link } from "react-router-dom";
import hero from "../assets/tech/hero.webp";

const Hero = () => {
  return (
    <section className=" w-full bg-white  relative">
      <img
        src={hero}
        alt="Hero"
        className=""
      />
      <div className=" absolute top-[85%] sm:left-[60px]   lg:left-[140px]  z-20">
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
