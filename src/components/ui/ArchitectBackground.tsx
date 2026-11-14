"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ArchitectBackground() {
  const { scrollYProgress } = useScroll();

  // Mouse tracking normalized from -1 to 1
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth springs for fluid, physics-based mouse movement
  const springConfig = { stiffness: 65, damping: 25 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  // Live coordinates state for the technical HUD display
  const [hudCoords, setHudCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      rawMouseX.set(x);
      rawMouseY.set(y);
      setHudCoords({
        x: parseFloat(x.toFixed(2)),
        y: parseFloat(y.toFixed(2)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  // Scroll spring
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // 3D Perspective Scene Rotation driven by Mouse Angle
  const sceneRotateX = useTransform(mouseY, [-1, 1], [6, -6]);
  const sceneRotateY = useTransform(mouseX, [-1, 1], [-6, 6]);

  // Parallax offsets combining Mouse + Scroll
  const scrollCubeY = useTransform(smoothScroll, [0, 1], [0, 200]);
  const cubeMouseX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const cubeMouseY = useTransform(mouseY, [-1, 1], [-40, 40]);

  const scrollCompassY = useTransform(smoothScroll, [0, 1], [0, -120]);
  const compassMouseX = useTransform(mouseX, [-1, 1], [35, -35]);
  const compassMouseY = useTransform(mouseY, [-1, 1], [35, -35]);

  const perspectiveY = useTransform(smoothScroll, [0, 1], [0, 100]);
  const perspectiveSkew = useTransform(mouseX, [-1, 1], [-5, 5]);

  // Dynamic Neon Cursor Aura Spotlight following mouse position
  const auraX = useTransform(mouseX, [-1, 1], ["25%", "75%"]);
  const auraY = useTransform(mouseY, [-1, 1], ["25%", "75%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* 1. Interactive Neon Cursor Aura (Glides softly towards mouse position) */}
      <motion.div
        style={{
          left: auraX,
          top: auraY,
        }}
        className="absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px] transition-opacity duration-500 dark:bg-cyan-400/[0.09]"
      />

      {/* 2. Perpetual Floating & Breathing Neon Atmospheric Glows (Bergerak tiap detik) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.06] blur-[150px] dark:bg-cyan-500/[0.07]"
      />
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[25%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.05] blur-[160px] dark:bg-blue-500/[0.06]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px] dark:bg-indigo-500/[0.05]"
      />

      {/* 3. Global 3D Perspective Stage Tilting with Mouse Angle */}
      <motion.div
        style={{
          rotateX: sceneRotateX,
          rotateY: sceneRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {/* Architectural Blueprint Grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-60 dark:opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Minor 20px grid */}
            <pattern
              id="arch-minor-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-neutral-900/[0.03] dark:text-cyan-400/[0.04]"
              />
            </pattern>

            {/* Major 100px grid with technical corner ticks */}
            <pattern
              id="arch-major-grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#arch-minor-grid)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-600/[0.08] dark:text-cyan-300/[0.12]"
              />
              <path
                d="M -5 0 L 5 0 M 0 -5 L 0 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-neutral-900/[0.15] dark:text-white/[0.25]"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#arch-major-grid)" />
        </svg>

        {/* 4. 3D Isometric Cube: Perpetual Spin + Mouse Angle Shift + Scroll Drift */}
        <motion.div
          style={{
            y: scrollCubeY,
            x: cubeMouseX,
          }}
          className="absolute -right-16 top-20 hidden opacity-50 sm:block dark:opacity-65"
        >
          {/* Continuous Perpetual Rotation (Bergerak tiap detik) + Mouse Tilt */}
          <motion.div
            style={{
              translateY: cubeMouseY,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -14, 0],
            }}
            transition={{
              rotate: {
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <svg
              width="360"
              height="360"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Isometric Cube */}
              <polygon
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-600/[0.3] dark:text-cyan-400/[0.35]"
              />
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="180"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-600/[0.3] dark:text-cyan-400/[0.35]"
              />
              <line
                x1="100"
                y1="100"
                x2="170"
                y2="60"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-600/[0.3] dark:text-cyan-400/[0.35]"
              />
              <line
                x1="100"
                y1="100"
                x2="30"
                y2="60"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-600/[0.3] dark:text-cyan-400/[0.35]"
              />

              {/* Inner Nested Floating Wireframe Cube */}
              <polygon
                points="100,50 145,75 145,125 100,150 55,125 55,75"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                className="text-neutral-500/[0.35] dark:text-white/[0.3]"
              />
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="150"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                className="text-neutral-500/[0.35] dark:text-white/[0.3]"
              />
              <line
                x1="100"
                y1="100"
                x2="145"
                y2="75"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                className="text-neutral-500/[0.35] dark:text-white/[0.3]"
              />
              <line
                x1="100"
                y1="100"
                x2="55"
                y2="75"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="3 3"
                className="text-neutral-500/[0.35] dark:text-white/[0.3]"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* 5. Middle Left Drafting Radar / Compass (Perpetual Counter-Clockwise Sweep + Mouse Shift) */}
        <motion.div
          style={{
            y: scrollCompassY,
            x: compassMouseX,
          }}
          className="absolute -left-20 top-[40%] hidden opacity-40 sm:block dark:opacity-50"
        >
          <motion.div
            style={{
              translateY: compassMouseY,
            }}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              width="380"
              height="380"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="120"
                cy="120"
                r="100"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-neutral-800/[0.14] dark:text-cyan-400/[0.22]"
              />
              <circle
                cx="120"
                cy="120"
                r="70"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="4 4"
                className="text-neutral-800/[0.18] dark:text-white/[0.2]"
              />
              <circle
                cx="120"
                cy="120"
                r="40"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-blue-500/[0.25] dark:text-cyan-300/[0.32]"
              />

              {/* Coordinate Cross Axis */}
              <line
                x1="10"
                y1="120"
                x2="230"
                y2="120"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-neutral-900/[0.12] dark:text-white/[0.15]"
              />
              <line
                x1="120"
                y1="10"
                x2="120"
                y2="230"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-neutral-900/[0.12] dark:text-white/[0.15]"
              />

              {/* 45 Degree Diagonal Rays */}
              <line
                x1="45"
                y1="45"
                x2="195"
                y2="195"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                className="text-neutral-900/[0.1] dark:text-white/[0.12]"
              />
              <line
                x1="45"
                y1="195"
                x2="195"
                y2="45"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                className="text-neutral-900/[0.1] dark:text-white/[0.12]"
              />

              {/* Technical drafting notations */}
              <text
                x="130"
                y="35"
                fill="currentColor"
                fontSize="7"
                fontFamily="monospace"
                letterSpacing="1.5"
                className="text-neutral-700/[0.5] dark:text-cyan-300/[0.5]"
              >
                SYS_REF // 42.08°
              </text>
              <text
                x="130"
                y="115"
                fill="currentColor"
                fontSize="6"
                fontFamily="monospace"
                letterSpacing="1"
                className="text-neutral-600/[0.4] dark:text-white/[0.4]"
              >
                AXIS_Z: 0.00
              </text>
            </svg>
          </motion.div>
        </motion.div>

        {/* 6. Bottom Right 3D Perspective Grid Vanishing Lines */}
        <motion.div
          style={{
            y: perspectiveY,
            skewX: perspectiveSkew,
          }}
          className="absolute -bottom-10 right-0 hidden h-80 w-[420px] opacity-35 md:block dark:opacity-45"
        >
          <motion.div
            animate={{
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="300"
                y1="20"
                x2="0"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-blue-500/[0.18] dark:text-cyan-400/[0.25]"
              />
              <line
                x1="300"
                y1="20"
                x2="70"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-blue-500/[0.18] dark:text-cyan-400/[0.25]"
              />
              <line
                x1="300"
                y1="20"
                x2="140"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-blue-500/[0.18] dark:text-cyan-400/[0.25]"
              />
              <line
                x1="300"
                y1="20"
                x2="210"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-blue-500/[0.18] dark:text-cyan-400/[0.25]"
              />
              <line
                x1="300"
                y1="20"
                x2="280"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-blue-500/[0.18] dark:text-cyan-400/[0.25]"
              />

              <line
                x1="220"
                y1="70"
                x2="300"
                y2="70"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-neutral-700/[0.18] dark:text-white/[0.2]"
              />
              <line
                x1="150"
                y1="110"
                x2="300"
                y2="110"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-neutral-700/[0.18] dark:text-white/[0.2]"
              />
              <line
                x1="70"
                y1="155"
                x2="300"
                y2="155"
                stroke="currentColor"
                strokeWidth="0.7"
                className="text-neutral-700/[0.18] dark:text-white/[0.2]"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 7. Live Interactive Architectural Technical HUD in corner */}
      <div className="absolute bottom-6 left-6 hidden items-center gap-2 rounded-full border border-black/[0.06] bg-white/40 px-3 py-1 font-mono text-[10px] text-neutral-500 backdrop-blur-md sm:flex dark:border-white/[0.08] dark:bg-black/30 dark:text-cyan-400/80">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
        </span>
        <span>CAD_VIEW: X: {hudCoords.x > 0 ? `+${hudCoords.x}` : hudCoords.x}</span>
        <span className="opacity-40">|</span>
        <span>Y: {hudCoords.y > 0 ? `+${hudCoords.y}` : hudCoords.y}</span>
      </div>

      {/* 8. Elegant Focus Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 20%, var(--vignette-color, rgba(10,10,10,0.65)) 100%)",
        }}
      />
    </div>
  );
}
