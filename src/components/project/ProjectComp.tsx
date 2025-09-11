import Image from "next/image";
import React from "react";
// import Button from "../../components/button";
import { FiGithub } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
// import ImageWithSkeleton from "../../components/image-skeleton";
import { Project } from "@/lib/definitions"; // 👈 import single project type

type ProjectCompProps = {
  project: Project;
};
const ProjectComp = ({ project }: ProjectCompProps) => {
  return (
    <div className="border border-primary rounded-lg text">
      <div className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-lg"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="space-y-4 p-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-sm">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project?.stack.map((project, i) => (
            <span
              key={i}
              className="text-sm py-1 px-2 rounded-full text-white bg-blue-500"
            >
              {project}
            </span>
          ))}
        </div>
        <span className="flex flex-wrap gap-2">
          <a href={project.link} target="_blank">
            <button className={"py-2 px-3 border border-blue-500 rounded-4xl"}>
              <span className="flex gap-2 items-center">
                <IoPlayOutline /> Live Demo
              </span>
            </button>
          </a>
          <a href={project.github} target="_blank">
            <button className={"py-2 px-3 border border-blue-500 rounded-4xl"}>
              <span className="flex gap-2 items-center">
                <FiGithub /> Code
              </span>
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectComp;
