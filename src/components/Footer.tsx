"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] px-6 py-8 transition-colors dark:border-white/[0.06]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <p className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          Built with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> by{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-200">
            Dimas Waldy Muzzaky
          </span>
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          © 2025 — Next.js • Tailwind CSS • Framer Motion
        </p>
      </div>
    </footer>
  );
}
