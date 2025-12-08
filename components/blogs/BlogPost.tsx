
"use client"; // ✅ Client component

import React from "react";
import { Blog } from "../../lib/blogs";
import { motion } from "framer-motion";
import { ScrollProgress } from "../ui/scroll-progress";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {
  return (
    <div
    className="mt-2 max-w-3xl mx-auto md:px-8">
        <ScrollProgress />
         <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="  bg-base-100 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl  mb-2 text-primary">{blog.title}</h1>

      {/* Meta */}
      <p className="text-sm sm:text-base text-base-content/60 mb-4 flex flex-wrap gap-2">
        {blog.date} • {blog.readTime} • {blog.category}
      </p>

      {/* Image */}
      {blog.image && (
        <div className="mb-6 overflow-hidden rounded-xl max-w-3xl border border-primary/30 p-2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105 "
          />
        </div>
      )}

      {/* Full Content */}
      <div
        className="prose prose-sm sm:prose-base md:prose-lg max-w-full text-base-content leading-relaxed whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />
    </motion.div> </div>
    
  );
}
