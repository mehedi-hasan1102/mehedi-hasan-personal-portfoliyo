'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowUpRight, Github, X } from "lucide-react";
import projectsData from "../../data/projects.json";
import { BorderBeam } from "../../components/ui/border-beam";

interface Project {
  title: string;
  description: string;
  images: string[];
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

  // Show first 6 projects for each filter
  const filteredProjects = projects
    .filter((project) => filter === "All" || project.type === filter)
    .slice(0, 6);

  return (
    <>
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-base-content font-mono mx-auto py-2 px-0 sm:px-6 md:px-8 max-w-3xl"
      >
        <div className="relative overflow-hidden rounded-lg p-6 backdrop-blur-sm transition-shadow duration-300">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-0 text-center mx-auto"
          >
            <p className="text-sm text-primary mb-0">• My All Works</p>
            <h2 className="text-2xl mb-4">
              Projects built for <span className="text-base-content/60">real-world needs</span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center  gap-2 mb-4 flex-wrap">
            {["All", "Frontend", "Backend", "Full Stack"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as FilterType)}
                className={` p-2 
                  group inline-flex items-center gap-2 hover:text-primary rounded-lg font-mono text-sm sm:text-base transition-all duration-300
                  ${filter === type ? " scale-105 underline underline-offset-4 decoration-wavy decoration-2 decoration-primary" : "text-base-content"}
                  hover:scale-105
                `}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Projects Glist */}
          <div className="space-y-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative overflow-hidden bg-base-100  rounded-md p-4 transition"
              >
                <BorderBeam
                  size={100}
                  duration={8}
                  borderWidth={1}
                  colorFrom="#22c55e"
                  colorTo="#16a34a"
                />
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-start">
                  {/* Image */}
                  <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover object-center rounded-lg shadow"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg  text-primary mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-base-content/80 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <hr className="my-3 h-px border-0 bg-primary/30" />
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
                        <hr className="my-3 h-px border-0 bg-primary/30" />
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2 text-sm">
                      <motion.a
                        whileHover={{ x: 3 }}
                        href={project.liveLink}
                        className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-x-1"  /> Live Demo
                      </motion.a>

                      {project.frontendRepo && (
                        <motion.a
                          whileHover={{ x: 3 }}
                          href={project.frontendRepo}
                          className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="transition-transform duration-300 group-hover:-translate-x-1"  /> Frontend
                        </motion.a>
                      )}

                      {project.backendRepo && (
                        <motion.a
                          whileHover={{ x: 3 }}
                          href={project.backendRepo}
                          className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="transition-transform duration-300 group-hover:-translate-x-1"  /> Backend
                        </motion.a>
                      )}

                      <motion.button
                        whileHover={{ x: 3 }}
                        onClick={() => openModal(project)}
                        className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                      >
                        <Eye size={16} className="transition-transform duration-300 group-hover:-translate-x-1"  /> View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm mb-0">
              Other projects can be explored on{" "}
              <a
                href="https://github.com/mehedi-hasan1102" // <-- your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
              >GitHub <ArrowUpRight className="group-hover:translate-x-1 transition-transform duration-300 " size={16} />
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-base-200 border border-primary/30 rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[95vh]"
            >
              {selectedProject.images?.length > 0 && (
                <div className="md:w-1/2 w-full h-48 sm:h-64 md:h-auto overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex-shrink-0">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col relative overflow-hidden">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-lg p-2 sm:p-1 hover:scale-120 hover:bg-primary/20 hover:text-red-600 text-xl sm:text-2xl font-mono shadow-lg  transition-all  text-red-500"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>

                <div className="overflow-y-auto pr-2 max-h-[85vh] space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-primary md:mt-6 mt-0">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0 text-xs sm:text-sm border-primary/30 border rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mt-2">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={selectedProject.liveLink}
                      className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Live Demo
                    </motion.a>

                    {selectedProject.frontendRepo && (
                      <motion.a
                        whileHover={{ x: 3 }}
                        href={selectedProject.frontendRepo}
                        className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="transition-transform duration-300 group-hover:-translate-x-1"  /> Frontend
                      </motion.a>
                    )}

                    {selectedProject.backendRepo && (
                      <motion.a
                        whileHover={{ x: 3 }}
                        href={selectedProject.backendRepo}
                        className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-mono text-sm cursor-pointer transition-all duration-300"

                        
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Backend
                      </motion.a>
                    )}
                  </div>

                  {selectedProject.challenges && (
                    <div>
                      <span className="text-sm">Challenges:</span>
                      <p className="text-sm text-base-content/80 mt-1">{selectedProject.challenges}</p>
                    </div>
                  )}

                  {selectedProject.futurePlans && (
                    <div>
                      <span className="text-sm">Future Plans:</span>
                      <p className="text-sm text-base-content/80 mt-1">{selectedProject.futurePlans}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AllProjectsPage;
