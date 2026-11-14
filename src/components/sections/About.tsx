"use client";

import { MapPin, GraduationCap, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: profile.education.institution,
      value: `Semester ${profile.education.semester}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Domisili",
      value: profile.location,
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      label: "Focus",
      value: "Full-Stack Web Dev",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Sedikit tentang saya
          </h3>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] items-center">
          {/* Avatar / Illustration */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="h-64 w-64 rounded-3xl border border-black/[0.08] bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-1.5 shadow-md dark:border-white/[0.08] dark:from-blue-500/20 dark:to-purple-600/20 dark:shadow-none">
                  <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-inner backdrop-blur-sm dark:bg-neutral-900/80">
                    👨‍💻
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-blue-500/30 blur-sm" />
                <div className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-purple-500/20 blur-sm" />
              </div>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-neutral-300">
                {profile.bio}
              </p>

              {/* Highlight cards */}
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item, i) => (
                  <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                    <GlassCard className="flex flex-col gap-2 p-4">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        {item.icon}
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {item.value}
                      </span>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
