
"use client";

import Link from "next/link";
import React, { useEffect, useState, useMemo, JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Zap, Home } from "lucide-react";

const NotFound = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants: Variants = {
    animate: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  // Particles
  const Particle: React.FC<{ id: number }> = ({ id }) => {
    const { startX, startY, animX, animY, opacity, duration } = useMemo(() => {
      return {
        startX: Math.random() * 400 - 200,
        startY: Math.random() * 400 - 200,
        animX: Math.random() * 40 - 20,
        animY: Math.random() * 40 - 20,
        opacity: 0.15 + Math.random() * 0.2,
        duration: 4 + Math.random() * 4,
      };
    }, [id]);

    return (
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-primary/40"
        initial={{ x: startX, y: startY, opacity }}
        animate={{ x: [startX, animX, startX], y: [startY, animY, startY] }}
        transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
      />
    );
  };

  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 25 }, (_, i) => <Particle key={i} id={i} />));
  }, []);

  return (
    <section className="font-geist mx-auto px-0 sm:px-6 md:px-8 max-w-4xl relative  overflow-hidden flex justify-center pt-0">

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 border border-primary/30 rounded-3xl p-6 sm:p-10   sm:mx-0 md:mx-16 shadow-xl backdrop-blur-sm w-full mt-2"
      >
        {/* Name Header */}
        <div className="mb-4 text-center text-primary text-2xl">
          &lt; Mehedi Hasan /&gt;
        </div>

        {/* Icon */}
        <motion.div className="flex justify-center mb-6" variants={iconVariants} animate="animate">
          <Zap size={80} className="text-primary drop-shadow-lg" />
        </motion.div>

        {/* 404 text */}
        <h1 className="text-7xl sm:text-8xl font-extrabold 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-primary to-secondary 
          text-center mb-2">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl text-base-content text-center mb-2">
  This content isn&apos;t available right now
</h2>

        {/* <p className="text-base-content/60 text-center mb-6">
          The page you are looking for is not available.
        </p> */}

        {/* Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            
          >
            <span className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300">
              <Home size={16} className="group-hover:-translate-x-1 transition-transform duration-300 " />
              [ Go Home ]
            </span>
          </Link>
        </div>

        <p className="text-center text-xs text-base-content/50 mt-4">
          Check the URL or try another section of the website.
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
