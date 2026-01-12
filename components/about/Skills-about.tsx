'use client';

import React, { useMemo } from "react";
import { motion, easeInOut } from "framer-motion";
import skillsData from "@/data/skills-list.json";

type SkillCategory = {
  category: string;
  skills: string[];
};

const SkillsAboutSection: React.FC = () => {
  const skillItems: SkillCategory[] = useMemo(() => {
    if (Array.isArray(skillsData)) {
      return skillsData.filter(
        (item) =>
          item &&
          typeof item.category === "string" &&
          Array.isArray(item.skills)
      );
    }
    return [];
  }, []);

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: easeInOut } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-20 font-geist flex flex-col items-center overflow-hidden relative"
    >
      <div className="relative mb-20 group">
        {/* <motion.div
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          className="relative z-10 border-[1.5px] border-base-content px-10 py-4 bg-base-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.02)]"
        >
          <h2 className="text-xl md:text-base font-black tracking-[0.3em] uppercase text-base-content">
            Expertise Stack
          </h2>
        </motion.div> */}
        <motion.div
  initial={{ y: -12 }}
  whileInView={{ y: 0 }}
  className="
    relative z-10
    border-[1px] border-base-content
    px-4 py-2
    sm:px-6 sm:py-3
    md:px-8 md:py-3
    bg-base-100
    shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]
    sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)]
    md:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)]
    dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.02)]
    sm:dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.02)]
    md:dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.02)]
  "
>
  <h2
    className="
      text-sm
      sm:text-base
      md:text-lg
      font-black
      tracking-[0.2em]
      sm:tracking-[0.25em]
      md:tracking-[0.25em]
      uppercase
      text-base-content
    "
  >
    Expertise Stack
  </h2>
</motion.div>


        <div className=" absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[500px] h-20 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 500 80" fill="none">
            <motion.path d="M250 0 V80" className="stroke-primary/80" strokeWidth="1" variants={lineVariants} initial="hidden" whileInView="visible" />
            <motion.path d="M250 0 V40 H80 V80" className="stroke-base-content/60" strokeWidth="1" variants={lineVariants} initial="hidden" whileInView="visible" />
            <motion.path d="M250 0 V40 H420 V80" className="stroke-base-content/60" strokeWidth="1" variants={lineVariants} initial="hidden" whileInView="visible" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full relative">
        {skillItems.map(({ category, skills }, idx) => (
          <div key={idx} className={`flex flex-col ${idx === 0 ? "md:items-end" : "md:items-start"} items-center`}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-widest text-base-content/40 mb-4 font-bold"
            >
              {category}
            </motion.span>

            <div className={`flex flex-wrap gap-2 ${idx === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
              {skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(var(--p), 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden px-3 py-1.5 text-[11px] bg-base-100 font-semibold tracking-wide  backdrop-blur-md border border-base-content/5 text-base-content/80 rounded-lg cursor-default transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-10"
                  />
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsAboutSection;
