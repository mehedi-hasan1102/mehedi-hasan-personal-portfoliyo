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
          <p className="text-sm text-primary mb-0 font-geist">• Articles</p>
          <h2 className="text-xl font-geist">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </div>

        {/* Blog Cards */}


        <div className="   gap-2 lg:gap-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${encodeURIComponent(blog.slug)}`}
              className="
        group block bg-base-100 rounded-lg overflow-hidden
        shadow-sm transition-all duration-300
        hover:shadow-md hover:-translate-x-1    hover:rotate-[0.6deg]
      "
            >
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden hidden md:block ">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 "
                />

                {/* Category */}
                <span className="absolute bottom-2 left-2 px-2 sm:px-3 text-xs sm:text-sm rounded-lg bg-base-100">
                  {blog.category}
                </span>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition">
                  <span className="opacity-0 group-hover:opacity-100 transition bg-primary text-primary-content p-3 rounded-lg shadow-lg">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="text-xs text-base-content/50 mb-1">
                  {blog.date} • {blog.readTime}
                </p>

                <h3 className="font-medium text-primary/90 leading-snug">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>


        <div className="mt-2 mb-2 text-center ">
          <p className="text-sm" >
            Read{" "}
            <Link
              href="/blog"
              className="underline-offset-4 decoration-dashed hover:underline p-2 rounded-lg group inline-flex items-center gap-2 text-primary  font-geist text-sm cursor-pointer transition-all duration-300"
            >
              All Posts <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </Link>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHomePage;
