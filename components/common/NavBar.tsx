"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import SearchToggle from "@/components/blogs/SearchToggle";
import { BlogMetaData } from "@/lib/blogs";

// Type Definitions
interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Github, url: "https://github.com/mehedi-hasan1102", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/mehedi-hasan1102", label: "LinkedIn" },
];

interface NavbarProps {
  blogs: BlogMetaData[];
}

const Navbar: React.FC<NavbarProps> = ({ blogs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  // Disable body scroll on mobile open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="top-4 left-0 right-0 pt-2 z-50 py-0">
      <div className="w-full max-w-3xl   mx-auto font-geist">

        {/* Desktop Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-sm flex items-center justify-between border border-primary/30 bg-base-200 text-base-content px-4 md:px-6 py-3 rounded-lg shadow-lg transition-shadow duration-300"
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
            <span className="text-primary text-xl sm:text-2xl">&lt;/&gt;</span>
            <span className="text-sm sm:text-lg">
              Mehedi <span className="text-base-content/60">Hasan</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-0 flex-1 justify-center flex-wrap text-sm">

            <li>
              <Link
                href="/"
                className={`
                  cursor-pointer px-2 py-2 rounded-lg transition text-sm
                  hover:text-primary 
                  ${isActive("/")
                    ? "underline underline-offset-4 decoration-wavy decoration-2 decoration-primary"
                    : ""}
                `}
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                href="/about"
                className={`cursor-pointer px-2 py-2 rounded-lg hover:text-primary  transition text-sm
                  ${isActive("/about")
                    ? "underline underline-offset-4 decoration-wavy decoration-2 decoration-primary"
                    : ""}
                `}
              >
                About
              </Link>
            </li>


            <li>
              <Link
                href="/blog"
                className={`cursor-pointer px-2 py-2 rounded-lg hover:text-primary  transition text-sm
                  ${isActive("/blog")
                    ? " underline underline-offset-4 decoration-wavy decoration-2 decoration-primary"
                    : ""}
                `}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={`cursor-pointer px-2 py-2 rounded-lg hover:text-primary  transition text-sm
                  ${isActive("/projects")
                    ? "underline underline-offset-4 decoration-wavy decoration-2 decoration-primary"
                    : ""}
                `}
              >
                Projects
              </Link>
            </li>



            <li>
              <Link
                href="/contact"
                className={`cursor-pointer px-2 py-2 rounded-lg hover:text-primary  transition text-sm
                  ${isActive("/contact")
                    ? "underline underline-offset-4 decoration-wavy decoration-2 decoration-primary"
                    : ""}
                `}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social + Toggles */}
          <div className="hidden md:flex items-center gap-0 ml-0">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:text-primary hover:rotate-12 transition"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
            <div className="ml-2 pl-2 border-l border-primary/30">
              <SearchToggle blogs={blogs} /> <ThemeToggle />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <SearchToggle blogs={blogs} />
            <ThemeToggle />
            {!menuOpen && (
              <motion.button
                onClick={() => setMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                className="p-2 rounded-full hover:bg-base-200/30"
              >
                <Menu size={16} />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-20 md:hidden"
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-full bg-base-200 text-base-content z-100 shadow-2xl flex flex-col justify-between px-6 py-4"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-primary/30">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-primary text-xl sm:text-2xl">&lt;/&gt;</span>
                    <span className="text-sm sm:text-lg">
                      Mehedi <span className="text-base-content/60">Hasan</span>
                    </span>
                  </motion.div>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1 rounded-lg hover:scale-120 bg-base-200 text-red-500 shadow-md hover:bg-primary/20 hover:text-red-500 transition-all duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Drawer Links */}
                <ul className="flex-1 flex flex-col gap-2 mt-4">
                  {[
                    { name: "Home", route: "/" },
                    { name: "About", route: "/about" },
                     { name: "Blog", route: "/blog" },
                    { name: "Projects", route: "/projects" },
                   
                    { name: "Contact", route: "/contact" },
                  ].map((item) => (
                    <li key={item.route}>
                      <Link
                        href={item.route}
                        onClick={() => setMenuOpen(false)}
                        className="block w-full px-4 py-3 rounded-lg text-base font-medium hover:bg-primary/10 hover:text-primary transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Footer */}
                <div className="px-5 py-4 border-t border-primary/30 flex items-center gap-3 justify-center">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:text-primary hover:bg-base-300/30 transition"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
