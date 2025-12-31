'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "../../lib/blogs"; // Assuming Blog type is exported here
import Image from "next/image";


// Re-defining monthOrder or passing it as a prop
const monthOrder: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
};

type Structured = Record<string, Record<string, Blog[]>>;

interface BlogContentProps {
  years: string[];
  structured: Structured;
}

export function BlogContent({ years, structured }: BlogContentProps) {
  return (

<>
 


 <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-base-200  mx-auto font-geist  rounded-lg  backdrop-blur-sm  transition-shadow  p-4"
    >
        
      <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="my-4 text-start "
              >
                <h2 className="text-3xl ">Blog</h2>
              </motion.div>

      {years.length === 0 ? (
        <p className="text-center justify-center items-center text-base-content/60 mt-6">No blogs found.</p>
      ) : (
        years.map((year) => (
          <div key={year} className=" p-0">
            <h2 className="text-xl mb-2 mt-2">
              {year} <span className="text-primary">• {Object.values(structured[year]).flat().length}</span>
            </h2>
            <div className="h-[1px] bg-primary/40 mb-2"></div>

            {Object.keys(structured[year])
              .sort((a, b) => monthOrder[b] - monthOrder[a]) // latest month first
              .map((month) => (
                <div key={month} className="mb-2">
                  <h3 className="text-lg mb-2">{month}</h3>

                  <div className="space-y-2">
                    {structured[year][month]
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // latest post first
                      .map((blog: Blog) => (
                        <motion.div
                          key={blog.slug}
                          // whileHover={{ y: -3 }}
                          className="flex gap-2 sm:gap-4   rounded-lg  transition-all py-2 sm:py-6"
                        >
                         
<div className="hidden sm:block sm:block w-32 h-24  relative">
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="rounded-lg object-cover"
  />
</div>

 

                          <div className="flex-1">
                            <Link href={`/blog/${blog.slug}`}>
                              <h3 className="text-primary font-medium underline-offset-4 decoration-dashed hover:underline">
                                {blog.title}
                              </h3>
                            </Link>

                            <p className="text-sm text-base-content/60 flex items-center gap-2 mt-1">
                              {blog.date} • {blog.readTime}
                            </p>
                            <p className="text-base-content/80 text-sm mt-2">
                              {blog.description.slice(0, 60)}...
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        ))
      )}
    </motion.section>



</>


   
  );
}
