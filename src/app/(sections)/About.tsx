import Intro from "@/components/about/Intro";
import TerminalComp from "@/components/about/Terminal";
import TimeZone from "@/components/about/TimeZone";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Item 1 */}
        <div className="grid-default-color grid-1 relative flex items-end w-full h-full">
          <Intro />
        </div>

        {/* Item 2 */}

        <div className="grid-default-color grid-2">
          <TerminalComp />
        </div>

        {/* Item 3 */}

        <div className="grid-black-color grid-3">
          <TimeZone />
        </div>

        {/* Item 4 */}

        <div className="grid-special-color grid-4 text-white">
          <div className="h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-xl font-semibold">Looking for my Resume?</h1>
            <a
              href="https://drive.google.com/file/d/1f-UBR-qFZ2uiLPruXyWkyHLXaAtfTee8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2 px-4 border border-white rounded-2xl hover:bg-white hover:text-black transition">
                View Resume
              </button>
            </a>
          </div>
        </div>

        {/* Item 5 */}
        <div className="grid-default-color grid-5 subtext">
          {/* <Skills /> */}
          <h1>Test</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
