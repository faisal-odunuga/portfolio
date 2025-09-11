import { AnimatedGridPattern } from "@/components/hero-bg/index.";
import HeroText from "@/components/hero-text";
import { Meteors } from "@/components/meteors";

const Hero = () => {
  return (
    <section className="c-space section-spacing" id="home">
      <div className="flex items-start justify-center md:items-start md:justify-start ">
        <HeroText />
        <AnimatedGridPattern />
        <Meteors />
      </div>
    </section>
  );
};

export default Hero;
