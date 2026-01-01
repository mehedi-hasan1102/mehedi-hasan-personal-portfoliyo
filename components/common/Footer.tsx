
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import { FaDev, FaDiscord, FaHackerrank, FaMedium, FaBehance, FaTelegramPlane, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
// import { SiBluesky } from "react-icons/si";




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
    { icon: Github, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" },
    { icon: FaDev, href: "https://dev.to/mehedihasan1102", label: "Dev.to" },
    { icon: FaBehance, href: "https://www.behance.net/mehedihasan1102", label: "Behance" },
    { icon: FaMedium, href: "https://medium.com/@mehedihasan1102", label: "Medium" },
    { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "Twitter/X" },
    // { icon: SiBluesky, href: "https://bsky.app/profile/mehedihasan1102.bsky.social", label: "Bluesky", },
    { icon: FaTelegramPlane, href: "https://t.me/+8801747874773", label: "Telegram" },
    { icon: FaDiscord, href: "https://discord.gg/QMmdb8nusc", label: "Discord" },
    { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/mehedi_hasan1102", label: "HackerRank" },
    { icon: Facebook, href: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
  ];

  const navLinks: NavLink[] = [

    { label: "Home", href: "/" },
    { label: "About", href: "/about" },

    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },

    { label: "Contact", href: "/contact" },
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
          <div className="flex items-center gap-1 text-lg font-medium">
            <span className="text-primary text-sm sm:text-lg">&lt;/&gt;</span>
            <span> Mehedi</span>
            <span className="text-base-content/60">Hasan</span>
          </div>


          {/* Social Icons */}
          <div className="mt-2 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-4 justify-items-center text-base-content/80">
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
                  className="hover:text-primary transition hover:rotate-12 "
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-xs sm:text-sm tracking-wide text-base-content/70"
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
          &copy; {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
