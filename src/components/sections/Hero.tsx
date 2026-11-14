"use client";

import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import SocialIcon from "@/components/ui/SocialIcon";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { GitHubIcon, LinkedInIcon, FacebookIcon, TikTokIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 25 });

  const heroY = useTransform(smoothY, [0, 500], [0, 90]);
  const heroOpacity = useTransform(smoothY, [0, 450], [1, 0.3]);
  const avatarScale = useTransform(smoothY, [0, 400], [1, 0.88]);

  // Mouse perspective tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 90, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rawMouseX.set(x);
      rawMouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // Avatar 3D tilt tracking mouse
  const avatarRotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const avatarRotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
      style={{ perspective: 1000 }}
    >
      {/* Background ambient center accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px] dark:bg-cyan-500/[0.08]" />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        {/* Interactive 3D Avatar (Tracks mouse angle + perpetual floating breathing bob) */}
        <motion.div
          style={{
            scale: avatarScale,
            rotateX: avatarRotateX,
            rotateY: avatarRotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { type: "spring", stiffness: 200, damping: 20, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative cursor-pointer"
        >
          <div className="h-28 w-28 rounded-full border-2 border-black/10 bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] shadow-xl dark:border-white/10">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-4xl shadow-inner dark:bg-neutral-950">
              👨‍💻
            </div>
          </div>
          {/* Online indicator with perpetual pulsing radar ring */}
          <div className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-neutral-950 dark:bg-green-400" />
          </div>
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

        {/* Location badge with gentle breathing pulse */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0)",
              "0 0 16px 2px rgba(56, 189, 248, 0.15)",
              "0 0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-2 flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-4 py-2 text-sm text-neutral-700 shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-neutral-400 dark:shadow-none"
        >
          <span className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
          <span>📍 {profile.location}</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="mt-12 pb-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}
