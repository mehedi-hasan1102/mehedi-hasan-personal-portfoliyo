'use client';

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";
import { motion } from "framer-motion";

interface BlogHomePageProps {
  latestBlogs: BlogMetaData[];
}

/* Motion variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export default function BlogHomePage({ latestBlogs }: BlogHomePageProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center"
        >
          <p className="text-sm text-primary mb-0">• Blog</p>
          <h2 className="text-xl">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </motion.div>

        {/* Blog List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {latestBlogs.map((blog) => (
            <motion.div
              key={blog.slug}
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <Link
                href={`/blog/${encodeURIComponent(blog.slug)}`}
                className="
                  group flex items-center gap-3
                  py-3 px-2 mb-2
                  rounded-lg
                  border-b border-base-content/10
                  bg-base-100
                  transition-colors duration-300
                 
                "
              >
                {/* Image */}
                <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-base-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="48px"
                    quality={100}
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <h3 className="font-medium leading-snug text-primary/90 break-words underline-offset-4 decoration-dashed group-hover:underline">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-base-content/50">
                    {blog.date} • {blog.readTime} • {blog.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-center"
        >
          <Link
            href="/blog"
            className="
              group inline-flex items-center gap-1
              text-primary text-sm font-geist
              transition-all duration-300
              hover:underline underline-offset-4 decoration-dashed
            "
          >
            See All Blogs
            <FileText
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
