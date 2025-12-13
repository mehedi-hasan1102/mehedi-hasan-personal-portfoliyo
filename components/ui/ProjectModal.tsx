'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  liveLink: string;
  frontendRepo?: string;
  backendRepo?: string;
  challenges?: string;
  futurePlans?: string;
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
  return (
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
                className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-lg p-2 sm:p-1 text-red-500 hover:bg-primary/20 transition-all"
              >
                <X size={16} />
              </button>

              <div className="overflow-y-auto pr-2 max-h-[85vh] space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-primary">
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

                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={selectedProject.liveLink}
                    target="_blank"
                    className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg inline-flex items-center gap-2 text-primary"
                  >
                    <ArrowUpRight size={16} /> Live Demo
                  </motion.a>

                  {selectedProject.frontendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={selectedProject.frontendRepo}
                      target="_blank"
                      className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg inline-flex items-center gap-2 text-primary"
                    >
                      <Github size={16} /> Frontend
                    </motion.a>
                  )}

                  {selectedProject.backendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={selectedProject.backendRepo}
                      target="_blank"
                      className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg inline-flex items-center gap-2 text-primary"
                    >
                      <Github size={16} /> Backend
                    </motion.a>
                  )}
                </div>

                {selectedProject.challenges && (
                  <div>
                    <span className="text-sm">Challenges:</span>
                    <p className="text-sm text-base-content/80 mt-1">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                {selectedProject.futurePlans && (
                  <div>
                    <span className="text-sm">Future Plans:</span>
                    <p className="text-sm text-base-content/80 mt-1">
                      {selectedProject.futurePlans}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
