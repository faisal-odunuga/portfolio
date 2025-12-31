import React from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from '../terminal';

const TerminalComp = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Terminal>
        <TypingAnimation>&gt; Booting up developer environment...</TypingAnimation>

        <AnimatedSpan className='text-green-500'>✔ Full Stack, Mobile & AI Dev</AnimatedSpan>

        <AnimatedSpan className='text-green-500'>✔ Expert in React Native & AI Agents</AnimatedSpan>

        <AnimatedSpan className='text-green-500'>✔ Python, TypeScript & Cloud Native</AnimatedSpan>

        <TypingAnimation className='text-muted-foreground'>
          Ready to build, learn, and deliver impactful solutions 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

export default TerminalComp;
