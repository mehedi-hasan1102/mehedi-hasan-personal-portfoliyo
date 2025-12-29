'use client';

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";
import { motion, Variants } from "framer-motion";

interface BlogHomePageProps {
  latestBlogs: BlogMetaData[];
}

/* ---------------- Light Animation (Entry Only) ---------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function BlogHomePage({ latestBlogs }: BlogHomePageProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="text-sm text-primary mb-0">• Blog</p>
          <h2 className="text-xl">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </div>

        {/* Blog List */}
        <div className="flex flex-col">
          {latestBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="
                mb-2
                transition-transform duration-200 ease-out
                hover:translate-x-1
              "
            >
              <Link
                href={`/blog/${encodeURIComponent(blog.slug)}`}
                className="
                  group flex items-center gap-3
                  py-3 px-2
                  rounded-lg
                  border-b border-base-content/10
                  bg-base-100
                  transition-colors duration-200
                  
                "
              >
                {/* Image */}
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-base-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="64px"
                    quality={60}
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <h3 className="
                    font-medium leading-snug
                    text-primary/90 break-words
                    underline-offset-4 decoration-dashed
                    group-hover:underline
                  ">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-base-content/50">
                    {blog.date} • {blog.readTime} • {blog.category}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 text-center">
          <Link
            href="/blog"
            className="
              group inline-flex items-center gap-1
              text-primary text-sm font-geist
              transition-all
              hover:underline underline-offset-4 decoration-dashed
            "
          >
            See All Blogs
            <FileText
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
