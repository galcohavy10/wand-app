"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpellTargetProps {
    activeSpell: number;
    isCasting: boolean;
}

function LightBulb({ active }: { active: boolean }) {
    return (
        <svg width="120" height="160" viewBox="0 0 120 160" overflow="visible" fill="none">
            {/* Glow behind bulb — circular, no clipping */}
            {active && (
                <motion.circle
                    cx="60" cy="60" r="55"
                    fill="rgba(255,220,80,0.12)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
            {/* Bulb glass */}
            <path
                d="M40 70 Q40 30 60 20 Q80 30 80 70 Q80 85 72 90 L48 90 Q40 85 40 70Z"
                fill={active ? "#FFF8DC" : "#2a2040"}
                stroke={active ? "#f0d878" : "#555"}
                strokeWidth="2"
            />
            {/* Inner glow when on */}
            {active && (
                <motion.path
                    d="M44 68 Q44 34 60 24 Q76 34 76 68 Q76 82 70 87 L50 87 Q44 82 44 68Z"
                    fill="rgba(255,240,150,0.4)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )}
            {/* Filament */}
            <path
                d="M52 65 Q56 50 60 65 Q64 50 68 65"
                stroke={active ? "#FFD700" : "#444"}
                strokeWidth="2"
                fill="none"
            />
            {/* Bulb base */}
            <rect x="48" y="90" width="24" height="8" rx="2" fill="#888" />
            <rect x="50" y="98" width="20" height="6" rx="2" fill="#777" />
            <rect x="52" y="104" width="16" height="6" rx="3" fill="#666" />
            {/* Light rays — only when active */}
            {active && (
                <g>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <motion.line
                            key={angle}
                            x1={60 + Math.cos((angle * Math.PI) / 180) * 42}
                            y1={60 + Math.sin((angle * Math.PI) / 180) * 42}
                            x2={60 + Math.cos((angle * Math.PI) / 180) * 52}
                            y2={60 + Math.sin((angle * Math.PI) / 180) * 52}
                            stroke="#FFD700"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: angle * 0.002 }}
                        />
                    ))}
                </g>
            )}
        </svg>
    );
}

