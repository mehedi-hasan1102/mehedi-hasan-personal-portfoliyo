// 'use client';

// import Link from "next/link";
// import { FileText } from "lucide-react";
// import { BlogMetaData } from "@/lib/blogs";
// import { motion, Variants } from "framer-motion";

// interface BlogHomePageProps {
//   latestBlogs: BlogMetaData[];
// }

// /* ---------------- Entry Animation ---------------- */

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//     },
//   },
// };

// export default function BlogHomePage({ latestBlogs }: BlogHomePageProps) {
//   return (
//     <section className="text-base-content font-geist max-w-3xl mx-auto pt-1">
//       <motion.div
//         variants={fadeIn}
//         initial="hidden"
//         animate="visible"
//         className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm"
//       >
//         {/* Header */}
//         <div className="mb-4 text-center">
//           <p className="text-sm text-primary">• Blog</p>
//           <h2 className="text-xl">
//             Recent <span className="text-base-content/60">Updates</span>
//           </h2>
//         </div>

//         {/* Blog List */}
//         {latestBlogs.length === 0 ? (
//           <p className="text-sm text-base-content/50 text-center py-4">
//             No blog posts available.
//           </p>
//         ) : (
//           <ul className="flex flex-col">
//             {latestBlogs.map((blog) => (
//               <li
//                 key={blog.slug}
//                 className="
//                   mb-2
//                   transition-transform duration-200 ease-out
//                   hover:translate-x-1
//                 "
//               >
//                 <Link
//                   href={`/blog/${encodeURIComponent(blog.slug)}`}
//                   className="
//                     group flex flex-col gap-1
//                     py-3 px-2
//                     rounded-lg
//                     border-b border-base-content/10
//                     bg-base-100
//                     transition-colors duration-200
//                   "
//                 >
//                   {/* Title */}
//                   <h3
//                     className="
//                       font-medium leading-snug
//                       text-primary/90 break-words
//                       underline-offset-4 decoration-dashed
//                       group-hover:underline
//                     "
//                   >
//                     {blog.title}
//                   </h3>

//                   {/* Meta */}
//                   <p className="text-xs text-base-content/50">
//                     {blog.date} • {blog.readTime} • {blog.category}
//                   </p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Footer */}
//         <div className="mt-3 text-center">
//           <Link
//             href="/blog"
//             className="
//               group inline-flex items-center gap-1
//               text-primary text-sm
//               transition-all
//               hover:underline underline-offset-4 decoration-dashed
//             "
//           >
//             See All Blogs
//             <FileText
//               size={14}
//               className="transition-transform duration-200 group-hover:translate-x-1"
//             />
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }




'use client';

import Link from "next/link";
import { FileText } from "lucide-react";
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
        className="rounded-lg p-2 border border-primary/30 bg-base-200 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="text-sm text-primary">• Blog</p>
          <h2 className="text-xl">
            Recent <span className="text-base-content/60">Updates</span>
          </h2>
        </div>

        {/* Blog List */}
        {latestBlogs.length === 0 ? (
          <p className="text-sm text-base-content/50 text-center py-4">
            No blog posts available.
          </p>
        ) : (
          <ul className="flex flex-col">
            {latestBlogs.map((blog) => (




              <li
  key={blog.slug}
  className="mb-2 transition-transform duration-200 ease-out hover:translate-x-1"
>
  <Link
    href={`/blog/${encodeURIComponent(blog.slug)}`}
    className="group flex flex-row gap-4 py-3 px-2 rounded-lg border-b border-base-content/10 bg-base-100 transition-colors duration-200"
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
      <h3 className="font-medium leading-snug text-primary/90 break-words underline-offset-4 decoration-dashed group-hover:underline">
        {blog.title}
      </h3>
      <p className="text-xs text-base-content/50">
        {blog.date} • {blog.readTime} • {blog.category}
      </p>
      <p className="text-base-content/80 text-sm mt-2">
                              {blog.description.slice(0, 65)}...
                            </p>
    </div>
  </Link>
</li>

            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-3 text-center">
          <Link
            href="/blog"
            className="
              group inline-flex items-center gap-1
              text-primary text-sm
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
    </section>
  );
}
