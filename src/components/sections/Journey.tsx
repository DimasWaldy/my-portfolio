"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Code2, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const journey = [
  {
    year: "2022",
    title: "Memulai Perjalanan",
    description:
      "Pertama kali mengenal dunia programming dan web development. Mulai belajar HTML, CSS, dan JavaScript.",
    icon: <Code2 className="h-5 w-5" />,
    color: "bg-emerald-500",
  },
  {
    year: "2023",
    title: "Masuk STMIK Pranata Indonesia",
    description:
      "Resmi menjadi mahasiswa Teknik Informatika. Mulai mendalami PHP, MySQL, dan framework Laravel.",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Building Real Projects",
    description:
      "Mulai membangun proyek nyata: SmartOS RW untuk manajemen kas RT dan Keuangan Keluarga. Belajar React dan deploy ke Vercel.",
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Leveling Up",
    description:
      "Eksplorasi Next.js, Tailwind CSS, dan teknologi modern lainnya. Semester 5 dan terus berkembang!",
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-amber-500",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" ref={containerRef} className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Journey
          </h2>
          <h3 className="mb-14 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Perjalanan Saya
          </h3>
        </ScrollReveal>

        <div className="relative">
          {/* Base inactive vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-neutral-200 dark:bg-white/[0.08] sm:left-1/2 sm:-translate-x-px" />

          {/* Active animated glowing line that draws on scroll */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_8px_rgba(56,189,248,0.8)] sm:left-1/2 sm:-translate-x-px"
          />

          {journey.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative mb-12 flex items-start gap-4 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content Card with pl-14 on mobile */}
                <div
                  className={`flex-1 pl-14 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pl-0 sm:pr-12 sm:text-right" : "sm:pl-12 sm:pr-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl border border-black/[0.06] bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-black/[0.12] hover:bg-white hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]"
                  >
                    <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-white/5 dark:text-blue-400">
                      {item.year}
                    </span>
                    <h4 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot / Icon that pops in on scroll */}
                <div className="absolute left-6 -translate-x-1/2 sm:left-1/2">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full ${item.color} text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Spacer for desktop two-column balance */}
                <div className="hidden flex-1 sm:block sm:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
