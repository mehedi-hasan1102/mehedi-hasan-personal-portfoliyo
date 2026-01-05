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
            GitHub Activity
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


{/* Footer */}
<div className="my-4 px-4 text-start">
 <p
    className="
      text-sm sm:text-base text-base-content/80 leading-relaxed
    "
  >
    <span>My coding journey, day by day, in open-source. Check out my </span>

    <a
      href="https://github.com/mehedi-hasan1102"
      target="_blank"
      rel="noopener noreferrer"
      className="
          
         font-medium hover:text-primary
        hover:underline underline-offset-4 decoration-dashed
         transition-all duration-300
      "
    >
      Github ⤴
    </a> 
   
  </p>
</div>


      </div>
    </motion.section>
  );
};

export default GitHubAboutSection;
