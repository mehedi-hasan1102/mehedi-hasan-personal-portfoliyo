'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight} from 'lucide-react';


import Link from 'next/link';


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
          className="m-4 text-start"
        >
          <p className="text-sm text-base-content mb-0">• Contributions</p>
          <h2 className="text-2xl">
            GitHub <span className="text-base-content/60">Activity</span>
          </h2>
        </motion.div>

        {/* Calendar Image */}
        <div className="bg-base-200 rounded-lg overflow-hidden px-4">
          <img
            src="https://ghchart.rshah.org/mehedi-hasan1102"
            alt="Mehedi Hasan's GitHub Contribution Graph"
            className="w-full h-auto"
            loading="lazy"
          />

      
        </div>
       
<div className="my-4 px-4  text-center">
 {/* <p
    className="
      text-sm   leading-relaxed
    "
  >
    <span>Explore </span>

    <Link
      href="https://github.com/mehedi-hasan1102"
      target="_blank"
      rel="noopener noreferrer"
      className="
          
         font-medium hover:text-primary
        hover:underline underline-offset-6 decoration-dashed
         transition-all duration-300
      "
    >
      Github ⤴
    </Link> 
   
  </p> */}
  <Link
  href="https://github.com/mehedi-hasan1102"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group inline-flex items-center gap-1
    text-sm
    transition-all
    hover:text-primary
    hover:underline underline-offset-6 decoration-dashed
  "
>
  View GitHub
  <ArrowUpRight  
    size={14}
    className="transition-transform duration-200 group-hover:translate-x-1"
  />
</Link>

</div>


      </div>
    </motion.section>
  );
};

export default GitHubActivitySection;
