

import React from "react";
import { Blog, getBlogData, getSortedBlogsData } from "../../../lib/blogs";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const blogs = await getSortedBlogsData();

  return blogs
    .filter((blog) => typeof blog.slug === 'string' && blog.slug.length > 0)
    .map((blog) => ({
      slug: blog.slug,
    }));
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) { // Add this check
    notFound();
  }

  const blog = await getBlogData(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
       <div className="w-full max-w-3xl px-0 sm:px-4 md:px-8 mx-auto font-mono py-0 pt-2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base-100 backdrop-blur-sm  transition-shadow relative z-5  hover:shadow-2xl rounded-lg py-4 w-full  px-4 sm:px-4 md:px-4 mx-auto font-mono duration-300"
          >
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl  mb-4 text-primary">{blog.title}</h1>

            {/* Meta */}
            <p className="text-sm text-base-content/50 mb-6 flex flex-wrap gap-2">
              {blog.date} • {blog.readTime} • {blog.category}
            </p>

            {/* Image */}
            {blog.image && (
              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Full Content */}
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-full text-base-content whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
          </motion.div>
        </div>
    </>
  );
}
