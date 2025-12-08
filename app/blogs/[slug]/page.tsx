

// import React from "react";
// import { getBlogData, getSortedBlogsData, Blog } from "../../../lib/blogs";

// export async function generateStaticParams() {
//   const blogs = await getSortedBlogsData();
//   return blogs
//     .filter((blog) => typeof blog.slug === "string" && blog.slug.trim() !== "")
//     .map((blog) => ({ slug: blog.slug }));
// }

// export default async function SingleBlogPage({ params }: { params: Promise<{ slug?: string }> }) {
//   // ✅ unwrap params
//   const resolvedParams = await params;
//   const slug = resolvedParams.slug;

//   if (!slug) {
//     return (
//       <div className="w-full max-w-3xl px-4 mx-auto font-mono py-8 text-center text-red-500">
//         Slug not found
//       </div>
//     );
//   }

//   let blog: Blog | null = null;
//   try {
//     blog = await getBlogData(slug);
//   } catch (err) {
//     console.error("Error reading blog:", err);
//   }

//   if (!blog) {
//     return (
//       <div className="w-full max-w-3xl px-4 mx-auto font-mono py-8 text-center text-red-500">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-3xl px-4 mx-auto font-mono py-8">
//       <div className="bg-base-100 backdrop-blur-sm relative rounded-lg p-6 shadow-sm">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">{blog.title}</h1>
//         <p className="text-sm text-base-content/50 mb-6 flex flex-wrap gap-2">
//           {blog.date} • {blog.readTime} • {blog.category}
//         </p>
//         {blog.image && (
//           <div className="mb-8 overflow-hidden rounded-xl">
//             <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-xl" />
//           </div>
//         )}
//         <div
//           className="prose prose-sm sm:prose-base md:prose-lg max-w-full text-base-content whitespace-pre-wrap leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: blog.fullContent }}
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { getBlogData, Blog } from "../../../lib/blogs";
import BlogPost from "@/components/blogs/BlogPost"; // client component

export default async function SingleBlogPage({ params }: { params: Promise<{ slug?: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) return <div>Slug not found</div>;

  let blog: Blog | null = null;
  try {
    blog = await getBlogData(slug);
  } catch (err) {
    console.error(err);
  }
  if (!blog) return <div>Blog not found</div>;

  return <BlogPost blog={blog} />;
}
