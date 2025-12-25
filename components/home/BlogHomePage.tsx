
'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";

interface BlogHomePageProps {
  latestBlogs: BlogMetaData[];
}

export default function BlogHomePage({ latestBlogs }: BlogHomePageProps) {
  return (
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-1 px-0">
      {/*  backdrop-blur  */}
      <div className="rounded-lg p-2 shadow-lg backdrop-blur-sm">
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="text-sm text-primary mb-0">• Articles</p>
          <h2 className="text-xl">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${encodeURIComponent(blog.slug)}`}
              className="
                group block bg-base-100 rounded-lg overflow-hidden
                shadow-sm transition-transform transition-shadow duration-300
                transform-gpu will-change-transform
                hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* Image (md+) */}
              <div className="hidden md:block relative w-full aspect-video overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={70}
                  className="
                    object-cover transition-transform duration-500
                    transform-gpu will-change-transform
                    group-hover:scale-105
                  "
                />

                {/* Category */}
                <span className="absolute bottom-2 left-2 px-2 text-xs rounded-lg bg-base-100">
                  {blog.category}
                </span>

                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/20 opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-center justify-center
                  "
                >
                  <span className="bg-primary text-primary-content p-2 rounded-lg">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <p className="text-xs text-base-content/50 mb-1">
                  {blog.date} • {blog.readTime}
                </p>
                <h3 className="font-medium leading-snug text-primary/90">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-3 text-center">
          <Link
            href="/blog"
            className="
              group inline-flex items-center gap-1
              text-primary text-sm font-geist
              transition-all duration-300
              hover:underline underline-offset-4 decoration-dashed
            "
          >
            All Posts
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
