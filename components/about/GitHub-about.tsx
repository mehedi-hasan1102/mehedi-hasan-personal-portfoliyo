'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from "lucide-react";

const GitHubAboutSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="rounded-lg  backdrop-blur-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-center"
        >
          {/* <p className="text-sm text-primary mb-0">• Contributions</p> */}
          <h2 className="text-xl text-start">
            My GitHub <span className="text-base-content/60">Activity</span>
          </h2>
        </motion.div>

        {/* Calendar Image */}
        <div className=" rounded-lg overflow-hidden p-4 ">
          <img
            src="https://ghchart.rshah.org/mehedi-hasan1102"
            alt="Mehedi Hasan's GitHub Contribution Graph"
            className="w-full h-auto"
            loading="lazy"
          />

      
        </div>
          {/* Footer Link */}
 <div className="my-4 flex  gap-2 text-sm">
  <p className="text-center">
    I build what excites me and release it all as open source.
  </p>

  <a
    href="https://github.com/mehedi-hasan1102"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-1
               text-primary font-geist
               transition-all duration-300
               hover:underline underline-offset-4 decoration-dashed"
  >
    Follow on GitHub
    <Github
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>
</div>




      </div>
    </motion.section>
  );
};

export default GitHubAboutSection;
