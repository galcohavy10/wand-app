"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function WandIllustration({ isCasting = true }: { isCasting?: boolean }) {
  return (
    <motion.div
      className="relative w-full max-w-[500px]"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Ambient glow behind the boy and wand */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--gold)] rounded-full blur-[100px] opacity-20" />
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-48 h-48 bg-[var(--purple)] rounded-full blur-[80px] opacity-30" />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
      >
        <defs>
          <linearGradient id="wandBody" x1="160" y1="200" x2="350" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3D2B06" />
            <stop offset="20%" stopColor="#4A3508" />
            <stop offset="50%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#A07828" />
          </linearGradient>
          <linearGradient id="handleGrad" x1="120" y1="205" x2="160" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A1D04" />
            <stop offset="50%" stopColor="#3D2B06" />
            <stop offset="100%" stopColor="#4A3508" />
          </linearGradient>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="20%" stopColor="#f0d878" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#c9a84c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7b4bb3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbGlowOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0d878" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#b388ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7b4bb3" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bigGlow">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="beamGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#C4956A" />
          </linearGradient>
          <linearGradient id="robeGrad" x1="100" y1="180" x2="100" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#251848" />
            <stop offset="50%" stopColor="#1a1035" />
            <stop offset="100%" stopColor="#0d0820" />
          </linearGradient>
          <linearGradient id="hoodGrad" x1="100" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#32225a" />
            <stop offset="100%" stopColor="#1a1035" />
          </linearGradient>
          <linearGradient id="beamGradient" x1="360" y1="180" x2="500" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#f0d878" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#b388ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7b4bb3" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* === MAGIC BEAM SHOOTING RIGHT === */}
        <AnimatePresence>
          {isCasting && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Core beam */}
              <path d="M350 180 Q420 178 500 180" stroke="url(#beamGradient)" strokeWidth="6" strokeLinecap="round" filter="url(#beamGlow)" className="animate-pulse" />
              <path d="M350 180 Q420 175 500 170" stroke="url(#beamGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.6" filter="url(#beamGlow)" />
              <path d="M350 180 Q420 185 500 190" stroke="url(#beamGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.6" filter="url(#beamGlow)" />

              {/* Particles along the beam */}
              {[
                { cx: 382, cy: 172, r: 1.5, dur: 0.8, begin: 0.3, cxStart: 364 },
                { cx: 421, cy: 181, r: 1.3, dur: 1.2, begin: 0.9, cxStart: 371 },
                { cx: 395, cy: 176, r: 2.1, dur: 1.6, begin: 0.1, cxStart: 368 },
                { cx: 448, cy: 169, r: 1.8, dur: 0.9, begin: 1.5, cxStart: 375 },
                { cx: 467, cy: 185, r: 1.2, dur: 1.4, begin: 0.6, cxStart: 362 },
                { cx: 410, cy: 190, r: 2.5, dur: 1.1, begin: 1.8, cxStart: 369 },
                { cx: 436, cy: 173, r: 1.7, dur: 0.7, begin: 0.4, cxStart: 377 },
                { cx: 475, cy: 188, r: 1.4, dur: 1.9, begin: 1.2, cxStart: 366 },
                { cx: 390, cy: 180, r: 2.0, dur: 1.3, begin: 0.7, cxStart: 373 },
                { cx: 455, cy: 170, r: 1.6, dur: 0.6, begin: 1.0, cxStart: 365 },
                { cx: 485, cy: 183, r: 1.9, dur: 1.7, begin: 0.2, cxStart: 370 },
                { cx: 402, cy: 178, r: 2.3, dur: 1.0, begin: 1.6, cxStart: 374 },
                { cx: 430, cy: 192, r: 1.1, dur: 1.5, begin: 0.5, cxStart: 367 },
                { cx: 460, cy: 167, r: 2.7, dur: 0.8, begin: 1.3, cxStart: 376 },
                { cx: 493, cy: 186, r: 1.3, dur: 1.8, begin: 0.8, cxStart: 363 },
              ].map((p, i) => (
                <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#f0d878" opacity="0">
                  <animate attributeName="opacity" values="0;1;0" dur={`${p.dur}s`} repeatCount="indefinite" begin={`${p.begin}s`} />
                  <animate attributeName="cx" values={`${p.cxStart};500`} dur={`${p.dur}s`} repeatCount="indefinite" begin={`${p.begin}s`} />
                </circle>
              ))}

              {/* Stars/Sparkles emanating from tip */}
              <g stroke="#ffffff" strokeWidth="1" filter="url(#softGlow)">
                <path d="M350 170 L350 155 M342 162 L358 162" className="animate-pulse" />
                <path d="M360 190 L360 180 M355 185 L365 185" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                <path d="M380 165 L380 150 M372 157 L388 157" className="animate-pulse" stroke="#f0d878" style={{ animationDelay: "0.8s" }} />
              </g>

              {/* === ORB GLOW at wand tip === */}
              {/* Outer glow ring */}
              <circle cx="355" cy="180" r="45" fill="url(#orbGlowOuter)" filter="url(#bigGlow)">
                <animate attributeName="r" values="40;50;40" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Inner orb */}
              <circle cx="355" cy="180" r="18" fill="url(#orbGlow)" filter="url(#softGlow)">
                <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Bright core */}
              <circle cx="355" cy="180" r="6" fill="#ffffff" opacity="0.9">
                <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
              </circle>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Small dim orb when NOT casting */}
        {!isCasting && (
          <circle cx="355" cy="180" r="8" fill="url(#orbGlow)" opacity="0.3" />
        )}

        {/* === WAND === */}
        {/* Wand shaft - pointing right */}
        <path
          d="M150 200 L350 185 L350 175 L150 190 Z"
          fill="url(#wandBody)"
          stroke="#A07828"
          strokeWidth="0.5"
        />
        {/* Highlight streak on wand */}
        <path
          d="M150 195 L340 180"
          stroke="#c9a84c"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Handle wrap */}
        <rect x="110" y="192" width="45" height="14" rx="4" fill="url(#handleGrad)" stroke="#A07828" strokeWidth="0.5" transform="rotate(-5, 110, 192)" />
        {/* Grip rings */}
        <line x1="120" y1="190" x2="120" y2="204" stroke="#c9a84c" strokeWidth="1" opacity="0.4" transform="rotate(-5, 110, 192)" />
        <line x1="130" y1="190" x2="130" y2="204" stroke="#c9a84c" strokeWidth="1" opacity="0.4" transform="rotate(-5, 110, 192)" />
        <line x1="140" y1="190" x2="140" y2="204" stroke="#c9a84c" strokeWidth="1" opacity="0.4" transform="rotate(-5, 110, 192)" />
        {/* Small gem at base */}
        <ellipse cx="108" cy="200" rx="4" ry="6" fill="#7b4bb3" opacity="0.8" filter="url(#softGlow)" />

        {/* === BOY HOLDING WAND (facing right) === */}
        {/* Robe/Body */}
        <path
          d="M120 220 Q140 280 145 400 L40 400 Q45 280 70 220 Z"
          fill="url(#robeGrad)"
          stroke="#2d1b4e"
          strokeWidth="1"
        />
        {/* Robe folds */}
        <path d="M100 240 Q110 320 115 400" stroke="#1a1035" strokeWidth="2" fill="none" />
        <path d="M70 260 Q80 330 85 400" stroke="#1a1035" strokeWidth="2" fill="none" />

        {/* Hood/Collar */}
        <path
          d="M60 190 Q80 230 110 230 Q130 230 140 210 Q120 180 100 180 Q80 180 60 190 Z"
          fill="url(#hoodGrad)"
          stroke="#1a1035"
          strokeWidth="1"
        />

        {/* Head */}
        <ellipse cx="95" cy="140" rx="30" ry="35" fill="url(#skinTone)" />

        {/* Hair - swept back dynamically */}
        <path
          d="M65 145 Q60 100 95 100 Q125 100 135 120 Q125 110 95 110 Q70 115 70 145 Z"
          fill="#2A1A0A"
        />
        <path d="M90 105 Q120 110 135 130 Q115 125 90 115 Z" fill="#3D2B06" opacity="0.5" />

        {/* Ear */}
        <ellipse cx="65" cy="145" rx="5" ry="8" fill="url(#skinTone)" />

        {/* Eye (facing right, profile/3/4 view) */}
        <ellipse cx="115" cy="135" rx="3.5" ry="5" fill="#1a1a2e" />
        {/* Eye shine reflecting the magic */}
        <circle cx="116" cy="134" r="1.5" fill="#f0d878" opacity="0.9">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Eyebrow - determined/focused */}
        <path d="M108 125 Q115 122 122 126" stroke="#2A1A0A" strokeWidth="2" fill="none" />

        {/* Nose - protruding profile nose */}
        <path d="M120 138 Q130 143 128 150 Q124 152 120 150" fill="#C4956A" />
        <path d="M120 138 Q130 143 128 150" stroke="#B8875A" strokeWidth="0.5" fill="none" />

        {/* Mouth - closed gentle smile */}
        <path d="M108 160 Q114 164 120 160" stroke="#A0604A" strokeWidth="1.2" fill="none" strokeLinecap="round" />

        {/* Right Arm (extended, holding wand) */}
        {/* Upper sleeve */}
        <path
          d="M100 200 Q120 220 140 240 L160 210 Q130 180 110 170 Z"
          fill="url(#hoodGrad)"
        />
        {/* Lower sleeve/cuff */}
        <path
          d="M140 240 Q150 250 170 230 L155 200 Z"
          fill="url(#robeGrad)"
        />

        {/* Hand holding wand */}
        <ellipse cx="130" cy="205" rx="10" ry="12" fill="url(#skinTone)" transform="rotate(-15, 130, 205)" />
        {/* Fingers over wand */}
        <path d="M128 198 Q132 195 135 198" stroke="#C4956A" strokeWidth="2" fill="none" />
        <path d="M125 202 Q130 198 135 202" stroke="#C4956A" strokeWidth="2" fill="none" />
        <path d="M123 207 Q128 202 133 207" stroke="#C4956A" strokeWidth="2" fill="none" />

        {/* Left Arm (tucked back) */}
        <path
          d="M70 200 Q50 240 60 280 L80 270 Q60 220 80 190 Z"
          fill="url(#robeGrad)"
          opacity="0.8"
        />

      </svg>
    </motion.div>
  );
}

