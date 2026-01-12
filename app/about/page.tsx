'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";



import GitHubAboutSection from "@/components/about/GitHub-about";
import ResumeAboutSections from "@/components/about/Resume-about";
import SkillsAboutSection from "@/components/about/Skills-about";

const AboutPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist mx-auto pt-1 max-w-3xl min-h-screen space-y-6 "
    >
      {/* About Container */}
      <div className=" relative overflow-hidden rounded-lg p-4 bg-base-200 backdrop-blur-sm transition-shadow duration-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-start "
        >
          <h2 className="text-3xl ">About</h2>
        </motion.div>

        {/* Profile + Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left: Profile Image (portrait style) */}
          {/* <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full md:w-64 h-80 overflow-hidden rounded-xl flex-shrink-0"
          >
            <Image
              src="/assets/images/about.png"
              alt="Mehedi Hasan"
              fill
              className="object-cover"
              priority
            />
          </motion.div> */}
          <motion.div
  whileHover={{ scale: 1.03 }}
  className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-2xl shadow-lg flex-shrink-0 transition-transform duration-300"
>
  <Image
    src="/assets/images/about.png"
    alt="Mehedi Hasan"
    fill
    className="object-cover"
    priority
  />
</motion.div>


          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center max-w-2xl space-y-4"
          >
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I’m Mehedi Hasan, a Full-Stack Web Developer focused on building fast, scalable web
              applications using the MERN stack, Next.js, React, and Tailwind CSS.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I enjoy exploring modern web technologies, contributing to open source, and creating
              user-friendly solutions that deliver real impact.
            </p>

            <p
              className="
      text-sm sm:text-base text-base-content/80 leading-relaxed
    "
            >
              <span>You can find more about me on </span>

              <a
                href="https://www.linkedin.com/in/mehedi-hasan1102/"
                target="_blank"
                rel="noopener noreferrer"
                className="
          
         font-medium hover:text-primary
        hover:underline underline-offset-6 decoration-dashed
         transition-all duration-300
      "
              >
                LinkedIn ⤴
              </a>
             
            </p>
          </motion.div>

        </div>



{/* Skills first */}
<SkillsAboutSection />

{/* Resume / Experience */}
<ResumeAboutSections />

{/* GitHub Activity / Open Source */}
<GitHubAboutSection />
      </div>


    </motion.section>
  );
};

export default AboutPage;
