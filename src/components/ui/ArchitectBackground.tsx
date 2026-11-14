"use client";

export default function ArchitectBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* 1. Ambient Neon Atmospheric Glows */}
      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.07] blur-[140px] dark:bg-cyan-500/[0.08]" />
      <div className="absolute right-[-10%] top-[25%] h-[700px] w-[700px] rounded-full bg-blue-600/[0.05] blur-[160px] dark:bg-blue-500/[0.06]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px] dark:bg-indigo-500/[0.05]" />

      {/* 2. Architectural Blueprint Grid with Crosshairs & Sub-divisions */}
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
            {/* Major grid lines */}
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="text-blue-600/[0.08] dark:text-cyan-300/[0.12]"
            />
            {/* Intersection Crosshairs (+) */}
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

      {/* 3. 3D Isometric Architectural Wireframe Structures */}
      {/* Top Right 3D Wireframe Cube / Pavilion Frame */}
      <div className="absolute -right-16 top-20 hidden opacity-40 transition-opacity duration-700 sm:block dark:opacity-50">
        <svg
          width="340"
          height="340"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-[spin_60s_linear_infinite]"
        >
          {/* Outer Isometric Cube */}
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-600/[0.2] dark:text-cyan-400/[0.25]"
          />
          {/* Internal Isometric Edges */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="180"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-600/[0.2] dark:text-cyan-400/[0.25]"
          />
          <line
            x1="100"
            y1="100"
            x2="170"
            y2="60"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-600/[0.2] dark:text-cyan-400/[0.25]"
          />
          <line
            x1="100"
            y1="100"
            x2="30"
            y2="60"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-600/[0.2] dark:text-cyan-400/[0.25]"
          />

          {/* Inner Nested Floating Wireframe Cube */}
          <polygon
            points="100,50 145,75 145,125 100,150 55,125 55,75"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            className="text-neutral-500/[0.25] dark:text-white/[0.2]"
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="150"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            className="text-neutral-500/[0.25] dark:text-white/[0.2]"
          />
          <line
            x1="100"
            y1="100"
            x2="145"
            y2="75"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            className="text-neutral-500/[0.25] dark:text-white/[0.2]"
          />
          <line
            x1="100"
            y1="100"
            x2="55"
            y2="75"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            className="text-neutral-500/[0.25] dark:text-white/[0.2]"
          />
        </svg>
      </div>

      {/* Middle Left 3D Perspective Plane & Technical Drafting Compass */}
      <div className="absolute -left-20 top-[45%] hidden opacity-30 sm:block dark:opacity-40">
        <svg
          width="360"
          height="360"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Architectural Radar / Drafting Circles */}
          <circle
            cx="120"
            cy="120"
            r="100"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-neutral-800/[0.1] dark:text-cyan-400/[0.15]"
          />
          <circle
            cx="120"
            cy="120"
            r="70"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="4 4"
            className="text-neutral-800/[0.15] dark:text-white/[0.15]"
          />
          <circle
            cx="120"
            cy="120"
            r="40"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-blue-500/[0.2] dark:text-cyan-300/[0.25]"
          />

          {/* Coordinate Cross Axis */}
          <line
            x1="10"
            y1="120"
            x2="230"
            y2="120"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-neutral-900/[0.1] dark:text-white/[0.12]"
          />
          <line
            x1="120"
            y1="10"
            x2="120"
            y2="230"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-neutral-900/[0.1] dark:text-white/[0.12]"
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
            className="text-neutral-900/[0.08] dark:text-white/[0.1]"
          />
          <line
            x1="45"
            y1="195"
            x2="195"
            y2="45"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="2 4"
            className="text-neutral-900/[0.08] dark:text-white/[0.1]"
          />

          {/* Technical drafting notations */}
          <text
            x="130"
            y="35"
            fill="currentColor"
            fontSize="7"
            fontFamily="monospace"
            letterSpacing="1.5"
            className="text-neutral-700/[0.4] dark:text-cyan-300/[0.4]"
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
            className="text-neutral-600/[0.35] dark:text-white/[0.3]"
          >
            AXIS_Z: 0.00
          </text>
        </svg>
      </div>

      {/* Bottom Right 3D Perspective Grid Vanishing Line */}
      <div className="absolute -bottom-10 right-0 hidden h-72 w-96 opacity-25 md:block dark:opacity-35">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Perspective Ray Lines converging to a vanishing point */}
          <line
            x1="300"
            y1="20"
            x2="0"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-blue-500/[0.15] dark:text-cyan-400/[0.2]"
          />
          <line
            x1="300"
            y1="20"
            x2="70"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-blue-500/[0.15] dark:text-cyan-400/[0.2]"
          />
          <line
            x1="300"
            y1="20"
            x2="140"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-blue-500/[0.15] dark:text-cyan-400/[0.2]"
          />
          <line
            x1="300"
            y1="20"
            x2="210"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-blue-500/[0.15] dark:text-cyan-400/[0.2]"
          />
          <line
            x1="300"
            y1="20"
            x2="280"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-blue-500/[0.15] dark:text-cyan-400/[0.2]"
          />

          {/* Cross horizontal perspective tiers */}
          <line
            x1="220"
            y1="70"
            x2="300"
            y2="70"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-neutral-700/[0.15] dark:text-white/[0.15]"
          />
          <line
            x1="150"
            y1="110"
            x2="300"
            y2="110"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-neutral-700/[0.15] dark:text-white/[0.15]"
          />
          <line
            x1="70"
            y1="155"
            x2="300"
            y2="155"
            stroke="currentColor"
            strokeWidth="0.7"
            className="text-neutral-700/[0.15] dark:text-white/[0.15]"
          />
        </svg>
      </div>

      {/* 4. Elegant Focus Vignette: Keeps center content clear & readable */}
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
