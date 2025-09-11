import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <>
      <Image
        src="/images/laptop.jpg"
        alt="Laptop Image"
        fill
        className="object-cover"
        priority
      />
      <div className="z-10">
        <p className="headtext"> Hi, I&apos;m Faisal Odunuga</p>
        <p className="subtext">
          Over the past 3 years, I’ve been designing and building modern web
          applications that blend performance with great user experience.
        </p>
      </div>
      <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-gray-800 to-transparent dark:from-gray-800" />
    </>
  );
};

export default Intro;
