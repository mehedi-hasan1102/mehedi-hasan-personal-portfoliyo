// "use client";

// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { X, Search } from "lucide-react";
// import blogsData from "../../data/blogs.json";

// interface Blog {
//   id: number;
//   title: string;
//   slug: string;
// }

// interface SearchBarProps {
//   onClose: () => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
//   const [mounted, setMounted] = useState(false);
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<Blog[]>([]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }

//     const filtered = blogsData.filter((blog) =>
//       blog.title.toLowerCase().includes(query.toLowerCase())
//     );

//     setResults(filtered);
//   }, [query]);

//   if (!mounted) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-md flex justify-center items-center p-4">
//       <div className="bg-base-100 rounded-2xl w-full max-w-lg p-6 shadow-2xl border border-primary/30">
//         {/* Search Input */}
//         <div className="flex justify-between items-center mb-5">
//           <div className="flex items-center gap-3 w-full bg-base-200 rounded-xl px-3 py-2 border border-primary/20 focus-within:ring-2 focus-within:ring-primary/40 transition">
//             <Search className="text-primary w-5 h-5" />
//             <input
//               autoFocus
//               type="text"
//               className="bg-transparent w-full px-1 py-2 focus:outline-none"
//               placeholder="Search blogs..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>

//           <button
//             onClick={onClose}
//             className="ml-3 p-2 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Results */}
//         <div className="max-h-64 overflow-y-auto pr-1 custom-scroll">
//           {results.length === 0 && query && (
//             <p className="text-base-content/60 text-sm">No results found.</p>
//           )}

//           {results.map((blog) => (
//             <a
//               key={blog.id}
//               href={`/blogs/${blog.slug}`}
//               onClick={onClose}
//               className="block py-3 px-3 rounded-xl hover:bg-primary/10 border-b border-base-300/40 transition"
//             >
//               <p className="font-medium">{blog.title}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default SearchBar;
"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Search } from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";

interface SearchBarProps {
  onClose: () => void;
  blogs: BlogMetaData[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, blogs }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogMetaData[]>([]);
  const searchBarRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  useEffect(() => {
    if (!query.trim()) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setResults([]);
      return;
    }

    const filtered = blogs.filter((blog: BlogMetaData) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query, blogs]);

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex justify-center items-start pt-24 p-4">
      <div ref={searchBarRef} className="bg-base-200 rounded-xl w-full max-w-lg p-6 shadow-lg border border-primary/30">
        {/* Search Input */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 w-full rounded-lg   transition">
            <Search className="text-primary w-5 h-5" />
            <input
              autoFocus
              type="text"
              className="w-full p-2  input input-bordered focus:border-primary rounded-lg focus:outline-none"
              placeholder="Search blogs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            onClick={onClose}
            className=" hover:bg-primary/30 text-red-500  ml-3 p-1 rounded-lg   transition hover:scale-120"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto space-y-3">
          {results.length === 0 && query && (
            <p className="text-base-content/60 text-sm">No results found.</p>
          )}

          {results.map((blog: BlogMetaData) => (
            <a
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              onClick={onClose}
              className="block p-3 rounded-lg hover:bg-base-100 shadow-sm transition border border-base-300/30"
            >
              <h3 className="text-primary font-medium">{blog.title}</h3>
              <p className="text-sm text-base-content/60 mt-1">
                {blog.date} • {blog.readTime}
              </p>
              <p className="text-sm text-base-content/80 mt-1">
                {blog.description.slice(0, 100)}...
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SearchBar;
