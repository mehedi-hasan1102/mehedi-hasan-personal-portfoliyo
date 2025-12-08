/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"abyss" | "lemonade">("abyss"); // default for SSR

  // Browser-only effect to read localStorage
  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as "abyss" | "lemonade") || "abyss";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "abyss" ? "lemonade" : "abyss";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg hover:text-primary hover:bg-primary/20 transition ${className || ""}`}
      aria-label="Toggle Theme"
    >
      {mounted ? (theme === "abyss" ? <Sun size={16} /> : <Moon size={16} />) : (
        <div style={{ width: 16, height: 16 }} />
      )}
    </button>
  );
};
