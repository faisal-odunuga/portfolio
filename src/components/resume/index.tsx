import React from "react";

const Resume = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-4 text-white">
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
  );
};

export default Resume;
