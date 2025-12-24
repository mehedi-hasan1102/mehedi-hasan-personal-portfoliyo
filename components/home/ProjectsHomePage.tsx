'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const ProjectsHomePage: React.FC = () => {
  const projects: Project[] = projectsData as Project[];
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Always show first 4 projects
  const displayedProjects = projects.slice(0, 4);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-base-content font-geist mx-auto pt-1 max-w-3xl"
      >
        <div className="relative overflow-hidden border border-primary/30 bg-base-200 rounded-lg p-2 backdrop-blur-sm transition-shadow duration-300">
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
              Recent <span className="text-base-content/60">Works</span>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} onOpenModal={openModal} />
            ))}
          </div>

          {/* Footer Link */}
          <div className="mt-4 text-center">
  <a
    href="/projects"
    className="underline-offset-4 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-transform duration-300 hover:translate-x-1"
  >
    All Projects <ArrowUpRight size={14} className="ml-1 transition-transform duration-300" />
  </a>
</div>
        </div>
      </motion.section>

      {/* Modal */}
      <ProjectModal
        showModal={showModal}
        selectedProject={selectedProject}
        closeModal={closeModal}
      />
    </>
  );
};

export default ProjectsHomePage;
