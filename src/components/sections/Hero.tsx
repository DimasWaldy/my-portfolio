"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import SocialIcon from "@/components/ui/SocialIcon";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { GitHubIcon, LinkedInIcon, FacebookIcon, TikTokIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background gradient lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px] dark:bg-blue-500/[0.07]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[100px] dark:bg-purple-500/[0.05]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="relative"
        >
          <div className="h-28 w-28 rounded-full border-2 border-black/10 bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-lg dark:border-white/10">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-4xl shadow-inner dark:bg-neutral-950">
              👨‍💻
            </div>
          </div>
          {/* Online indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-neutral-950 dark:bg-green-400"
          />
        </motion.div>

        {/* Name */}
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-7xl dark:text-white">
            <AnimatedText text={profile.name} delay={0.4} />
          </h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-lg font-medium text-blue-600 sm:text-xl dark:text-blue-400"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mx-auto max-w-md text-sm text-neutral-600 sm:text-base dark:text-neutral-400"
          >
            {profile.subtitle}
          </motion.p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 pt-2">
          <SocialIcon
            href={profile.socials.github.url}
            icon={<GitHubIcon className="h-5 w-5" />}
            label="GitHub"
            delay={1.5}
          />
          <SocialIcon
            href={profile.socials.linkedin.url}
            icon={<LinkedInIcon className="h-5 w-5" />}
            label="LinkedIn"
            delay={1.6}
          />
          <SocialIcon
            href={profile.socials.facebook.url}
            icon={<FacebookIcon className="h-5 w-5" />}
            label="Facebook"
            delay={1.7}
          />
          <SocialIcon
            href={profile.socials.tiktok.url}
            icon={<TikTokIcon className="h-5 w-5" />}
            label="TikTok"
            delay={1.8}
          />
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="mt-2 flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-4 py-2 text-sm text-neutral-700 shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-neutral-400 dark:shadow-none"
        >
          <span className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
          <span>📍 {profile.location}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 pb-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}
