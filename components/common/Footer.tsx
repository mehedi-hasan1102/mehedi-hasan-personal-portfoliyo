
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, } from "lucide-react";
import {  FaDev, FaEnvelope, FaMedium, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
// import { SiBluesky } from "react-icons/si";
import Logo from "@/components/common/Logo";



interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  href: string;
}

const Footer = () => {
const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },       // must-have
  { icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" }, // must-have
  { icon: FaEnvelope, href: "mailto:mehedi.hasan11023@gmail.com", label: "Email" },     // must-have
  { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "X/Twitter" },     // recommended for tech presence
];


  const navLinks: NavLink[] = [

    { label: "Home", href: "/" },
    { label: "About", href: "/about" },

    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },

    { label: "Contact", href: "/contact" },
    { label: "Links", href: "/links" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto  pt-1"
    >
      <div className="rounded-t-xl pb-4 backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300 font-geist text-sm text-base-content">
        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          className="h-px bg-primary/30 mb-6"
        />

        {/* Branding & Social */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center text-center gap-2 mb-4"
        >
         {/* Logo  */}

 <Logo />

          {/* Social Icons */}
   <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="mt-2 flex flex-wrap justify-center gap-4 text-base-content/80"
>
  {socialLinks.map((link) => {
    const Icon = link.icon;
    return (
      <motion.a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        whileHover={{ y: -2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-primary transition-transform hover:rotate-12"
      >
        <Icon size={18} />
      </motion.a>
    );
  })}
</motion.div>



        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-xs sm:text-sm tracking-wide text-base-content/70 px-12"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary cursor-pointer transition"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Copyright */}
        <p className="text-center text-xs text-base-content/50 mt-4">
          &copy; {new Date().getFullYear()} Mehedi Hasan
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
