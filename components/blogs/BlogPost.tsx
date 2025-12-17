
"use client";
import { Blog } from "../../lib/blogs";
import { motion } from "framer-motion";
import { ScrollProgress } from "../ui/scroll-progress";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {
  return (
    <div className="pt-1 max-w-3xl mx-auto ">
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-base-100 backdrop-blur-sm rounded-lg p-4 sm:p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
     prose prose-sm sm:prose-base lg:prose-lg
    max-w-none
    text-base-content
    leading-relaxed

    [&_p]:my-6

    [&_h1]:mt-14 [&_h1]:mb-6
    [&_h2]:mt-12 [&_h2]:mb-5
    [&_h3]:mt-10 [&_h3]:mb-4
    [&_h4]:mt-8  [&_h4]:mb-3

    [&_a]:text-primary
    [&_a]:font-medium
    [&_a]:underline-offset-4
    [&_a]:transition-colors
    [&_a]:duration-200
    [&_a:hover]:underline
    [&_a:hover]:text-primary/80

    [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-6 [&_ul]:space-y-2
    [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-6 [&_ol]:space-y-2

    [&_blockquote]:border-l-4
    [&_blockquote]:border-primary/40
    [&_blockquote]:pl-4
    [&_blockquote]:italic
    [&_blockquote]:text-base-content/80
   
  "
  dangerouslySetInnerHTML={{ __html: blog.fullContent }}
/>



      </motion.div>
    </div>
  );
}
