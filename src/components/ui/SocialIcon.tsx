"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
  delay?: number;
}

export default function SocialIcon({
  href,
  icon,
  label,
  delay = 0,
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{
        scale: 1.15,
        y: -3,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      whileTap={{ scale: 0.9 }}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-500/40 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:shadow-none dark:hover:border-blue-400/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
      aria-label={label}
    >
      {icon}
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-300">
        {label}
      </span>
    </motion.a>
  );
}
