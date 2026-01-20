'use client';

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  techStack: string[];
  liveLink: string;
  frontendRepo?: string;
  backendRepo?: string;
  challenges?: string;
  futurePlans?: string;
  features?: string[];
}

interface ProjectModalProps {
  showModal: boolean;
  selectedProject: Project | null;
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  showModal,
  selectedProject,
  closeModal,
}) => {

  // Close on Escape + prevent body scroll
  useEffect(() => {
    if (!showModal) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showModal, closeModal]);

  // Memoize project data
  const project = useMemo(() => selectedProject, [selectedProject]);

  return (
    <AnimatePresence>
      {showModal && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-geist fixed inset-0 backdrop-blur-sm z-[99]
                     p-4 flex items-center justify-center"
          onClick={closeModal} // close on backdrop click
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-base-200 border border-primary/30 rounded-br-none rounded-tr-none rounded-2xl shadow-2xl
                       w-full max-h-[95vh] overflow-hidden flex flex-col relative max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 z-30 rounded-lg p-2 sm:p-1 text-red-500 hover:bg-primary/20 transition-all"
              aria-label="Close modal"
            >
              <X size={14} />
            </button>

            <div className="flex-1 overflow-y-scroll modal-scrollbar p-6 md:p-8 space-y-6">
              <div className="w-full h-56 md:h-72 overflow-hidden flex-shrink-0 relative rounded-lg">
                {project.videos?.length ? (
                  <video
                    src={project.videos[0]}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : project.images?.length ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                ) : null}
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl md:text-3xl ">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-6 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                  >
                    <ArrowUpRight size={14} />
                    Live
                  </motion.a>

                  {project.frontendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-6 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                    >
                      <Github size={14} />
                      Frontend
                    </motion.a>
                  )}

                  {project.backendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-6 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                    >
                      <Github size={14} />
                      Backend
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-base-300/40 border border-primary/20 rounded-xl p-5 space-y-3">
                  <h3 className="text-md text-base-content">Key Features</h3>
                  <ul className="space-y-2 text-sm text-base-content/80 list-disc list-inside">
                    {project.features?.length ? (
                      project.features.map((feature, index) => (
                        <li key={feature + index}>{feature}</li>
                      ))
                    ) : (
                      <li>No key features available</li>
                    )}
                  </ul>
                </div>

                <div className="bg-base-300/40 border border-primary/20 rounded-xl p-5 space-y-3">
                  <h3 className="text-md text-base-content">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={tech + i}
                        className="px-3 py-1 text-xs border border-primary/30 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.challenges && (
                <div>
                  <span className="text-md text-base-content">Challenges</span>
                  <p className="text-sm text-base-content/80 mt-1">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.futurePlans && (
                <div>
                  <span className="text-md text-base-content">Future Plans</span>
                  <p className="text-sm text-base-content/80 mt-1">
                    {project.futurePlans}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
