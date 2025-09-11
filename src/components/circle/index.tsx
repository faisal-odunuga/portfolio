"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { Skills } from "../skills/Skills";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillsCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[250px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.javascript />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.typescript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.nextjs />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.tailwind />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.nodejs />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.github />
          </Circle>
        </div>
      </div>

      {/* Skill connector lines */}
      <Skills
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <Skills containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <Skills
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <Skills
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <Skills
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <Skills
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

// TECH STACK ICONS (using Devicon classes)
const Icons = {
  javascript: () => (
    <i className="devicon-javascript-plain colored text-3xl"></i>
  ),
  typescript: () => (
    <i className="devicon-typescript-plain colored text-3xl"></i>
  ),
  react: () => <i className="devicon-react-original colored text-3xl"></i>,
  nextjs: () => <i className="devicon-nextjs-plain colored text-3xl"></i>,
  nodejs: () => <i className="devicon-nodejs-plain colored text-3xl"></i>,
  tailwind: () => (
    <i className="devicon-tailwindcss-plain colored text-3xl"></i>
  ),
  github: () => <i className="devicon-github-original colored text-3xl"></i>,
};
