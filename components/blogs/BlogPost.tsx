
"use client";
import { Blog } from "../../lib/blogs";
import { motion } from "framer-motion";
import { ScrollProgress } from "../ui/scroll-progress";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {
  return (
    <div className="mt-2 max-w-3xl mx-auto md:px-8">
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-base-100 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2  text-primary leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <p className="text-sm sm:text-base text-base-content/60 mb-4 flex flex-wrap gap-2">
          {blog.date} • {blog.readTime} • {blog.category}
        </p>

        {/* Image */}
        {blog.image && (
          <div className="mb-4 overflow-hidden rounded-xl border border-primary/30 p-0 shadow-sm">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Full Content */}
       

       


<div
  className="
    prose prose-sm sm:prose-base md:prose-lg max-w-full text-base-content
    leading-relaxed text-justify
    [&_a]:text-primary [&_a]:no-underline [&_a]:underline-offset-4 [&_a]:decoration-dashed
    [&_a]:transition [&_a]:duration-300 [&_a]:ease-in-out
    [&_a:hover]:underline [&_a:hover]:text-primary/80
    [&_ol]:list-decimal [&_ol]:ml-8 [&_ol]:space-y-2
    [&_ul]:list-disc [&_ul]:ml-8 [&_ul]:space-y-2
    [&_p]:mt-6 [&_p]:mb-6
    [&_h1]:mt-12 [&_h1]:mb-6
    [&_h2]:mt-10 [&_h2]:mb-4
    [&_h3]:mt-8 [&_h3]:mb-3
   
  "
  dangerouslySetInnerHTML={{ __html: blog.fullContent }}
/>



      </motion.div>
    </div>
  );
}
