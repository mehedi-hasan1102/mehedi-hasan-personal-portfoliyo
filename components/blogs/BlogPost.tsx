

"use client";

import { useEffect } from "react";
import { Blog } from "../../lib/blogs";
import { motion } from "framer-motion";
import { ScrollProgress } from "../ui/scroll-progress";
import Image from "next/image";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {

  useEffect(() => {
    document.querySelectorAll("pre").forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;

      const button = document.createElement("button");
      button.textContent = "⧉ Copy";
      button.className = "copy-btn";

      Object.assign(button.style, {
        position: "absolute",
        top: "8px",
        right: "8px",
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "600",
        borderRadius: "6px",
        background: "var(--p)",
        color: "var(--b1)",
        cursor: "pointer",
        opacity: "0",
        transition: "opacity 0.2s",
        
      });

      pre.style.position = "relative";
      pre.addEventListener("mouseenter", () => (button.style.opacity = "1"));
      pre.addEventListener("mouseleave", () => (button.style.opacity = "0"));

      button.onclick = async () => {
        const code = pre.querySelector("code")?.innerText || "";
        await navigator.clipboard.writeText(code);
        button.textContent = "✓ Copied";
        setTimeout(() => (button.textContent = "⧉ Copy"), 2000);
      };

      pre.appendChild(button);
    });
  }, [blog.fullContent]);

  return (
    <div className="pt-1 max-w-3xl mx-auto ">
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-lg p-4 bg-base-200 backdrop-blur-sm transition-shadow duration-300 font-geist"
      >
        {/* Title */}
        <h1 className="text-3xl my-4 leading-tight">
          {blog.title}
        </h1>

        {/* Meta */}
        <p className="text-sm sm:text-base text-base-content/60 mb-4 flex flex-wrap gap-2">
          {blog.date} • {blog.readTime} • {blog.category}
        </p>

        {/* Image */}
        {blog.image && (
          <div className="mb-4 overflow-hidden rounded-xl border border-primary/30 shadow-sm relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              quality={100}
            />
          </div>
        )}

        {/* Full Content */}

        <div
          className="
     prose prose-sm sm:prose-base lg:prose-lg
     max-w-none
    text-base-content

    /* Paragraphs */
    [&_p]:my-6 [&_p]:leading-relaxed sm:[&_p]:leading-relaxed lg:[&_p]:leading-loose

    /* Headings */
    [&_h1]:mt-16 [&_h1]:mb-8 [&_h1]:leading-snug sm:[&_h1]:leading-snug lg:[&_h1]:leading-tight
    [&_h2]:mt-14 [&_h2]:mb-6 [&_h2]:leading-snug sm:[&_h2]:leading-snug lg:[&_h2]:leading-tight
    [&_h3]:mt-12 [&_h3]:mb-5 [&_h3]:leading-snug sm:[&_h3]:leading-snug lg:[&_h3]:leading-tight
    [&_h4]:mt-10 [&_h4]:mb-4 [&_h4]:leading-snug sm:[&_h4]:leading-snug lg:[&_h4]:leading-tight

 
/* Links */
 [&_a]:font-bold

[&_a]:transition-colors [&_a]:duration-200
[&_a:hover]:underline [&_a:hover]:decoration-dotted [&_a:hover]:underline-offset-4 [&_a:hover]:text-primary
[&_a]:after:content-['⤴'] 
[&_a]:after:ml-1 

    /* Lists */
    [&_ul]:list-disc [&_ul]:ml-8 [&_ul]:my-6 [&_ul]:space-y-3 [&_ul]:leading-relaxed sm:[&_ul]:leading-relaxed lg:[&_ul]:leading-loose
    [&_ol]:list-decimal [&_ol]:ml-8 [&_ol]:my-6 [&_ol]:space-y-3 [&_ol]:leading-relaxed sm:[&_ol]:leading-relaxed lg:[&_ol]:leading-loose

    /* Blockquotes */
    [&_blockquote]:border-l-4 [&_blockquote]:border-primary/40
    [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-base-content/80 [&_blockquote]:leading-relaxed sm:[&_blockquote]:leading-relaxed lg:[&_blockquote]:leading-loose

    /* Code & pre */
    [&_pre]:bg-base-100 [&_pre]:p-6 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:shadow
    [&_code]:font-geist [&_code]:text-sm [&_code]:text-base-content [&_code]:leading-relaxed sm:[&_code]:leading-relaxed lg:[&_code]:leading-loose
  "
          dangerouslySetInnerHTML={{ __html: blog.fullContent }}
        />






      </motion.div>
    </div>
  );
}
