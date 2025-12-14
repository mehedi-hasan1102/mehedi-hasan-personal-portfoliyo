import { notFound } from "next/navigation";
import { getBlogData, Blog } from "../../../lib/blogs";
import BlogPost from "@/components/blogs/BlogPost"; // client component

export default async function SingleBlogPage({ params }: { params: Promise<{ slug?: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;



    if (!slug) {
  notFound();
}


  let blog: Blog | null = null;
  try {
    blog = await getBlogData(slug);
  } catch (err) {
    console.error(err);
  }
 
  if (!blog) {
  notFound();
}

  return <BlogPost blog={blog}  />;
}

