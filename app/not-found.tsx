
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
    <section className="font-geist mx-auto px-0   max-w-3xl relative  overflow-hidden flex justify-center pt-0">

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen rounded-lg  sm:p-2   shadow-xl backdrop-blur-sm w-full mt-1"
      >

<motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 text-center "
        >
          <p className="text-sm text-primary mb-0"> • Oops</p>
          <h2 className="text-2xl">
            Content  <span className="text-base-content/60"> Unavailable !</span>
          </h2>
        </motion.div>

        
      
        {/* Icon */}
        <motion.div className="flex justify-center mb-6" variants={iconVariants} animate="animate">
          <Zap size={80} className="text-primary drop-shadow-lg" />
        </motion.div>

        {/* 404 text */}
        <h1 className="text-7xl sm:text-8xl 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-primary to-secondary 
          text-center mb-2">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl text-base-content text-center mb-2">
          The page you’re looking for doesn’t exist or has been moved.
Let’s get you back to something useful.
</h2>

    

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
          You can explore my projects, skills, or contact section from the homepage.
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
