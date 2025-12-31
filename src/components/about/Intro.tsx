import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <>
      <Image src='/images/laptop.jpg' alt='Laptop Image' fill className='object-cover' priority />
      <div className='z-10'>
        <p className='headtext'> Hi, I&apos;m Faisal Odunuga</p>
        <p className='subtext'>
          Over the past 3 years, I’ve worked as a full-stack developer building web and mobile
          applications, as well as AI agents, with a strong focus on scalable systems and
          production-ready solutions.
        </p>
      </div>
      <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-gray-800 to-transparent dark:from-gray-800' />
    </>
  );
};

export default Intro;
