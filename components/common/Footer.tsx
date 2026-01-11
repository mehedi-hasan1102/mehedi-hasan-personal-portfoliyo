'use client';

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Logo from "@/components/common/Logo";

/* ---------------- Types ---------------- */

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  href: string;
}

/* ---------------- Component ---------------- */

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:mehedi.hasan11023@gmail.com", label: "Email" },
    { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "Twitter" },
  ];

  const mainPages: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const morePages: NavLink[] = [
    
    { label: "Links", href: "/links" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl backdrop-blur-xl  mt-1 rounded-t-xl px-4 pt-2 pb-4 text-sm text-base-content"
    >
      {/* Divider */}
      
       {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          className="h-px bg-primary/30  mb-10"
        /> */}
        
 <motion.div
 initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
 className="mb-10 h-px w-full bg-base-content/10" />


{/* <div className="mb-12 h-px w-full bg-base-content/10" /> */}

      {/* ---------------- MOBILE (Peerlist style) ---------------- */}
      <div className="space-y-12 md:hidden">
        {/* Main Pages */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-base-content/40">
            Main Pages
          </p>
          <div className="flex flex-col gap-3 text-base-content/70">
            {mainPages.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* More */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-base-content/40">
            More
          </p>
          <div className="flex flex-col gap-3 text-base-content/70">
            {morePages.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="border-t border-base-content/10 pt-6 ">
        
          <Logo />

          <div className="mt-4 flex gap-4 text-base-content/70">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-primary transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-base-content/40">
            © {new Date().getFullYear()} Mehedi Hasan
          </p>
        </div>
      </div>

      {/* ---------------- DESKTOP (3 columns) ---------------- */}
      <div className="hidden md:grid grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Logo />
         


          <div className="flex gap-4 text-base-content/70">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-primary transition  hover:rotate-12 "
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-base-content/40 mt-14">
            © {new Date().getFullYear()} Mehedi Hasan
          </p>
        </div>

        {/* Main Pages */}
        <div className="flex flex-col gap-3 text-base-content/70">
          {mainPages.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* More */}
        <div className="flex flex-col gap-3 text-base-content/70">
          {morePages.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
