import { Link } from "react-router-dom";
import hero from "../assets/tech/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-20">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero"
        className="absolute  left-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}

      {/* Button with Link to /quote */}
      <div className="absolute left-32 top-[94%] z-10">
        <Link to="/quote">
          <button className="bg-orange-600 text-white text-lg font-semibold px-20 py-2 rounded-full shadow-2xl hover:bg-orange-700 hover:scale-105 transition-all duration-300">
            Get Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
