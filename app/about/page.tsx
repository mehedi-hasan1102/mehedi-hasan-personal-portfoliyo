'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


import { FiLinkedin } from "react-icons/fi";
import GitHubAboutSection from "@/components/about/GitHub-about";
import ResumeAboutSections from "@/components/about/Resume-about";
import SkillsAboutSection from "@/components/about/Skills-about";

const AboutPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist mx-auto pt-1 max-w-3xl min-h-screen space-y-6"
    >
      {/* About Container */}
      <div className=" relative overflow-hidden rounded-lg p-4 backdrop-blur-sm transition-shadow duration-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-start "
        >
          <h2 className="text-3xl ">About Me</h2>
        </motion.div>

        {/* Profile + Content */}
       <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
  {/* Left: Profile Image (portrait style) */}
  <motion.div
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
  </motion.div>

  {/* Right: Content */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="flex flex-col justify-center max-w-2xl space-y-4"
  >
    <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
      I&apos;m Mehedi Hasan, a passionate Full-Stack Developer specializing in building
      high-performance, scalable web applications. I have hands-on experience with
      the MERN stack and modern frontend frameworks like Next.js and React, along with
      styling libraries such as Tailwind CSS.
    </p>

    <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
      When I&apos;m not coding, I enjoy exploring new web technologies, learning about
      scalable architecture, and contributing to open-source projects. My goal is to
      deliver web solutions that not only meet client requirements but also provide a
      delightful user experience.
    </p>
  </motion.div>
</div>


        {/* Footer */}
       <div className="mt-6 text-center mb-6">
  <p className="text-sm mb-0 flex items-center justify-center gap-2">
    You can find more about me on
    <a
      href="https://www.linkedin.com/in/mehedi-hasan1102/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
    >
      LinkedIn
      <FiLinkedin size={14} className="transition-transform duration-300 group-hover:translate-x-1" /> 
    </a>
  </p>
</div>
         {/* Resume, GitHub Activity & Skills */}
      <ResumeAboutSections />
      <GitHubAboutSection />
      <SkillsAboutSection />
      </div>

     
    </motion.section>
  );
};

export default AboutPage;
