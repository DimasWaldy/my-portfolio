"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Tech Stack
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            What I Work With
          </h3>
        </ScrollReveal>

        {skillCategories.map((cat) => {
          const categorySkills = skills.filter((s) => s.category === cat.key);
          if (categorySkills.length === 0) return null;

          return (
            <div key={cat.key} className="mb-10">
              <ScrollReveal>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {cat.label}
                </h4>
              </ScrollReveal>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6"
              >
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 20 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    <TiltCard className="group cursor-default">
                      <div className="flex flex-col items-center gap-2 rounded-2xl border border-black/[0.06] bg-white/70 p-4 shadow-sm transition-all duration-300 hover:border-black/[0.12] hover:bg-white hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </span>
                        <span className="text-xs font-medium text-neutral-800 dark:text-neutral-300">
                          {skill.name}
                        </span>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
