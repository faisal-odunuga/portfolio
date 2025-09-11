import React from "react";
import { FlipWords } from "../flip-words";
import * as motion from "motion/react-client";
const HeroText = () => {
  const words = [
    "with React",
    "with Next.js",
    "with JavaScript",
    "with TypeScript",
    "with Tailwind",
    "with Style",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-20 text-center md:mt-40 md:text-left rounded-3xl">
      {/* Desktop */}
      <motion.div className="hidden md:flex flex-col c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I&apos;m Faisal
        </motion.h1>

        <motion.p
          className="text-5xl font-medium dark:text-neutral-300 leading-snug"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Frontend Developer <br />
          Building sleek, fast websites
        </motion.p>
        <motion.div
          className=""
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <FlipWords words={words} />
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-3 md:hidden">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I&apos;m Faisal
        </motion.h1>
        <div>
          <motion.p
            className="text-5xl font-medium dark:text-neutral-300 leading-snug"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            I build web solutions
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <FlipWords words={words} className="font-medium text-5xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
