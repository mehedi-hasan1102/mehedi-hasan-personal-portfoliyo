"use client";

import React from "react";
import { motion } from "framer-motion";

type BadgeProps = {
  status: "Freelance" | "Full-time";
};

const AvailabilityBadge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 rounded-full px-4 py-2 border border-primary/30 bg-base-200/80 backdrop-blur-sm shadow-lg shadow-primary/20"
      >
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            status === "Freelance" ? "bg-green-400" : "bg-primary"
          } animate-pulse`}
        />
        <span className="text-xs font-medium text-base-content/80">
          Available for {status === "Freelance" ? "Freelancing" : "Full-time"}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default AvailabilityBadge;
