
'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import Image from 'next/image';


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
  features?: string[]; // <-- dynamic key features
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
          className="font-geist fixed inset-0 backdrop-blur-sm z-[9999]
                     p-4 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-base-200 border border-primary/30 rounded-br-none rounded-tr-none rounded-2xl shadow-2xl
                       w-full max-h-[95vh] overflow-hidden flex flex-col relative max-w-2xl mx-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 z-30 rounded-lg p-2 sm:p-1 text-red-500 hover:bg-primary/20 transition-all"
              aria-label="Close modal"
            >
              <X size={14} />
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-scroll modal-scrollbar p-6 md:p-8 space-y-6">

              {/* Media Banner */}
              {/* <div className="w-full h-56 md:h-72 overflow-hidden flex-shrink-0">
                {selectedProject.videos?.length ? (
                  <video
                    src={selectedProject.videos[0]}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  selectedProject.images?.length > 0 && (
                    <Image
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )
                )}
              </div> */}

              {/* Media Banner */}
<div className="w-full h-56 md:h-72 overflow-hidden flex-shrink-0 relative rounded-lg">
  {selectedProject.videos?.length ? (
    <video
      src={selectedProject.videos[0]}
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  ) : selectedProject.images?.length ? (
    <Image
      src={selectedProject.images[0]}
      alt={selectedProject.title}
      fill // makes Image cover the parent div
      style={{ objectFit: 'cover' }}
      priority
    />
  ) : null}
</div>


              {/* Title + Actions */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl md:text-3xl ">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-6 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                  >
                    <ArrowUpRight size={14} />
                    Live
                  </motion.a>

                  {selectedProject.frontendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={selectedProject.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-6 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                    >
                      <Github size={14} />
                      Frontend
                    </motion.a>
                  )}

                  {selectedProject.backendRepo && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={selectedProject.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-6 decoration-dashed hover:underline  rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
                    >
                      <Github size={14} />
                      Backend
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Two Column Info */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Features */}
                <div className="bg-base-300/40 border border-primary/20 rounded-xl p-5 space-y-3">
                  <h3 className="text-md text-base-content">Key Features</h3>
                  <ul className="space-y-2 text-sm text-base-content/80 list-disc list-inside">
                    {selectedProject.features?.length ? (
                      selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))
                    ) : (
                      <li>No key features available</li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="bg-base-300/40 border border-primary/20 rounded-xl p-5 space-y-3">
                  <h3 className="text-md text-base-content">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-primary/30 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Sections */}
              {selectedProject.challenges && (
                <div>
                  <span className="text-md text-base-content">Challenges</span>
                  <p className="text-sm text-base-content/80 mt-1">
                    {selectedProject.challenges}
                  </p>
                </div>
              )}

              {selectedProject.futurePlans && (
                <div>
                  <span className="text-md text-base-content">Future Plans</span>
                  <p className="text-sm text-base-content/80 mt-1">
                    {selectedProject.futurePlans}
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
