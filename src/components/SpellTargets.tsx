"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpellTargetProps {
    activeSpell: number; // 0=illuminate, 1=tv, 2=water
}

function LightBulb({ active }: { active: boolean }) {
    return (
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            {/* Glow behind bulb */}
            {active && (
                <motion.circle
                    cx="60" cy="60" r="55"
                    fill="rgba(255,220,80,0.15)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
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
            {/* Light rays */}
            {active && (
                <g>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <motion.line
                            key={angle}
                            x1={60 + Math.cos((angle * Math.PI) / 180) * 45}
                            y1={60 + Math.sin((angle * Math.PI) / 180) * 45}
                            x2={60 + Math.cos((angle * Math.PI) / 180) * 60}
                            y2={60 + Math.sin((angle * Math.PI) / 180) * 60}
                            stroke="#FFD700"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
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
        <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
            {/* Screen glow */}
            {active && (
                <motion.rect
                    x="5" y="5" width="130" height="85" rx="8"
                    fill="rgba(100,180,255,0.08)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
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
                    {/* Screen scan line */}
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

function WaterFaucet({ active }: { active: boolean }) {
    return (
        <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
            {/* Faucet body */}
            <rect x="40" y="20" width="40" height="12" rx="6" fill="#888" stroke="#999" strokeWidth="1" />
            {/* Spout */}
            <path d="M75 26 Q95 26 95 40 L95 55 Q95 60 90 60 L85 60 Q82 60 82 55 L82 42 Q82 36 75 36" fill="#777" stroke="#999" strokeWidth="1" />
            {/* Handle */}
            <rect x="50" y="10" width="20" height="14" rx="4" fill="#666" stroke="#888" strokeWidth="1" />
            <circle cx="60" cy="17" r="3" fill="#555" />
            {/* Water drops / stream */}
            {active && (
                <g>
                    {/* Main stream */}
                    <motion.path
                        d="M88 60 Q88 100 85 130"
                        stroke="rgba(100,180,255,0.6)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.7 }}
                        transition={{ duration: 0.5 }}
                    />
                    {/* Drips */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.ellipse
                            key={i}
                            cx={85 + (i - 2) * 3}
                            cy={130}
                            rx={3 + i * 2}
                            ry={1}
                            fill="rgba(100,180,255,0.3)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 1.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        />
                    ))}
                    {/* Splash particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={`splash-${i}`}
                            cx={85}
                            cy={130}
                            r={1.5}
                            fill="rgba(100,180,255,0.5)"
                            animate={{
                                cx: 85 + (Math.random() - 0.5) * 30,
                                cy: 130 - Math.random() * 15,
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </g>
            )}
            {/* Sink basin hint */}
            <path d="M60 135 Q60 145 75 145 Q100 145 100 135" stroke="#555" strokeWidth="1.5" fill="none" />
        </svg>
    );
}

export default function SpellTargets({ activeSpell }: SpellTargetProps) {
    return (
        <div style={{ position: "relative", width: 140, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
                {activeSpell === 0 && (
                    <motion.div
                        key="bulb"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LightBulb active={true} />
                    </motion.div>
                )}
                {activeSpell === 1 && (
                    <motion.div
                        key="tv"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Television active={true} />
                    </motion.div>
                )}
                {activeSpell === 2 && (
                    <motion.div
                        key="water"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <WaterFaucet active={true} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
