"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px]">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
      />
    </div>
  );
}
