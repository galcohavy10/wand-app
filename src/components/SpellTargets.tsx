"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpellTargetProps {
    activeSpell: number; // 0=illuminate, 1=tv, 2=water
    isCasting: boolean;
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

function WateredPlant({ active }: { active: boolean }) {
    return (
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            {/* Pot */}
            <path d="M35 120 L40 150 L80 150 L85 120 Z" fill="#8B4513" stroke="#6B3410" strokeWidth="1.5" />
            <rect x="30" y="115" width="60" height="8" rx="3" fill="#A0522D" stroke="#6B3410" strokeWidth="1" />
            {/* Soil */}
            <ellipse cx="60" cy="120" rx="25" ry="4" fill="#3D2B1F" />

            {/* Stem */}
            <path d="M60 120 Q58 100 60 80" stroke="#228B22" strokeWidth="3" fill="none" />

            {/* Leaves - base state */}
            <path d="M60 105 Q45 95 50 85 Q55 90 60 105" fill="#2E8B2E" />
            <path d="M60 100 Q75 90 70 78 Q65 85 60 100" fill="#32CD32" />
            <path d="M60 90 Q48 82 52 72 Q56 78 60 90" fill="#228B22" />

            {/* Growing leaves + water when active */}
            {active && (
                <g>
                    {/* New sprouting leaf */}
                    <motion.path
                        d="M60 85 Q78 75 72 62 Q66 72 60 85"
                        fill="#44DD44"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: "60px 85px" }}
                    />

                    {/* Water drops falling */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.ellipse
                            key={`drop-${i}`}
                            cx={50 + i * 6}
                            cy={40}
                            rx={2}
                            ry={3}
                            fill="rgba(100,180,255,0.7)"
                            animate={{
                                cy: [30 + i * 3, 120],
                                opacity: [0.8, 0],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.25,
                                ease: "easeIn",
                            }}
                        />
                    ))}

                    {/* Splash on leaves */}
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={`splash-${i}`}
                            cx={55 + i * 5}
                            cy={85}
                            r={1.5}
                            fill="rgba(100,180,255,0.5)"
                            animate={{
                                cy: [85, 80 - i * 3],
                                cx: [55 + i * 5, 50 + i * 8],
                                opacity: [0.7, 0],
                                scale: [1, 0.3],
                            }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.5 + i * 0.2 }}
                        />
                    ))}

                    {/* Glow around plant */}
                    <motion.ellipse
                        cx="60" cy="90" rx="35" ry="40"
                        fill="rgba(100,200,100,0.06)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </g>
            )}
        </svg>
    );
}

export default function SpellTargets({ activeSpell, isCasting }: SpellTargetProps) {
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
                        <LightBulb active={isCasting} />
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
                        <Television active={isCasting} />
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
                        <WateredPlant active={isCasting} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
