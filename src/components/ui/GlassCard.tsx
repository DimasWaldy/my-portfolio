"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-black/[0.08] 
        bg-white/80 backdrop-blur-xl shadow-sm
        dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none
        ${
          hover
            ? "transition-all duration-300 hover:border-black/[0.15] hover:bg-white/95 hover:shadow-lg hover:shadow-black/5 dark:hover:border-white/[0.15] dark:hover:bg-white/[0.06] dark:hover:shadow-blue-500/5"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
