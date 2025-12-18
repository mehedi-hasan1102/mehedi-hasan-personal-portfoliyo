'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Blog, BlogMetaData } from "@/lib/blogs";
import Image from "next/image";


interface BlogHomePageProps {
  latestBlogs: BlogMetaData[];
}

const BlogHomePage: React.FC<BlogHomePageProps> = ({ latestBlogs }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1  rounded-lg px-0 "
    >
      <div className="rounded-lg p-2 backdrop-blur-sm shadow-lg">
        {/* Section Header */}
        <div className="mb-4 text-center">
          <p className="text-sm text-primary mb-0 font-geist">• Insights & Tutorials</p>
          <h2 className="text-2xl font-geist">
            Latest tips, stories, <span className="text-base-content/60">and guides</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 rounded-lg">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug} // Use slug as key
              href={`/blogs/${encodeURIComponent(blog.slug)}`}
              className="relative group bg-base-100 rounded-2xl p-2 transition shadow-sm overflow-hidden block"
            >
              <div className="relative rounded-lg mb-3 overflow-hidden  w-full aspect-video hidden md:block  group">
              
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
    quality={100}
  />





                <span className="absolute bottom-2 m-1 left-2 px-2 sm:px-3 py-0 text-xs sm:text-sm   rounded-lg bg-base-100 ">
                  {blog.category}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition">
                  <span className="bg-primary text-primary-content p-3 rounded-lg shadow-lg flex items-center gap-1">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <p className="text-xs text-base-content/50 mb-1">
                {blog.date} • {blog.readTime}
              </p>
              <h3 className="text-lg mb-2 text-primary/90">{blog.title}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-2 mb-2 text-center">
          <p className="text-sm" >
            Read{" "}
            <Link
              href="/blogs"
              className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
            >
              All Blogs <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1"  size={16} />
            </Link>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHomePage;
