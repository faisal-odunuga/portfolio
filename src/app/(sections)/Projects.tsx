import ProjectComp from '@/components/project/ProjectComp';
import { projects } from '@/lib/projects';
import React from 'react';

const Projects = () => {
  return (
    <section className='c-space section-spacing' id='projects'>
      <div className='space-y-6'>
        <h2 className='text-3xl md:text-5xl font-bold'>My Recents Projects</h2>
        <p>
          The following examples showcase my work, demonstrating my growth and development from my
          early projects to my most recent achievements.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectComp project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
