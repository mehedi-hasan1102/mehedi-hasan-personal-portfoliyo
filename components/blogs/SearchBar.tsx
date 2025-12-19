
"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Search } from "lucide-react";
import { BlogMetaData } from "@/lib/blogs";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

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
        <div className="max-h-80 overflow-y-auto space-y-3  ">
          {results.length === 0 && query && (
            <p className="text-base-content/60 text-sm">No results found.</p>
          )}

         
        </div>

<SimpleBar className="space-y-6 max-h-[300px] overflow-y-auto pr-2 ">
  {results.map((blog: BlogMetaData) => (
    <a
      key={blog.slug}
      href={`/blog/${blog.slug}`}
      onClick={onClose}
      className="block p-2 rounded-lg hover:bg-base-100 shadow-sm transition "
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
</SimpleBar>

      </div>
    </div>,
    document.body
  );
};

export default SearchBar;
