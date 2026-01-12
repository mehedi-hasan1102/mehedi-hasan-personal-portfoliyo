'use client';

import React from "react";
import { motion } from "framer-motion";

// React-icons imports
import { FiGlobe, FiMail, FiFileText } from "react-icons/fi";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import {
  FaDev,
  FaDiscord,
  FaHackerrank,
  FaMedium,
  FaDribbble,
  FaBehance,
  FaTelegramPlane,
  FaWhatsapp,
  FaPinterest,
  FaCodepen,
  FaFigma,
  FaYoutube,
  FaStackOverflow,
} from "react-icons/fa";
import { FaThreads, FaXTwitter, FaHashnode } from "react-icons/fa6";
import { SiBluesky, SiQuora, SiPeerlist } from "react-icons/si";

/* ---------------- Social Links Data ---------------- */
interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

interface SocialCategory {
  title: string;
  links: SocialLink[];
}

const socialCategories: SocialCategory[] = [
  {
    title: "Developer",
    links: [
      { icon: Github, href: "https://github.com/mehedi-hasan1102", label: "GitHub" },
      { icon: FaDev, href: "https://dev.to/mehedihasan1102", label: "Dev.to" },
      { icon: FaHashnode, href: "https://hashnode.com/@mehedi-hasan1102", label: "Hashnode" },
      { icon: FaStackOverflow, href: "https://stackoverflow.com/users/31918992/mehedi-hasan", label: "Stack Overflow" },
      { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/mehedi_hasan1102", label: "HackerRank" },
      { icon: FaCodepen, href: "https://codepen.io/mehedihasan1102", label: "CodePen" },
    ],
  },
  {
    title: "Professional",
    links: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan1102/", label: "LinkedIn" },
      { icon: SiPeerlist, href: "https://peerlist.io/mehedihasan", label: "Peerlist" },
      { icon: FiGlobe, href: "https://mehedi-h.vercel.app", label: "Portfolio Website" },
      { icon: FiFileText, href: "/Resume_of_Mehedi_Hasan.pdf", label: "Resume" },
      { icon: FiMail, href: "mailto:mehedi.hasan11023@gmail.com", label: "Email" },
    ],
  },
  {
    title: "Designer",
    links: [
      { icon: FaBehance, href: "https://www.behance.net/mehedihasan1102", label: "Behance" },
      { icon: FaDribbble, href: "https://dribbble.com/mehedi-hasan1102", label: "Dribbble" },
      { icon: FaFigma, href: "https://www.figma.com/files/team/1546370570397248215/user/1546370568436002861?fuid=1546370568436002861", label: "Figma" },
      { icon: FaMedium, href: "https://medium.com/@mehedihasan1102", label: "Medium" },
      { icon: FaPinterest, href: "https://www.pinterest.com/mehedihasan11023/", label: "Pinterest" },
    ],
  },
  {
    title: "Social",
    links: [
      { icon: Facebook, href: "https://facebook.com/mehedi.hasan1102", label: "Facebook" },
      { icon: Instagram, href: "https://instagram.com/mehedi.hasan1102", label: "Instagram" },
      { icon: FaThreads, href: "https://www.threads.com/@mehedi.hasan1102", label: "Threads" },
      { icon: FaXTwitter, href: "https://x.com/mehedihasan1102", label: "Twitter/X" },
      { icon: SiBluesky, href: "https://bsky.app/profile/mehedihasan1102.bsky.social", label: "Bluesky" },
      { icon: SiQuora, href: "https://www.quora.com/profile/Mehedi-Hasan-19347-1", label: "Quora" },
      { icon: FaYoutube, href: "https://www.youtube.com/@MehediHasan11023", label: "YouTube" },
    ],
  },
  {
    title: "Messaging",
    links: [
      { icon: FaWhatsapp, href: "https://wa.me/8801747874773", label: "WhatsApp" },
      { icon: FaTelegramPlane, href: "https://t.me/+8801747874773", label: "Telegram" },
      { icon: FaDiscord, href: "https://discord.gg/QMmdb8nusc", label: "Discord" },
    ],
  },
];

/* ---------------- Links Page ---------------- */
const LinksPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="w-full max-w-3xl mx-auto min-h-screen rounded-lg p-4 bg-base-200 backdrop-blur-sm transition-shadow duration-300">
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

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {socialCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="mb-3 text-sm tracking-widest uppercase text-base-content/60">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm underline-offset-6 decoration-dashed hover:underline hover:text-primary transition-all duration-300"
                    >
                      <link.icon size={14} />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LinksPage;
