'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const SkillsAboutSection = dynamic(() => import("@/components/about/Skills-about"), { ssr: false });
const ResumeAboutSections = dynamic(() => import("@/components/about/Resume-about"), { ssr: false });
const GitHubAboutSection = dynamic(() => import("@/components/about/GitHub-about"), { ssr: false });

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist mx-auto pt-1 max-w-3xl min-h-screen space-y-6"
    >
      <div className="relative overflow-hidden rounded-lg p-4 bg-base-200 backdrop-blur-sm">
        
        <motion.div {...fadeUp} className="my-4">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-lg flex-shrink-0"
          >
            <Image
              src="/assets/images/about.png"
              alt="Mehedi Hasan"
              fill
              sizes="(max-width: 768px) 200px, 224px"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex flex-col justify-center space-y-3"
          >
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I’m Mehedi Hasan, a Full-Stack Web Developer specializing in fast, scalable web applications using MERN, Next.js, React, and Tailwind CSS.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I build user-focused applications, contribute to open source, and enjoy turning ideas into practical solutions.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/mehedi-hasan1102/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary underline underline-offset-6 decoration-dashed transition-colors"
              >
                LinkedIn
              </a>.
            </p>
          </motion.div>
        </div>

        <SkillsAboutSection />
        <ResumeAboutSections />
        <GitHubAboutSection />
      </div>
    </motion.section>
  );
}
