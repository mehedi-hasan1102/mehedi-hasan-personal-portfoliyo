'use client';

import React from "react";
import { motion } from "framer-motion";
import skillsData from "@/data/skills-list.json";

type SkillCategory = {
  category: string;
  skills: string[];
};

const SkillsAboutSection: React.FC = () => {
  const skillItems = skillsData as SkillCategory[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto"
    >
      <motion.div
        className="relative overflow-hidden rounded-lg p-2 backdrop-blur-sm space-y-6 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl">
            Expertise <span className="text-base-content/60">Areas</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {skillItems.map(({ category, skills }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-base-100 p-4 rounded-lg shadow-sm hover:shadow-md border border-base-200 transition-all"
            >
              <p className="font-medium text-primary mb-2">
                {category}
              </p>

              <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
                {skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsAboutSection;
