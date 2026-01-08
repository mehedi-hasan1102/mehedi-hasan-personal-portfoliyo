'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// React-icons imports
import { FiGlobe, FiMail, FiFileText } from "react-icons/fi";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { FaDev, FaDiscord, FaHackerrank, FaMedium, FaBehance, FaTelegramPlane, FaWhatsapp, FaPinterest, FaCodepen, FaFigma, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { SiBluesky, SiQuora } from "react-icons/si";

/* ---------------- Social Links Data ---------------- */
interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  // Developer / Code
  { icon: Github, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },
  { icon: FaDev, href: "https://dev.to/mehedihasan1102", label: "Dev.to" },
  { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/mehedi_hasan1102", label: "HackerRank" },
  { icon: FaCodepen, href: "https://codepen.io/mehedihasan1102", label: "CodePen" },

  // Professional / Portfolio
  { icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" },
  { icon: FiGlobe, href: "https://mehedi-h.vercel.app", label: "Portfolio" },
  { icon: FiFileText, href: "https://m-hasan.vercel.app/Resume_of_Mehedi_Hasan.pdf", label: "Resume" },
  { icon: FiMail, href: "mailto:mehedi.hasan11023@gmail.com", label: "Email" },

  // Designer / Creative
  { icon: FaBehance, href: "https://www.behance.net/mehedihasan1102", label: "Behance" },
  { icon: FaFigma, href: "https://www.figma.com/files/team/1546370570397248215/user/1546370568436002861?fuid=1546370568436002861", label: "Figma" },
  { icon: FaMedium, href: "https://medium.com/@mehedihasan1102", label: "Medium" },
  { icon: FaPinterest, href: "https://www.pinterest.com/mehedihasan1102/", label: "Pinterest" },

  // Social / Community
  { icon: Facebook, href: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/mehedi.hasan1102", label: "Instagram" },
  { icon: FaThreads, href: "https://www.threads.com/@mehedi.hasan1102", label: "Threads" },
  { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "Twitter/X" },
  { icon: SiBluesky, href: "https://bsky.app/profile/mehedihasan1102.bsky.social", label: "Bluesky" },
    { icon: SiQuora, href: "https://www.quora.com/profile/Mehedi-Hasan-19347-1", label: "Quora" },
  { icon: FaYoutube, href: "https://www.youtube.com/@MehediHasan11023", label: "YouTube" },


  // Messaging / Contact
  { icon: FaWhatsapp, href: "https://wa.me/8801747874773", label: "WhatsApp" },
  { icon: FaTelegramPlane, href: "https://t.me/+8801747874773", label: "Telegram" },
  { icon: FaDiscord, href: "https://discord.gg/QMmdb8nusc", label: "Discord" },
];

/* ---------------- Links Page ---------------- */
const LinksPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      {/* Container */}
      <div className="w-full max-w-3xl mx-auto min-h-screen rounded-lg p-4 bg-base-200 backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-start"
        >
          <h2 className="text-3xl">Links</h2>
        </motion.div>

        {/* Links List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg transition-all hover:bg-base-100 group"
              >
                {/* Icon always visible */}
                <span className="text-base-content/80">
                  <link.icon size={20} />
                </span>

                {/* Link name */}
                <span className="font-medium">{link.label}</span>

                {/* Arrow icon: show only on hover */}
                <ArrowUpRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default LinksPage;
