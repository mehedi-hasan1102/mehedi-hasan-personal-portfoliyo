

import React from "react";
import { Blog, getSortedBlogsData } from "../../lib/blogs";
import { BlogContent } from "../../components/blogs/BlogContent";

// Month mapping for sorting - still needed on server side for structuring data
const monthOrder: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
};

export default async function BlogsHome() {
  const blogs: Blog[] = await getSortedBlogsData();

  type Structured = Record<string, Record<string, Blog[]>>;

  // Structure blogs by year and month
  const structured: Structured = blogs.reduce((acc: Structured, blog: Blog) => {
    const parts = blog.date.split(" "); // ["Aug", "30,", "2025"]
    // Ensure parts has enough elements before accessing. Adding a check for robustness.
    if (parts.length < 3) {
      console.warn(`Unexpected date format for blog: ${blog.title}, date: ${blog.date}`);
      return acc; // Skip this blog if date format is unexpected
    }
    const monthShort = parts[0];
    const day = parts[1].replace(',', ''); // Extract day and remove comma
    const year = parts[2];

    // Use a more robust date string for new Date()
    const fullDateString = `${monthShort} ${day}, ${year}`;
    const dateObject = new Date(fullDateString);

    if (isNaN(dateObject.getTime())) {
      console.error(`Invalid date parsing for blog: ${blog.title}, date: ${blog.date}`);
      return acc; // Skip if date is invalid
    }

    const monthName = dateObject.toLocaleString("en", { month: "long" });


    if (!acc[year]) acc[year] = {};
    if (!acc[year][monthName]) acc[year][monthName] = [];
    acc[year][monthName].push(blog);

    return acc;
  }, {} as Structured);

  // Sort years latest first
  const years = Object.keys(structured).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="text-base-content font-mono mx-auto pt-1 max-w-3xl ">
      <BlogContent years={years} structured={structured} />
    </div>
  );
}
