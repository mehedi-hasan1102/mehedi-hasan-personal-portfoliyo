// "use client"; // ✅ Client component

// import React from "react";
// import { Blog } from "../../lib/blogs";
// import { motion } from "framer-motion";

// interface Props {
//   blog: Blog;
// }

// export default function BlogPost({ blog }: Props) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-base-100 rounded-lg p-6 shadow-md"
//     >
//       <h1 className="text-3xl mb-4">{blog.title}</h1>
//       <p className="text-sm text-gray-500 mb-6">{blog.date} • {blog.readTime}</p>
//       {blog.image && <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-6" />}
//       <div dangerouslySetInnerHTML={{ __html: blog.fullContent }} />
//     </motion.div>
//   );
// }
"use client"; // ✅ Client component

import React from "react";
import { Blog } from "../../lib/blogs";
import { motion } from "framer-motion";

interface Props {
  blog: Blog;
}

export default function BlogPost({ blog }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" max-w-3xl mx-auto bg-base-100 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">{blog.title}</h1>

      {/* Meta */}
      <p className="text-sm sm:text-base text-base-content/60 mb-6 flex flex-wrap gap-2">
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
      <div
        className="prose prose-sm sm:prose-base md:prose-lg max-w-full text-base-content leading-relaxed whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />
    </motion.div>
  );
}
