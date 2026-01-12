'use client';

import React, { useState } from "react";
import { motion, } from "framer-motion";
import { Eye, ArrowUpRight, Github} from "lucide-react";
import projectsData from "../../data/projects.json";
import ProjectModal from "@/components/projects/ProjectModal";
import Image from 'next/image';
import Link from "next/link";





interface Project {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  techStack: string[];
  type: "Frontend" | "Backend" | "Full Stack" | "All";
  liveLink: string;
  frontendRepo?: string;
  backendRepo?: string;
  challenges?: string;
  futurePlans?: string;
}

type FilterType = "All" | "Frontend" | "Backend" | "Full Stack";

const AllProjectsPage: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData as Project[]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterType>("All");

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Show  projects for each filter
  const filteredProjects = projects
    .filter((project) => filter === "All" || project.type === filter)


  return (
    <>
     
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-base-content font-geist mx-auto pt-1   max-w-3xl"
      >



        <div className=" relative overflow-hidden rounded-lg p-4 backdrop-blur-sm bg-base-200 transition-shadow duration-300">
        
          {/* Header */}
        <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="my-4 text-start "
                >
                  <h2 className="text-3xl ">Projects</h2>
                </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center  gap-2 mb-2 flex-wrap">
            {["All", "Frontend", "Backend", "Full Stack"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as FilterType)}
                className={` p-2 cursor-pointer px-2 py-2 rounded-lg transition text-sm
                  hover:text-primary 
                  group inline-flex items-center gap-2 font-geist   duration-300
                  ${filter === type ? " scale-105 underline underline-offset-6 decoration-wavy decoration-2 decoration-primary" : "text-base-content"}
                  hover:scale-105
                `}
              >
                {type}
              </button>
            ))}
          </div>
<div className="h-[1px] bg-primary/40 mb-2"></div>
          {/* Projects list */}
         <div className="space-y-2">
  {filteredProjects.map((project, index) => (
    <motion.div
  key={index}
  transition={{ type: "spring", stiffness: 200 }}
  className="
    group overflow-hidden rounded-md
    px-4 py-2 sm:py-6
    transition-colors
    hover:bg-base-100
  "
>
  <div className="flex flex-col sm:flex-row gap-4">
    {/* Media */}
    <div className="relative w-full sm:w-[250px] aspect-[16/9] overflow-hidden rounded-lg hidden sm:block">
      {project.videos?.length ? (
        <video
          src={project.videos[0]}
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full object-cover rounded-lg
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      ) : (
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 250px"
          priority={index < 2}
          className="
            object-cover rounded-lg
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      )}
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between flex-1">
      <div>
        <h3
          className="
            text-base font-medium
            text-base-content
            transition-colors
            
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-1 text-sm leading-relaxed
            text-base-content/80
            transition-colors
            
            line-clamp-2
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 my-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 text-xs rounded-full bg-base-100 border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links (NO group-hover here) */}
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-primary underline-offset-6 decoration-dashed hover:underline"
        >
          <ArrowUpRight size={14} /> Live
        </a>

        {project.frontendRepo && (
          <a
            href={project.frontendRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary underline-offset-6 decoration-dashed hover:underline"
          >
            <Github size={14} /> Frontend
          </a>
        )}

        {project.backendRepo && (
          <a
            href={project.backendRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary underline-offset-6 decoration-dashed hover:underline"
          >
            <Github size={14} /> Backend
          </a>
        )}

        <button
          onClick={() => openModal(project)}
          className="inline-flex items-center gap-1 hover:text-primary underline-offset-6 decoration-dashed hover:underline"
        >
          <Eye size={14} /> Details
        </button>
      </div>
    </div>
  </div>
</motion.div>

  ))}
</div>


          {/* Footer Link */}
<div className="my-4  text-start">
 <p
    className="
      text-sm sm:text-base text-base-content/80 leading-relaxed
    "
  >
    <span>This page highlights selected work. View the full project list on </span>

    <Link
      href="https://github.com/mehedi-hasan1102"
      target="_blank"
      rel="noopener noreferrer"
      className="
          
         font-medium hover:text-primary
        underline underline-offset-6 decoration-dashed
         transition-all duration-300
      "
    >
      Github
    </Link>. 
   
  </p>
</div>

         
        </div>
      </motion.section>

      {/* Project Modal */}
      <ProjectModal
        showModal={showModal}
        selectedProject={selectedProject}
        closeModal={closeModal}
      />
    </>
  );
};

export default AllProjectsPage;
