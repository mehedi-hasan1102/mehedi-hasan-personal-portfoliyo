"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

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
          <span className="text-primary text-xl sm:text-2xl font-bold">
            &lt;/&gt;
          </span>
        )}

        <span className="text-sm sm:text-lg font-semibold leading-none">
          Mehedi
          <span className="text-base-content/60 font-normal"> Hasan</span>
        </span>
      </motion.div>
    </Link>
  );
}
