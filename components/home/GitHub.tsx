'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from "lucide-react";

const GitHubActivitySection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <p className="text-sm text-primary mb-0">• Contributions</p>
          <h2 className="text-xl">
            GitHub <span className="text-base-content/60">Activity</span>
          </h2>
        </motion.div>

        {/* Calendar Image */}
        <div className="bg-base-200 rounded-lg overflow-hidden ">
          <img
            src="https://ghchart.rshah.org/mehedi-hasan1102"
            alt="Mehedi Hasan's GitHub Contribution Graph"
            className="w-full h-auto"
            loading="lazy"
          />

      
        </div>
          {/* Footer Link */}
 <div className="mt-4 text-center">
  <a
    href="/projects"
    className="underline-offset-4 decoration-dashed hover:underline rounded-lg inline-flex items-center gap-1 text-primary font-geist text-sm cursor-pointer transition-transform duration-300 hover:translate-x-1"
  >
    Follow on GitHub
    <Github size={14} className="ml-1 transition-transform duration-300" />
  </a>
</div>


      </div>
    </motion.section>
  );
};

export default GitHubActivitySection;