function Television({ active }: { active: boolean }) {
    return (
        <svg width="140" height="120" viewBox="0 0 140 120" overflow="visible" fill="none">
            {/* Screen glow */}
            {active && (
                <motion.rect
                    x="5" y="5" width="130" height="85" rx="8"
                    fill="rgba(100,180,255,0.06)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            )}
            {/* TV body */}
            <rect x="10" y="10" width="120" height="80" rx="6" fill="#1a1a2e" stroke={active ? "#4488ff" : "#333"} strokeWidth="2" />
            {/* Screen */}
            <rect x="16" y="16" width="108" height="68" rx="3" fill={active ? "#0a1628" : "#111"} />
            {/* Screen content when on */}
            {active && (
                <g>
                    <motion.rect
                        x="20" y="22" width="60" height="8" rx="2"
                        fill="#4488ff"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 0.7, width: 60 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.rect
                        x="20" y="36" width="40" height="6" rx="2"
                        fill="#66aaff"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.rect
                        x="20" y="48" width="80" height="30" rx="3"
                        fill="rgba(68,136,255,0.15)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                    <motion.rect
                        x="16" y="16" width="108" height="2"
                        fill="rgba(255,255,255,0.03)"
                        animate={{ y: [16, 84, 16] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </g>
            )}
            {/* Stand */}
            <rect x="55" y="90" width="30" height="6" rx="1" fill="#333" />
            <rect x="45" y="96" width="50" height="4" rx="2" fill="#2a2a3e" />
            {/* Power indicator */}
            <circle cx="70" cy="94" r="2" fill={active ? "#4488ff" : "#333"} />
        </svg>
    );
}

function WateredPlant({ active }: { active: boolean }) {
    return (
        <svg width="130" height="170" viewBox="0 0 130 170" overflow="visible" fill="none">
            {/* Small faucet/spigot at top-right */}
            <rect x="80" y="8" width="30" height="8" rx="4" fill="#888" stroke="#666" strokeWidth="1" />
            <path d="M95 16 Q100 16 100 22 L100 32 Q100 36 96 36 L94 36 Q90 36 90 32 L90 22 Q90 16 95 16Z" fill="#777" stroke="#666" strokeWidth="1" />
            {/* Faucet handle */}
            <rect x="90" y="4" width="10" height="8" rx="3" fill="#666" />
            <circle cx="95" cy="8" r="2" fill="#555" />

            {/* Pot */}
            <path d="M30 120 L35 152 L85 152 L90 120 Z" fill="#8B4513" stroke="#6B3410" strokeWidth="1.5" />
            <rect x="25" y="115" width="70" height="8" rx="3" fill="#A0522D" stroke="#6B3410" strokeWidth="1" />
            {/* Soil */}
            <ellipse cx="60" cy="120" rx="28" ry="4" fill="#3D2B1F" />

            {/* Stem */}
            <path d="M60 118 Q58 98 60 78" stroke="#228B22" strokeWidth="3" fill="none" />
            {/* Leaves */}
            <path d="M60 105 Q44 95 48 84 Q54 90 60 105" fill="#2E8B2E" />
            <path d="M60 98 Q76 88 72 76 Q66 83 60 98" fill="#32CD32" />
            <path d="M60 88 Q46 80 50 70 Q55 76 60 88" fill="#228B22" />

            {/* Water stream from faucet + effects when active */}
            {active && (
                <g>
                    {/* Main water stream from faucet down to plant */}
                    <motion.path
                        d="M95 36 Q95 60 80 80 Q70 95 65 115"
                        stroke="rgba(100,180,255,0.5)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 0.6 }}
                    />
                    {/* Thinner secondary stream */}
                    <motion.path
                        d="M95 36 Q92 55 78 78 Q68 93 63 112"
                        stroke="rgba(100,180,255,0.3)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    />

                    {/* Water drops along stream */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.ellipse
                            key={`drop-${i}`}
                            cx={95 - i * 8}
                            cy={36}
                            rx={1.5}
                            ry={2.5}
                            fill="rgba(100,180,255,0.7)"
                            animate={{
                                cx: [95 - i * 4, 65 - i * 2],
                                cy: [36 + i * 5, 115],
                                opacity: [0.7, 0],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeIn",
                            }}
                        />
                    ))}

                    {/* Splash on soil/leaves */}
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={`splash-${i}`}
                            cx={62 + i * 4}
                            cy={85}
                            r={1.5}
                            fill="rgba(100,180,255,0.5)"
                            animate={{
                                cy: [90, 82 - i * 3],
                                cx: [62 + i * 4, 55 + i * 8],
                                opacity: [0.6, 0],
                            }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.6 + i * 0.2 }}
                        />
                    ))}

                    {/* New leaf sprouting */}
                    <motion.path
                        d="M60 83 Q78 73 72 60 Q66 70 60 83"
                        fill="#44DD44"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ transformOrigin: "60px 83px" }}
                    />

                    {/* Green glow */}
                    <motion.ellipse
                        cx="60" cy="90" rx="30" ry="35"
                        fill="rgba(100,200,100,0.05)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.08, 0.15, 0.08] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </g>
            )}
        </svg>
    );
}

export default function SpellTargets({ activeSpell, isCasting }: SpellTargetProps) {
    return (
        <div style={{ position: "relative", width: 140, height: 170, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
                {activeSpell === 0 && (
                    <motion.div
                        key="bulb"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <LightBulb active={isCasting} />
                    </motion.div>
                )}
                {activeSpell === 1 && (
                    <motion.div
                        key="tv"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Television active={isCasting} />
                    </motion.div>
                )}
                {activeSpell === 2 && (
                    <motion.div
                        key="water"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <WateredPlant active={isCasting} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
