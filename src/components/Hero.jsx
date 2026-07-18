import Link from "next/link";
import Image from "next/image";
import heroDesktop from "@/assets/hero.webp";
import heroMobile from "@/assets/mobileHero.webp";

const Hero = () => {
  return (
    <section id="home" className="w-full bg-white relative">
      {/*
        The hero headline ("Insurance that puts you first") is baked into the
        banner image, so it isn't crawlable. This real <h1> gives search engines
        and screen readers the page heading — it mirrors the visible banner text
        and adds the location keyword.
      */}
      <h1 className="sr-only">
        Datani Insurance Agency — insurance across Kenya that puts you first
      </h1>

      <Image
        src={heroMobile}
        alt="A happy family relaxing together at home, protected by Datani Insurance Agency"
        className="block md:hidden w-full h-auto object-cover"
        priority
        sizes="100vw"
      />
      <Image
        src={heroDesktop}
        alt="A happy family relaxing together at home, protected by Datani Insurance Agency"
        className="hidden md:block w-full h-auto object-cover"
        priority
        sizes="100vw"
      />

      {/* Soft fade so the banner melts into the page instead of ending on a hard edge. */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 sm:h-10 md:h-16 bg-gradient-to-b from-transparent to-white z-10" />

      <div className="absolute top-[85%] sm:top-[80%] left-1/2 -translate-x-1/2 sm:left-[80px] sm:translate-x-0 lg:left-[240px] z-20">
        <Link href="/quote">
          <button className="bg-brand-purple-light sm:bg-brand-orange rounded-full sm:rounded-none text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-6 md:px-12 py-2.5 sm:py-3 shadow-md hover:brightness-95 hover:scale-105 transition-transform duration-300 max-w-fit">
            Get Your Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
