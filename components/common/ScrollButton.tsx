'use client';
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="hover:text-primary font-mono fixed bottom-20 right-6 z-50 p-3 rounded-lg
                 bg-base-200 text-base-content 
                 shadow-lg border border-primary/30 
                 hover:border-primary transition-all"
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </motion.button>
  );
};

export default ScrollToTopButton;
