"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GitHubIcon, LinkedInIcon, FacebookIcon, TikTokIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "hover:text-red-500 hover:border-red-500/30",
  },
  {
    icon: <GitHubIcon className="h-5 w-5" />,
    label: "GitHub",
    value: profile.socials.github.label,
    href: profile.socials.github.url,
    color: "hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400",
  },
  {
    icon: <LinkedInIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: profile.socials.linkedin.label,
    href: profile.socials.linkedin.url,
    color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: <FacebookIcon className="h-5 w-5" />,
    label: "Facebook",
    value: profile.socials.facebook.label,
    href: profile.socials.facebook.url,
    color: "hover:text-blue-700 dark:hover:text-blue-500 hover:border-blue-600/30",
  },
  {
    icon: <TikTokIcon className="h-5 w-5" />,
    label: "TikTok",
    value: profile.socials.tiktok.label,
    href: profile.socials.tiktok.url,
    color: "hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/30",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[120px]" />

      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Contact
          </h2>
          <h3 className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Let&apos;s Connect
          </h3>
          <p className="mx-auto mb-12 max-w-md text-center text-neutral-600 dark:text-neutral-400">
            Tertarik untuk berkolaborasi atau sekadar ngobrol? Jangan ragu untuk menghubungi saya melalui platform berikut.
          </p>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="group mx-auto mb-10 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-500/20 dark:text-blue-400">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Send me an email
              </p>
              <p className="text-base font-semibold text-neutral-900 dark:text-white">
                {profile.email}
              </p>
            </div>
          </a>
        </ScrollReveal>

        {/* Social links grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center gap-2 rounded-2xl border border-black/[0.06] bg-white/70 p-4 text-neutral-600 shadow-sm transition-all duration-300 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-neutral-400 dark:shadow-none ${link.color}`}
            >
              {link.icon}
              <span className="text-xs font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
