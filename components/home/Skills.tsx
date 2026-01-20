'use client';

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import OrbitalAnimation from "@/components/ui/OrbitalAnimation";
import skillsData from "@/data/skills-list.json";
import { useInView } from "react-intersection-observer";

import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

/* ------------------ Types ------------------ */

type TechIcon = {
  icon: React.ElementType;
  label: string;
};

type SkillCategory = {
  category: string;
  skills: string[];
};

/* ------------------ Animation Variants ------------------ */

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const listHover = {
  hover: { x: 5 },
};

/* ------------------ Static Data ------------------ */

const techIconsRow1: TechIcon[] = [
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiExpress, label: "Express.js" },
];

const techIconsRow2: TechIcon[] = [
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiGit, label: "Git" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiJavascript, label: "JavaScript" },
];

/* ------------------ Memoized Heavy Components ------------------ */

const MemoOrbitalAnimation = memo(OrbitalAnimation);

/* ------------------ Marquee Wrapper ------------------ */

const MarqueeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return <div ref={ref}>{inView ? children : null}</div>;
};

/* ------------------ Component ------------------ */

const SkillsSection: React.FC = () => {
  const skillItems = skillsData as SkillCategory[];

  // Avoid concat on every render
  const marqueeRow1 = useMemo(() => [...techIconsRow1, ...techIconsRow1], []);
  const marqueeRow2 = useMemo(() => [...techIconsRow2, ...techIconsRow2], []);

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="relative overflow-hidden rounded-lg p-4 bg-base-200 border border-primary/30 backdrop-blur-sm">

        {/* Orbital Animation */}
        <div className="absolute -top-7 -right-7 hidden md:block overflow-visible">
          <MemoOrbitalAnimation />
        </div>

        {/* Header */}
        <motion.div
          variants={slideUp}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-start m-4"
        >
          <p className="text-sm text-base-content mb-0">• Skills</p>
          <h2 className="text-2xl">
            Expertise <span className="text-base-content/60"> Area</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-4 items-center mx-auto">

          {/* Marquee Icons */}
          <div className="space-y-4">
            <div className="overflow-hidden w-[288px] md:w-auto mx-auto">
              <MarqueeWrapper>
                <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
                  <div className="flex gap-4 w-max pr-4">
                    {marqueeRow1.map(({ icon: Icon, label }, idx) => (
                      <div
                        key={idx}
                        className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                        title={label}
                      >
                        <Icon size={24} />
                      </div>
                    ))}
                  </div>
                </Marquee>
              </MarqueeWrapper>
            </div>

            <div className="overflow-hidden w-[288px] md:w-auto mx-auto">
              <MarqueeWrapper>
                <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
                  <div className="flex gap-4 w-max pr-4">
                    {marqueeRow2.map(({ icon: Icon, label }, idx) => (
                      <div
                        key={idx}
                        className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                        title={label}
                      >
                        <Icon size={24} />
                      </div>
                    ))}
                  </div>
                </Marquee>
              </MarqueeWrapper>
            </div>
          </div>

          {/* Skills List */}
          <motion.ul
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm space-y-3 tracking-wide"
          >
            {skillItems.map(({ category, skills }) => (
              <motion.li
                key={category}
                variants={listHover}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors"
              >
                <span className="text-base-content font-medium">
                  {category}:
                </span>
                <span className="text-base-content/60">
                  {" "}{skills.join(", ")}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(SkillsSection);
