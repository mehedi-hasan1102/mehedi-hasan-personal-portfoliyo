
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  const pathname = usePathname();
  const [show, setShow] = useState(false); // default false on server

  useEffect(() => {
    if (pathname !== "/") return;

    const hasSeen = sessionStorage.getItem("homeSplashSeen");
    if (hasSeen) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
    sessionStorage.setItem("homeSplashSeen", "true");

    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null; // render nothing on server

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative px-2 py-2 sm:px-0 sm:py-0 rounded-2xl backdrop-blur-md bg-base-100/80 flex flex-col items-center text-center"
      >
        {/* Logo */}
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
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="font-mono mt-2 sm:mt-0 text-2xl sm:text-3xl md:text-4xl tracking-wide"
        >
          Mehedi <span className="text-base-content/60">Hasan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-1 sm:mt-0 text-sm sm:text-base md:text-lg font-mono text-base-content/60"
        >
          Full-Stack Developer & Tech Enthusiast
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
