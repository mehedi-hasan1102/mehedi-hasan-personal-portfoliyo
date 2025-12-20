'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar"; // ✅ Named import

const GitHubActivitySection: React.FC = () => {
  const username = "mehedi-hasan1102";
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [blockSize, setBlockSize] = useState<number>(14);
  const [blockMargin, setBlockMargin] = useState<number>(4);
  const [fontSize, setFontSize] = useState<number>(16);

  // Validate GitHub user
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub user");
        return res.json();
      })
      .then(() => setError(null))
      .catch((err: Error) => setError(err.message));
  }, [username]);

  // Responsive block size based on container width
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;

        const totalMargin = 52 * 2; // approx 2px margin on each side between blocks
        const calculatedBlockSize = Math.floor((width - totalMargin) / 53);

        const newBlockSize = Math.min(Math.max(calculatedBlockSize, 6), 14);

        setBlockSize(newBlockSize);
        setBlockMargin(2);
        setFontSize(width < 400 ? 10 : width < 600 ? 12 : 16);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  if (error) return null;

  return (
    <motion.section
    
      id="github-activity"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1 "
    >
      <div className=" rounded-lg p-2 border border-primary/30  bg-base-200 backdrop-blur-sm  transition-shadow duration-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <p className="text-sm text-primary mb-0">• Contributions</p>
          <h2 className="text-2xl">
            Github <span className="text-base-content/60">Activity</span>
          </h2>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          ref={containerRef}
          className="overflow-x-auto flex justify-center "
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{ minWidth: 0 }}
        >
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubActivitySection;
