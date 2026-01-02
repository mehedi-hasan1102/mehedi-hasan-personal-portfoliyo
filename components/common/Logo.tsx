"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Birthstone } from "next/font/google";
import { Code2 } from "lucide-react";

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
});

interface LogoProps {
  href?: string;
  className?: string;
  showIcon?: boolean;
}

export default function Logo({
  href = "/",
  className,
  showIcon = true,
}: LogoProps) {
  return (
    <Link href={href} className={clsx("inline-flex", className)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        {showIcon && (
          <Code2 size={22} className="text-primary" />
        )}

        <span
          className={`${birthstone.className} text-lg sm:text-2xl leading-none text-primary`}
        >
          Mehedi
          <span className="text-base-content/60"> Hasan</span>
        </span>
      </motion.div>
    </Link>
  );
}
