

'use client';'use client';

import React from "react";
import { motion } from "framer-motion";
import OrbitalAnimation from "@/components/ui/OrbitalAnimation";
import Marquee from "react-fast-marquee";
import skillsData from "@/data/skills-list.json";

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

type TechIcon = {
  icon: React.ElementType;
  label: string;
  color?: string;
};

// Row 1 icons
const techIconsRow1: TechIcon[] = [
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiExpress, label: "Express.js" },
];

// Row 2 icons
const techIconsRow2: TechIcon[] = [
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiGit, label: "Git" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiJavascript, label: "JavaScript" },
];

type SkillCategory = {
  category: string;
  skills: string[];
};

const SkillsSection: React.FC = () => {
  const skillItems = skillsData as SkillCategory[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1 "
    >
      <div className="relative overflow-hidden rounded-lg p-4 bg-base-200 border border-primary/30 backdrop-blur-sm">

        {/* Orbital Animation */}
        <div className="absolute -top-7 -right-7 hidden md:block overflow-visible">
          <OrbitalAnimation />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className=" text-start m-4"
        >
          <p className="text-sm text-base-content mb-0">• Skills</p>
          <h2 className="text-2xl">
            Expertise <span className="text-base-content/60"> Area</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-center mx-auto ">

          {/* Scrolling Icons */}
          <div className="space-y-4 ">
            <div className="overflow-hidden w-[288px] md:w-auto mx-auto">
              <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
                <div className="flex gap-4 w-max pr-4">
                  {techIconsRow1.concat(techIconsRow1).map(({ icon: Icon, label }, idx) => (
                    <div
                      key={idx}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon width={24} height={24} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="overflow-hidden w-[288px] md:w-auto mx-auto ">
              <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
                <div className="flex gap-4 w-max pr-4">
                  {techIconsRow2.concat(techIconsRow2).map(({ icon: Icon, label }, idx) => (
                    <div
                      key={idx}
                      className="bg-base-100 w-12 h-12 flex items-center justify-center border border-base-300 rounded-md p-2 hover:border-primary transition"
                      title={label}
                    >
                      <Icon width={24} height={24} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>

          {/* Skills List from JSON */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm space-y-3 tracking-wide "
          >
            {skillItems.map(({ category, skills }, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
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

export default SkillsSection;
