import Intro from "@/components/about/Intro";
import TerminalComp from "@/components/about/Terminal";
import TimeZone from "@/components/about/TimeZone";
import { SkillsCircle } from "@/components/circle";
import Resume from "@/components/resume";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="grid-default-color grid-1 relative flex items-end w-full h-full">
          <Intro />
        </div>

        <div className="grid-default-color grid-2">
          <TerminalComp />
        </div>

        <div className="grid-black-color grid-3">
          <TimeZone />
        </div>

        <div className="grid-special-color grid-4 ">
          <Resume />
        </div>

        <div className="grid-default-color grid-5 relative flex items-center justify-center w-full h-full">
          <SkillsCircle />
        </div>
      </div>
    </section>
  );
};

export default About;
