import { Link } from "react-router-dom";
import hero from "../assets/tech/hero.webp";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-20">
      <div className="absolute top-20 left-0 w-full h-1 bg-orange-500 z-20" />

      <img
        src={hero}
        alt="Hero"
        className="absolute left-0 w-full h-full object-cover"
      />
      <div className="absolute left-32 top-[94%] z-10">
        <Link to="/quote">
          <button className="bg-orange-400 text-white text-lg font-semibold px-20 py-2 rounded-full shadow-2xl hover:bg-orange-700 hover:scale-105 transition-all duration-300">
            Get Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
