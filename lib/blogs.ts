import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "data", "blogs");

export interface BlogMetaData {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  category: string;
  description: string;
}

export interface Blog extends BlogMetaData {
  fullContent: string;
}

/* ===============================
   সব Blog লিস্ট আনার জন্য
================================ */
export async function getSortedBlogsData(): Promise<Blog[]> {
  // শুধু .md ফাইল নেবে
  const fileNames = fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".md"));

  const allBlogsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const { slug: dataSlug, ...rest } =
      matterResult.data as BlogMetaData;

    return {
      slug,
      ...rest,
      fullContent: matterResult.content,
    };
  });

  // নতুন blog আগে দেখাবে
  return allBlogsData.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/* ===============================
   Single Blog আনার জন্য
================================ */
export async function getBlogData(
  slug: string
): Promise<Blog | null> {
  // ❌ favicon.ico বা ভুল slug আটকাবে
  if (!slug || slug.includes(".")) {
    return null;
  }

  const fullPath = path.join(blogsDirectory, `${slug}.md`);

  // ❌ ফাইল না থাকলে crash না করে null
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const { slug: dataSlug, ...rest } =
    matterResult.data as BlogMetaData;

  return {
    slug,
    ...rest,
    fullContent: contentHtml,
  };
}
