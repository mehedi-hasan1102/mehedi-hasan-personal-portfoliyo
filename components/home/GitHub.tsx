'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const USERNAME = 'mehedi-hasan1102';
const WEEKS_PER_YEAR = 53;
const MIN_BLOCK_SIZE = 6;
const MAX_BLOCK_SIZE = 14;

const GitHubActivitySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [blockSize, setBlockSize] = useState<number>(MAX_BLOCK_SIZE);
  const [blockMargin, setBlockMargin] = useState<number>(2);
  const [fontSize, setFontSize] = useState<number>(16);

  /**
   * Dynamically calculate GitHub calendar block size
   * to avoid horizontal scrolling on any screen size.
   */
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      // Each week column needs margin space
      const totalMargin = WEEKS_PER_YEAR * blockMargin * 2;

      const calculatedSize = Math.floor(
        (width - totalMargin) / WEEKS_PER_YEAR
      );

      const finalBlockSize = Math.min(
        Math.max(calculatedSize, MIN_BLOCK_SIZE),
        MAX_BLOCK_SIZE
      );

      setBlockSize(finalBlockSize);
      setFontSize(width < 400 ? 10 : width < 600 ? 12 : 16);
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [blockMargin]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <p className="text-sm text-primary mb-0">• Contributions</p>
          <h2 className="text-xl">
            GitHub <span className="text-base-content/60">Activity</span>
          </h2>
        </motion.div>

        {/* Calendar */}
        <motion.div
          ref={containerRef}
          className="flex justify-center w-full"
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
        >
          <GitHubCalendar
            username={USERNAME}
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
