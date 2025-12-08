"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import { BlogMetaData } from "@/lib/blogs";

interface SearchToggleProps {
  blogs: BlogMetaData[];
}

const SearchToggle: React.FC<SearchToggleProps> = ({ blogs }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-primary/20 transition"
      >
        <Search size={16} />
      </button>

      {open && <SearchBar onClose={() => setOpen(false)} blogs={blogs} />}
    </>
  );
};

export default SearchToggle;
