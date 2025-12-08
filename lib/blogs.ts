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

export async function getSortedBlogsData(): Promise<Blog[]> {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, "");
    // console.log("Found slug:", slug);

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const { slug: dataSlug, ...rest } = matterResult.data as BlogMetaData;
    return {
      slug,
      ...rest,
      fullContent: matterResult.content, // raw markdown content
    };
  });

        
    // Sort blogs by date in descending order (latest first)
    return allBlogsData.sort((a, b) => {    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  }) as Blog[];
}

export async function getBlogData(slug: string): Promise<Blog> {

  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  const { slug: dataSlug, ...rest } = matterResult.data as BlogMetaData;
  return {
    slug,
    ...rest,
    fullContent: contentHtml,
  } as Blog;
}
