'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiExpress,
} from "react-icons/si";

const whatIDo = [
  {
    text: "Build modern, responsive UIs with React & Next.js",
    icon: SiNextdotjs, // Next.js icon for frontend
  },
  {
    text: "Develop REST APIs using Node.js & Express",
    icon: SiExpress, // Express icon for backend
  },
  {
    text: "Design MongoDB schemas and implement CRUD operations",
    icon: SiMongodb, // MongoDB icon
  },
  {
    text: "Implement authentication & role-based access (JWT / Firebase)",
    icon: SiFirebase, // Firebase icon
  },
  {
    text: "Optimize performance and user experience",
    icon: SiTailwindcss, // Tailwind icon
  },
  {
    text: "Collaborate with Git, GitHub, and version control best practices",
    icon: SiGithub, // GitHub icon
  },
];

const WhatIDoSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-2 bg-base-200 border border-primary/30 rounded-lg mt-1"
      id="what-i-do"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-4 text-center"
      >
        <p className="text-sm text-primary mb-0">• What I Do</p>
        <h2 className="text-xl">
          Adding <span className="text-base-content/60">Value</span>
        </h2>
      </motion.div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {whatIDo.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-base-100 rounded-lg shadow-sm border border-base-300 hover:shadow-md transition-all"
            >
              <IconComponent size={32} className="text-primary mt-1" />
              <p className="text-base text-base-content/80">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default WhatIDoSection;
