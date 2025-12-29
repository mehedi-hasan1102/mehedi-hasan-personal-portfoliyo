'use client';

import React, { useState } from "react";
import { motion, } from "framer-motion";
import { Eye, ArrowUpRight, Github} from "lucide-react";
import projectsData from "../../data/projects.json";
import ProjectModal from "@/components/projects/ProjectModal";
import Image from 'next/image';





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



        <div className=" relative overflow-hidden rounded-lg p-2 backdrop-blur-sm transition-shadow duration-300">
        
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-0 text-center mx-auto "
          >
            
            {/* <p className="text-sm text-primary mb-0">• Portfolio</p> */}
            <h2 className="text-xl m-2">
              Projects <span className="text-base-content/60">Collection</span>
            </h2>
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
                  ${filter === type ? " scale-105 underline underline-offset-4 decoration-wavy decoration-2 decoration-primary" : "text-base-content"}
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
      className="overflow-hidden rounded-md py-2 transition"
    >
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Media */}
        {/* <motion.div
  whileHover={{ scale: 1.02 }}
  className="relative w-full sm:w-[300px] aspect-[16/9] overflow-hidden rounded-lg"
>
  {project.videos && project.videos.length > 0 ? (
    <video
      src={project.videos[0]}
      className="w-full h-full object-cover rounded-lg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  ) : (
    <Image
      src={project.images[0]}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 300px"
      className="rounded-lg object-cover transition-transform duration-300"
      priority={index < 2}
    />
  )}
</motion.div> */}


<motion.div
  whileHover={{ scale: 1.02 }}
  className="relative w-full sm:w-[250px] aspect-[16/9] overflow-hidden rounded-lg hidden sm:block"
>
  {project.videos && project.videos.length > 0 ? (
    <video
      src={project.videos[0]}
      className="w-full h-full object-cover rounded-lg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  ) : (
    <Image
      src={project.images[0]}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 250px"
      className="rounded-lg object-cover transition-transform duration-300"
      priority={index < 2}
    />
  )}
</motion.div>



        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-base font-medium text-primary mb-2 sm:mb-0">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-base-content/80 mb-0 line-clamp-2">
              {project.description}
            </p>

            <div className="mb-0">
              <hr className="my-2 h-px border-0 bg-primary/30" />
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-sm text-base-content/60">Technologies:</span>
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-xs sm:text-sm text-base-content/80"
                  >
                    {tech}{i < project.techStack.length - 1 ? "," : ""}
                  </motion.span>
                ))}
              </div>
              <hr className="my-2 h-px border-0 bg-primary/30" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 text-sm mt-0">
            <motion.a
              whileHover={{ x: 3 }}
              href={project.liveLink}
              className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> Live
            </motion.a>

            {project.frontendRepo && (
              <motion.a
                whileHover={{ x: 3 }}
                href={project.frontendRepo}
                className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> Frontend
              </motion.a>
            )}

            {project.backendRepo && (
              <motion.a
                whileHover={{ x: 3 }}
                href={project.backendRepo}
                className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="transition-transform duration-300 group-hover:-translate-x-1 " /> Backend
              </motion.a>
            )}

            <motion.button
              whileHover={{ x: 3 }}
              onClick={() => openModal(project)}
              className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-all duration-300"
            >
              <Eye size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>


          {/* Footer Link */}


          <div className="mt-4 text-center">
            <p className="text-sm mb-0">
              Other projects can be explored on{" "}
              <a
                href="https://github.com/mehedi-hasan1102" // <-- your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
              >GitHub <Github className="group-hover:translate-x-1 transition-transform duration-300 " size={14} />
              </a>
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
