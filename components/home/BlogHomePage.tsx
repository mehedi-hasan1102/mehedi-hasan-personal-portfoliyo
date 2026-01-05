




'use client';

import Link from "next/link";
import { ChevronDown} from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
interface BlogHomePageProps {
  latestBlogs: BlogMetaData[];
}

/* ---------------- Entry Animation ---------------- */

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
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-1">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="rounded-lg p-4 border border-primary/30 bg-base-200 backdrop-blur-sm"
      >
        {/* Header */}
        <div className=" text-start m-4">
          <p className="text-sm text-base-contentq">• Blog</p>
          <h2 className="text-2xl">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </div>

        {/* Blog List */}
        {latestBlogs.length === 0 ? (
          <p className="text-sm text-base-content/50 text-center py-4">
            No blog posts available.
          </p>
        ) : (
          <ul className="flex flex-col  gap-4">
            {latestBlogs.map((blog) => (




              <li
  key={blog.slug}
  className=" transition-transform duration-200 ease-out hover:translate-x-1 "
>
  <Link
    href={`/blog/${encodeURIComponent(blog.slug)}`}
    className="group  flex flex-row gap-4 p-4 rounded-lg border-b border-base-content/10 bg-base-100 transition-colors duration-200"
  >
    {/* Image */}
    <div className="hidden sm:block w-32 h-24 relative flex-shrink-0">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="rounded-lg object-cover"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-between">
      <h3 className="font-medium leading-snug group-hover:text-primary break-words underline-offset-4 decoration-dashed group-hover:underline">
        {blog.title}
      </h3>
      <p className="text-xs text-base-content/50 py-2">
        {blog.date} • {blog.readTime} • {blog.category}
      </p>
      <p className="text-base-content/80 text-sm">
                              {blog.description.slice(0, 56)}...
                            </p>
    </div>
  </Link>
</li>

            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="m-4 text-center">
          <Link
            href="/blog"
            className="
              group inline-flex items-center gap-1
              hover:text-primary text-sm
              transition-all
              hover:underline underline-offset-4 decoration-dashed
            "
          >
            See More
            <ChevronDown
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>



      </motion.div>
    </section>
  );
}
