"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { projects, Project } from "@/data/projects";

function ProjectCardItem({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax translation for browser mockup window
  const mockupY = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const mockupRotate = useTransform(smoothProgress, [0, 0.5, 1], [3, 0, -3]);

  return (
    <div ref={cardRef}>
      <GlassCard className="group overflow-hidden" hover>
        <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
          {/* Preview area with parallax effect */}
          <div
            className={`relative flex min-h-[260px] items-center justify-center bg-gradient-to-br ${project.gradient} p-8`}
          >
            {/* Mockup frame with scroll-linked parallax */}
            <motion.div
              style={{
                y: mockupY,
                rotateX: mockupRotate,
              }}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-sm cursor-pointer"
            >
              {/* Browser mockup */}
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white/90 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl dark:border-white/10 dark:bg-neutral-900/90">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3 dark:border-white/5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 truncate rounded-md bg-black/5 px-3 py-1 text-center text-[10px] text-neutral-500 dark:bg-white/5 dark:text-neutral-400">
                    {project.liveUrl.replace("https://", "")}
                  </div>
                </div>
                {/* Content area */}
                <div className="flex h-40 flex-col items-center justify-center gap-3 p-6">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.id === "keuangan-keluarga" ? "💰" : "🏘️"}
                  </motion.div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Project {String(index + 1).padStart(2, "0")}
            </div>
            <h4 className="mb-1 text-2xl font-bold text-neutral-900 dark:text-white">
              {project.title}
            </h4>
            <p className="mb-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>
            <p className="mb-5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {project.longDescription}
            </p>

            {/* Tech tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/[0.06] bg-black/[0.03] px-3 py-1 text-xs font-medium text-neutral-700 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-black/20 hover:bg-black/10 hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Portfolio
          </h2>
          <h3 className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Featured Projects
          </h3>
          <p className="mx-auto mb-14 max-w-xl text-center text-neutral-600 dark:text-neutral-400">
            Beberapa proyek yang sudah saya kerjakan. Setiap proyek adalah hasil pembelajaran dan eksplorasi teknologi nyata.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.15}>
              <ProjectCardItem project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
