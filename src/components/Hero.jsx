import Link from "next/link";
import Image from "next/image";
import heroDesktop from "@/assets/hero.webp";
import heroMobile from "@/assets/mobileHero.webp";

const Hero = () => {
  return (
    <section id="home" className="w-full bg-white relative">
      <Image
        src={heroMobile}
        alt="Datani Insurance — service that shields"
        className="block md:hidden w-full h-auto object-cover"
        priority
        sizes="100vw"
      />
      <Image
        src={heroDesktop}
        alt="Datani Insurance — service that shields"
        className="hidden md:block w-full h-auto object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 sm:left-[80px] sm:translate-x-0 lg:left-[240px] z-20">
        <Link href="/quote">
          <button className="bg-brand-orange text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-6 md:px-12 py-2 sm:py-3 shadow-md hover:brightness-95 hover:scale-105 transition-transform duration-300 max-w-fit">
            Get Your Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
