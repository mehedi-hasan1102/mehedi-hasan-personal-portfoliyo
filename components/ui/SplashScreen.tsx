"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100"
    >
      {/* Fade box container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative px-8 sm:px-12 md:px-16
          py-6 sm:py-8 md:py-10
          rounded-2xl
          backdrop-blur-md bg-base-100/80
          flex flex-col items-center text-center
        "
      >
        {/* Logo icon with responsive animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [1.2, 0.9, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-primary select-none"
        >
          <motion.span
            initial={{ strokeDasharray: 180, strokeDashoffset: 180 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl md:text-6xl"
          >
            &lt;/&gt;
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="font-mono mt-2 sm:mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl tracking-wide"
        >
          Mehedi <span className="text-base-content/60 font-mono">Hasan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-mono text-base-content/60 tracking-wide"
        >
           Full-Stack Developer & Tech Enthusiast
        </motion.p>
      </motion.div>
    </motion.div>
  );
}