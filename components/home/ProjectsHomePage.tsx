'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight, } from "lucide-react";
import projectsData from "@/data/projects.json";
import { BorderBeam } from "@/components/ui/border-beam";
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

// type FilterType = "All" | "Frontend" | "Backend" | "Full Stack";

const ProjectsHomePage: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData as Project[]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [filter, setFilter] = useState<FilterType>("All");

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Always show only first 4 projects
  const filteredProjects = projects
    // .filter((project) => filter === "All" || project.type === filter)
    .slice(0, 4);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-base-content font-geist mx-auto pt-1  max-w-3xl"
      >
        <div className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-2 backdrop-blur-sm  transition-shadow duration-300">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-0 text-center mx-auto"
          >
            <p className="text-sm text-primary mb-0">• Projects</p>
            <h2 className="text-xl mb-4">
             Recent <span className="text-base-content/60 ">Works </span>
            </h2>

          </motion.div>

          {/* Filter Buttons */}
          {/* <div className="flex justify-center  gap-2 mb-4 flex-wrap">
            {["All", "Frontend", "Backend", "Full Stack"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as FilterType)}
                className={` p-2 
                  group inline-flex items-center gap-2 hover:text-primary rounded-lg font-geist text-sm sm:text-base transition-all duration-300
                  ${filter === type ? " scale-105 underline underline-offset-4 decoration-wavy decoration-2 decoration-primary" : "text-base-content"}
                  hover:scale-105
                `}
              >
                {type}
              </button>
            ))}
          </div> */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-base-100 rounded-lg p-2  transition shadow hover:shadow-lg overflow-hidden"
              >
                <BorderBeam size={30} duration={8} colorFrom="#22c55e" colorTo="#16a34a" />

                {/* Project Image */}
                {/* <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg mb-2 relative group"
                >
                  

                  <img
  src={project.images[0]}
  alt={project.title}
  className="w-full h-44 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 hidden md:block"
/>

                </motion.div> */}

                {/* <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg mb-2 relative"
                >
                  {project.videos && project.videos.length > 0 ? (
                    <video
                      src={project.videos[0]}
                      className="w-full h-44 object-cover rounded-lg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) 
                  
                  : (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-44 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  )
                  
                  }
                </motion.div> */}
<motion.div className="overflow-hidden rounded-lg relative w-full h-32 sm:h-36 mb-2">
                  {project.videos && project.videos.length > 0 ? (
                    <video
                      src={project.videos[0]}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 shadow-sm"
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
                      style={{ objectFit: "cover" }}
                      className="rounded-lg transition-transform duration-500 group-hover:scale-105 shadow-sm"
                      priority
                    />
                  )}
                </motion.div>



                {/* Project Info */}
                <h3 className="font-medium text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-base-content/80 leading-relaxed mb-2">
                  {project.description.length > 50
                    ? `${project.description.slice(0, 50)}...`
                    : project.description}
                </p>

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2 mb-2 text-xs ">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-0 text-xs sm:text-sm border border-primary/30 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}


         {/* Tech Stack */}
       <div className="absolute top-30 left-4 flex gap-2">
  {project.techStack.slice(0, 1).map((tech, i) => (
    <span
      key={i}
      className="px-3 py-0 text-xs sm:text-sm rounded-full bg-base-100 shadow whitespace-nowrap border border-primary/30"
    >
      {tech}
    </span>
  ))}
</div>



                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-between gap-4 text-sm whitespace-nowrap">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.liveLink}
                    className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Live
                  </motion.a>

                  <motion.button
                    whileHover={{ x: 3 }}
                    onClick={() => openModal(project)}
                    className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
                  >
                    <Eye size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />  Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-4 text-center">
  <p className="text-sm mb-0">
    Other projects can be explored on{" "}
    <a
      href="https://github.com/mehedi-hasan1102" // <-- your GitHub link
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
    >GitHub <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300 " size={16} />
    </a>
  </p>
</div> */}

          <div className="mt-4 text-center">
            <a
              href="/projects"
              className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary font-geist text-sm cursor-pointer transition-all duration-300"
            >
              See all projects <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </a>
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

export default ProjectsHomePage;
