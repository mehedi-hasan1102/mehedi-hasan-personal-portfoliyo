'use client';

import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import { BorderBeam } from "@/components/ui/border-beam";

/* ------------------ Animation Variants ------------------ */

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

/* ------------------ Static Styles ------------------ */

const signatureMaskStyle = {
  mask: "url('https://i.ibb.co/pjK7xwK3/mehedi-hasan-signeture.png') center / contain no-repeat",
  WebkitMask:
    "url('https://i.ibb.co/pjK7xwK3/mehedi-hasan-signeture.png') center / contain no-repeat"
};

/* ------------------ Component ------------------ */

const HeroSection: React.FC = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  // Defer typewriter to avoid blocking initial render (ESLint safe)
  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowTypewriter(true);
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="font-geist w-full max-w-3xl mx-auto flex items-center justify-center pt-1"
    >
      <div className="border border-primary/30 bg-base-200 backdrop-blur-sm relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center w-full rounded-lg p-4 gap-0 transition-shadow duration-300">
        <BorderBeam
          size={100}
          duration={8}
          colorFrom="#22c55e"
          colorTo="#16a34a"
        />

        {/* Left Section */}
        <motion.div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="w-36 sm:w-44 md:w-48 overflow-hidden"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/images/profile.png"
                alt="Mehedi Hasan"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="flex justify-center items-center h-12 sm:h-16">
              <div
                className="w-4/5 max-w-xs h-full bg-primary"
                style={signatureMaskStyle}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance p-2"
        >
          <span className="text-xl text-base-content font-geist flex flex-wrap items-center">
            {showTypewriter && (
              <Typewriter
                words={["Hi, I'm Mehedi Hasan"]}
                loop={1}
                cursor
                typeSpeed={100}
                deleteSpeed={0}
              />
            )}
          </span>

          <motion.h1
            variants={slideUp}
            transition={{ delay: 0.3 }}
            className="text-3xl leading-tight mt-4 break-words"
          >
            A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Full-Stack
            </span>{" "}
            Web Developer
            <span className="animate-blink">_</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm sm:text-base font-geist text-base-content/60 break-words"
          >
            I build full-stack web apps using{" "}
            <span className="bg-primary/20 text-primary font-medium px-1 rounded">
              Next.js & React
            </span>
            ,{" "}
            <span className="bg-primary/20 text-primary font-medium px-1 rounded">
              TypeScript
            </span>
            , and{" "}
            <span className="bg-primary/20 text-primary font-medium px-1 rounded">
              Node.js
            </span>
            , focusing on clean architecture, smooth UX, and high-performance solutions.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-2">
            <motion.a
              variants={slideUp}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              whileTap={{ scale: 0.97 }}
              href="/Resume_of_Mehedi_Hasan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-primary underline-offset-6 decoration-dashed hover:underline rounded-lg font-geist text-sm transition-all duration-300"
            >
              <Download size={14} />
              [View Resume]
            </motion.a>

            <motion.div
              variants={slideUp}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              whileTap={{ scale: 0.97 }}
            >
              <ScrollLink
                to="hire-me"
                smooth
                duration={500}
                className="underline-offset-6 decoration-dashed hover:underline rounded-lg group inline-flex items-center gap-1 hover:text-primary font-geist text-sm cursor-pointer transition-all duration-300"
              >
                [Hire Me]
                <Mail size={14} />
              </ScrollLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(HeroSection);
