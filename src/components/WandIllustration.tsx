"use client";

import { motion } from "framer-motion";

export default function WandIllustration() {
  return (
    <motion.div
      className="relative animate-float"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Ambient glow behind the whole scene */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--gold)] rounded-full blur-[80px] opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-[var(--purple)] rounded-full blur-[60px] opacity-15" />

      <svg
        width="340"
        height="440"
        viewBox="0 0 340 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-wand-glow relative z-10"
      >
        <defs>
          <linearGradient id="wandBody" x1="170" y1="60" x2="170" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A07828" />
            <stop offset="25%" stopColor="#8B6914" />
            <stop offset="50%" stopColor="#6B4F10" />
            <stop offset="80%" stopColor="#4A3508" />
            <stop offset="100%" stopColor="#3D2B06" />
          </linearGradient>
          <linearGradient id="handleGrad" x1="170" y1="260" x2="170" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A3508" />
            <stop offset="50%" stopColor="#3D2B06" />
            <stop offset="100%" stopColor="#2A1D04" />
          </linearGradient>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#f0d878" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#c9a84c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7b4bb3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbGlowOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0d878" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#b388ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7b4bb3" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bigGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#C4956A" />
          </linearGradient>
          <linearGradient id="robeGrad" x1="170" y1="340" x2="170" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a1035" />
            <stop offset="100%" stopColor="#0d0820" />
          </linearGradient>
          <linearGradient id="hoodGrad" x1="170" y1="310" x2="170" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#251848" />
            <stop offset="100%" stopColor="#1a1035" />
          </linearGradient>
        </defs>

        {/* === ORB GLOW at wand tip === */}
        {/* Outer glow ring */}
        <circle cx="170" cy="52" r="35" fill="url(#orbGlowOuter)" filter="url(#bigGlow)">
          <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Inner orb */}
        <circle cx="170" cy="52" r="14" fill="url(#orbGlow)" filter="url(#softGlow)">
          <animate attributeName="r" values="12;16;12" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Bright core */}
        <circle cx="170" cy="52" r="5" fill="#ffffff" opacity="0.9">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Sparkles around orb */}
        <circle cx="148" cy="40" r="1.5" fill="#ffffff" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="192" cy="38" r="1" fill="#f0d878" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
        </circle>
        <circle cx="158" cy="30" r="1.2" fill="#b388ff" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1.2s" />
        </circle>
        <circle cx="185" cy="65" r="0.8" fill="#ffffff" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="155" cy="60" r="1" fill="#f0d878" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" begin="1.8s" />
        </circle>
        {/* 4-point star sparkle */}
        <g opacity="0" transform="translate(195, 48)">
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#f0d878" strokeWidth="0.8" />
          <line x1="-4" y1="0" x2="4" y2="0" stroke="#f0d878" strokeWidth="0.8" />
        </g>
        <g opacity="0" transform="translate(145, 45)">
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#ffffff" strokeWidth="0.6" />
          <line x1="-3" y1="0" x2="3" y2="0" stroke="#ffffff" strokeWidth="0.6" />
        </g>

        {/* === WAND === */}
        {/* Wand shaft - pointed tip tapering to handle */}
        <path
          d="M170 65 L166 150 L165 260 Q165 268 170 268 Q175 268 175 260 L174 150 Z"
          fill="url(#wandBody)"
          stroke="#A07828"
          strokeWidth="0.5"
        />
        {/* Highlight streak on wand */}
        <path
          d="M169 70 L168 150 L168.5 250"
          stroke="#c9a84c"
          strokeWidth="0.5"
          opacity="0.3"
        />
        {/* Handle wrap - thicker grip section */}
        <rect x="163" y="230" width="14" height="38" rx="3" fill="url(#handleGrad)" stroke="#A07828" strokeWidth="0.5" />
        {/* Grip rings */}
        <line x1="163" y1="238" x2="177" y2="238" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
        <line x1="163" y1="245" x2="177" y2="245" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
        <line x1="163" y1="252" x2="177" y2="252" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
        <line x1="163" y1="259" x2="177" y2="259" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
        {/* Small gem where shaft meets handle */}
        <ellipse cx="170" cy="228" rx="5" ry="3" fill="#7b4bb3" opacity="0.6" filter="url(#softGlow)" />

        {/* === BOY HOLDING WAND === */}
        {/* Body / Robe */}
        <path
          d="M130 370 Q130 355 145 345 L155 340 L170 335 L185 340 L195 345 Q210 355 210 370 L215 440 L125 440 Z"
          fill="url(#robeGrad)"
          stroke="#2d1b4e"
          strokeWidth="0.5"
        />
        {/* Robe collar / hood */}
        <path
          d="M148 345 Q155 330 170 325 Q185 330 192 345 L188 350 Q180 338 170 335 Q160 338 152 350 Z"
          fill="url(#hoodGrad)"
          stroke="#2d1b4e"
          strokeWidth="0.5"
        />
        {/* Robe center seam */}
        <line x1="170" y1="340" x2="170" y2="440" stroke="#2d1b4e" strokeWidth="0.5" opacity="0.5" />
        {/* Star emblem on robe */}
        <g transform="translate(170, 380)" opacity="0.3">
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#c9a84c" strokeWidth="0.7" />
          <line x1="-5" y1="0" x2="5" y2="0" stroke="#c9a84c" strokeWidth="0.7" />
          <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="3.5" y1="-3.5" x2="-3.5" y2="3.5" stroke="#c9a84c" strokeWidth="0.5" />
        </g>

        {/* Head */}
        <ellipse cx="170" cy="312" rx="18" ry="20" fill="url(#skinTone)" />
        {/* Hair */}
        <path
          d="M152 308 Q152 292 170 290 Q188 292 188 308 Q185 298 170 296 Q155 298 152 308Z"
          fill="#2A1A0A"
        />
        {/* Eyes */}
        <ellipse cx="163" cy="314" rx="2.5" ry="2" fill="#1a1a2e" />
        <ellipse cx="177" cy="314" rx="2.5" ry="2" fill="#1a1a2e" />
        {/* Eye shine */}
        <circle cx="164" cy="313.5" r="0.8" fill="#f0d878" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="178" cy="313.5" r="0.8" fill="#f0d878" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Slight smile */}
        <path d="M165 320 Q170 324 175 320" stroke="#8B6040" strokeWidth="0.8" fill="none" />
        {/* Eyebrows - slightly raised in wonder */}
        <path d="M159 309 Q163 307 167 309" stroke="#2A1A0A" strokeWidth="0.8" fill="none" />
        <path d="M173 309 Q177 307 181 309" stroke="#2A1A0A" strokeWidth="0.8" fill="none" />

        {/* RIGHT ARM holding wand up */}
        {/* Upper arm */}
        <path
          d="M190 348 Q195 342 195 330 L198 328 Q202 340 198 352 Z"
          fill="url(#hoodGrad)"
        />
        {/* Forearm going up toward wand */}
        <path
          d="M195 330 Q190 310 183 290 L187 288 Q194 308 198 328 Z"
          fill="url(#hoodGrad)"
        />
        {/* Right hand gripping wand */}
        <ellipse cx="172" cy="272" rx="8" ry="6" fill="url(#skinTone)" transform="rotate(-10, 172, 272)" />
        {/* Fingers wrapping */}
        <path d="M166 268 Q164 272 166 276" stroke="#C4956A" strokeWidth="1.2" fill="none" />
        <path d="M169 267 Q167 272 169 277" stroke="#C4956A" strokeWidth="1" fill="none" />
        <path d="M176 268 Q178 272 176 276" stroke="#C4956A" strokeWidth="1" fill="none" />

        {/* LEFT ARM at side */}
        <path
          d="M150 348 Q142 355 138 370 L135 390 L140 392 L145 372 Q148 358 152 352 Z"
          fill="url(#hoodGrad)"
        />
        {/* Left hand */}
        <ellipse cx="136" cy="392" rx="5" ry="4" fill="url(#skinTone)" />
      </svg>
    </motion.div>
  );
}
