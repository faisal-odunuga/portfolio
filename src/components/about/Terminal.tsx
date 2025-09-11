import React from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "../terminal";

const TerminalComp = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Terminal>
        <TypingAnimation>
          &gt; Booting up developer environment...
        </TypingAnimation>

        <AnimatedSpan className="text-green-500">
          ✔ Frontend specialist: React, Next.js, TypeScript.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Experienced in building scalable, user-focused apps.
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          ✔ Strong foundation in JavaScript, Tailwind, Redux.
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          Ready to build, learn, and deliver impactful solutions 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

export default TerminalComp;
