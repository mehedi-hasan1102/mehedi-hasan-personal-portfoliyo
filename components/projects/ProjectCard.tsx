'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Eye } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

export interface Project {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  techStack: string[];
  type: 'Frontend' | 'Backend' | 'Full Stack' | 'All';
  liveLink: string;
  frontendRepo?: string;
  backendRepo?: string;
  challenges?: string;
  futurePlans?: string;
}

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {

  // Memoize project to prevent re-render on parent updates
  const memoProject = useMemo(() => project, [project]);

  return (
    <div
      className="
        relative bg-base-100 rounded-lg p-4 overflow-hidden
        shadow-sm transition-transform transition-shadow duration-300
        transform-gpu will-change-transform
        hover:shadow-xl hover:-translate-y-1 
      "
    >
      {/* Border Beam */}
      <BorderBeam
        size={32}
        duration={8}
        colorFrom="#22c55e"
        colorTo="#16a34a"
        className="absolute top-0 left-0"
      />

      {/* Media */}
      <div className="overflow-hidden rounded-lg relative w-full h-32 sm:h-36 mb-2 hidden sm:block ">
        {memoProject.videos?.length ? (
          <video
            src={memoProject.videos[0]}
            className="w-full h-full object-cover rounded-lg shadow-sm"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={memoProject.images?.[0] ?? '/fallback-image.jpg'}
          />
        ) : (
          <Image
            src={memoProject.images[0]}
            alt={memoProject.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg transition-transform duration-500 transform-gpu will-change-transform motion-safe:group-hover:scale-105"
          />
        )}
      </div>

      {/* Info */}
      <div className='space-y-2'>
        <h3 className="font-medium ">{memoProject.title}</h3>
        <p className="text-sm text-base-content/80 leading-relaxed">
          {memoProject.description.length > 64
            ? `${memoProject.description.slice(0, 64)}...`
            : memoProject.description}
        </p>

        {/* Tech Stack */}
        <div className="flex gap-1 mb-2">
          {memoProject.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="px-2 py-0 text-xs sm:text-xs rounded-full bg-base-100 shadow whitespace-nowrap border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between text-sm whitespace-nowrap">
          <a
            href={memoProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary text-sm transition-transform duration-300 hover:translate-x-1"
          >
            <ArrowUpRight size={14} /> Live
          </a>
          <button
            onClick={() => onOpenModal(memoProject)}
            aria-label={`View details for ${memoProject.title}`}
            className="underline-offset-6 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 hover:text-primary text-sm transition-transform duration-300 hover:translate-x-1"
          >
            <Eye size={14} /> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
