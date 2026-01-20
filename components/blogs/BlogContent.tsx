'use client';

import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Blog } from "../../lib/blogs";

const MONTH_ORDER: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
};

type Structured = Record<string, Record<string, Blog[]>>;

interface BlogContentProps {
  years: string[];
  structured: Structured;
}

export function BlogContent({ years, structured }: BlogContentProps) {

  // Stable navigation handler
  const handleNavigate = useCallback((slug: string) => {
    window.location.href = `/blog/${slug}`;
  }, []);

  // Precompute sorted years, months, and blogs at top level
  const sortedData = useMemo(() => {
    return years.map((year) => {
      const months = Object.keys(structured[year])
        .sort((a, b) => MONTH_ORDER[b] - MONTH_ORDER[a]); // latest month first

      const monthData = months.map((month) => {
        const blogs = [...structured[year][month]].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        return { month, blogs };
      });

      const totalBlogs = monthData.reduce(
        (sum, m) => sum + m.blogs.length,
        0
      );

      return { year, monthData, totalBlogs };
    });
  }, [years, structured]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-base-200 mx-auto font-geist rounded-lg backdrop-blur-sm transition-shadow p-4"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="my-4 text-start"
      >
        <h2 className="text-3xl">Blog</h2>
      </motion.div>

      {sortedData.length === 0 ? (
        <p className="text-center justify-center items-center text-base-content/60 mt-6">
          No blogs found.
        </p>
      ) : (
        sortedData.map(({ year, monthData, totalBlogs }) => (
          <div key={year} className="p-0">
            <h2 className="text-xl mb-2 mt-2">
              {year} <span>• {totalBlogs}</span>
            </h2>
            <div className="h-[1px] bg-primary/40 mb-2"></div>

            {monthData.map(({ month, blogs }) => (
              <div key={month} className="mb-2">
                <h3 className="text-lg mb-2">{month}</h3>

                <div className="space-y-2">
                  {blogs.map((blog) => (
                    <motion.div
                      key={blog.slug}
                      className="
                        group flex gap-2 sm:gap-4 rounded-lg
                        px-4 py-2 sm:py-6
                        transition-all
                        hover:bg-base-100
                        cursor-pointer
                      "
                      onClick={() => handleNavigate(blog.slug)}
                    >
                      {/* Thumbnail */}
                      <div className="hidden sm:block w-32 h-24 relative overflow-hidden rounded-lg">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="
                            object-cover
                            transition-transform duration-300
                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className="
                            font-medium
                            text-base-content
                            transition-colors
                            underline-offset-6 decoration-dashed
                            group-hover:text-primary
                            group-hover:underline
                          "
                        >
                          {blog.title}
                        </h3>

                        <p className="mt-1 flex items-center gap-2 text-sm text-base-content/60 transition-colors">
                          {blog.date} • {blog.readTime}
                        </p>

                        <p className="mt-2 text-sm text-base-content/80 transition-colors">
                          {blog.description.slice(0, 60)}...
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </motion.section>
  );
}
