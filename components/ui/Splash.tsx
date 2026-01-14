'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Logo from "../common/Logo";

const SPLASH_KEY = "hasSeenSplash";

export default function Splash() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 🧠 Apple-style: per session
    const hasSeen = sessionStorage.getItem(SPLASH_KEY);

    if (hasSeen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    sessionStorage.setItem(SPLASH_KEY, "true");
    setVisible(true);

    const timer = setTimeout(() => {
      if (!containerRef.current) {
        setVisible(false);
        return;
      }

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => setVisible(false),
      });
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center
                 bg-base-100/70 backdrop-blur-lg"
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-200/30 via-transparent to-base-200/30" />

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mb-4"
        >
          <Logo />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs sm:text-sm font-geist tracking-wide text-base-content/60"
        >
          Full-Stack Developer
        </motion.p>
      </motion.div>
    </div>
  );
}
