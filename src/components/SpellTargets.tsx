"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpellTargetProps {
    activeSpell: number;
    isCasting: boolean;
}

function LightBulb({ active }: { active: boolean }) {
    return (
        <svg width="120" height="150" viewBox="0 0 120 150" overflow="visible" fill="none">
            {active && (
                <motion.circle cx="60" cy="55" r="50"
                    fill="rgba(255,220,80,0.1)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
            <path d="M40 65 Q40 28 60 18 Q80 28 80 65 Q80 80 72 85 L48 85 Q40 80 40 65Z"
                fill={active ? "#FFF8DC" : "#2a2040"} stroke={active ? "#f0d878" : "#555"} strokeWidth="2" />
            {active && (
                <motion.path d="M44 63 Q44 32 60 22 Q76 32 76 63 Q76 77 70 82 L50 82 Q44 77 44 63Z"
                    fill="rgba(255,240,150,0.35)" initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }} />
            )}
            <path d="M52 60 Q56 45 60 60 Q64 45 68 60" stroke={active ? "#FFD700" : "#444"} strokeWidth="2" fill="none" />
            <rect x="48" y="85" width="24" height="7" rx="2" fill="#888" />
            <rect x="50" y="92" width="20" height="5" rx="2" fill="#777" />
            <rect x="52" y="97" width="16" height="5" rx="3" fill="#666" />
            {active && (
                <g>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                        <motion.line key={a}
                            x1={60 + Math.cos((a * Math.PI) / 180) * 40} y1={55 + Math.sin((a * Math.PI) / 180) * 40}
                            x2={60 + Math.cos((a * Math.PI) / 180) * 50} y2={55 + Math.sin((a * Math.PI) / 180) * 50}
                            stroke="#FFD700" strokeWidth="2" strokeLinecap="round"
                            initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: a * 0.002 }} />
                    ))}
                </g>
            )}
        </svg>
    );
}

function Television({ active }: { active: boolean }) {
    return (
        <svg width="130" height="110" viewBox="0 0 130 110" overflow="visible" fill="none">
            {active && (
                <motion.rect x="2" y="2" width="126" height="82" rx="8"
                    fill="rgba(100,180,255,0.06)" initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
            )}
            <rect x="8" y="8" width="114" height="76" rx="5" fill="#1a1a2e" stroke={active ? "#4488ff" : "#333"} strokeWidth="2" />
            <rect x="14" y="14" width="102" height="64" rx="3" fill={active ? "#0a1628" : "#111"} />
            {active && (
                <g>
                    <motion.rect x="18" y="20" width="55" height="7" rx="2" fill="#4488ff"
                        initial={{ opacity: 0, width: 0 }} animate={{ opacity: 0.7, width: 55 }} transition={{ duration: 0.4 }} />
                    <motion.rect x="18" y="33" width="36" height="5" rx="2" fill="#66aaff"
                        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 0.4, delay: 0.15 }} />
                    <motion.rect x="18" y="44" width="74" height="28" rx="3" fill="rgba(68,136,255,0.12)"
                        initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
                    <motion.rect x="14" y="14" width="102" height="2" fill="rgba(255,255,255,0.03)"
                        animate={{ y: [14, 78, 14] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                </g>
            )}
            <rect x="50" y="84" width="30" height="5" rx="1" fill="#333" />
            <rect x="42" y="89" width="46" height="4" rx="2" fill="#2a2a3e" />
            <circle cx="65" cy="88" r="1.5" fill={active ? "#4488ff" : "#333"} />
        </svg>
    );
}

function WateredPlant({ active }: { active: boolean }) {
    return (
        <svg width="100" height="160" viewBox="0 0 100 160" overflow="visible" fill="none">
            {/* Faucet centered above plant */}
            <rect x="35" y="4" width="30" height="7" rx="3.5" fill="#888" stroke="#666" strokeWidth="1" />
            <path d="M48 11 Q52 11 52 16 L52 24 Q52 27 49 27 L47 27 Q44 27 44 24 L44 16 Q44 11 48 11Z" fill="#777" stroke="#666" strokeWidth="1" />
            <rect x="43" y="0" width="10" height="7" rx="3" fill="#666" />
            <circle cx="48" cy="4" r="2" fill="#555" />

            {/* Pot directly below faucet */}
            <path d="M25 115 L30 148 L70 148 L75 115 Z" fill="#8B4513" stroke="#6B3410" strokeWidth="1.5" />
            <rect x="20" y="110" width="60" height="7" rx="3" fill="#A0522D" stroke="#6B3410" strokeWidth="1" />
            <ellipse cx="50" cy="115" rx="25" ry="4" fill="#3D2B1F" />

            {/* Stem + leaves */}
            <path d="M50 112 Q48 92 50 72" stroke="#228B22" strokeWidth="3" fill="none" />
            <path d="M50 100 Q35 90 39 79 Q44 85 50 100" fill="#2E8B2E" />
            <path d="M50 93 Q65 83 61 71 Q56 78 50 93" fill="#32CD32" />
            <path d="M50 84 Q37 76 41 66 Q46 72 50 84" fill="#228B22" />

            {active && (
                <g>
                    {/* Water stream straight down from faucet to plant */}
                    <motion.line x1="48" y1="27" x2="48" y2="72"
                        stroke="rgba(100,190,255,0.5)" strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 0.4 }} />
                    <motion.line x1="48" y1="27" x2="48" y2="72"
                        stroke="rgba(100,190,255,0.25)" strokeWidth="1.5" strokeLinecap="round"
                        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.1 }} />

                    {/* Drops falling straight down */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.ellipse key={`d-${i}`} cx={48} cy={27} rx={1.5} ry={2.5}
                            fill="rgba(100,190,255,0.7)"
                            animate={{ cy: [27, 110], opacity: [0.8, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.22, ease: "easeIn" }} />
                    ))}

                    {/* Splash on leaves */}
                    {[0, 1, 2].map((i) => (
                        <motion.circle key={`s-${i}`} cx={48 + (i - 1) * 5} cy={75} r={1.5}
                            fill="rgba(100,190,255,0.4)"
                            animate={{ cy: [75, 68 - i * 3], cx: [48 + (i - 1) * 5, 42 + i * 7], opacity: [0.6, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 + i * 0.15 }} />
                    ))}

                    {/* New tiny leaf sprouting at top */}
                    <motion.path d="M52 72 Q62 60 57 52 Q54 60 52 72" fill="#55ee55"
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }}
                        transition={{ duration: 1, delay: 0.5 }} style={{ transformOrigin: "52px 72px" }} />
                    <motion.path d="M48 76 Q38 66 42 58 Q46 64 48 76" fill="#44cc44"
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ duration: 1, delay: 0.8 }} style={{ transformOrigin: "48px 76px" }} />

                    <motion.ellipse cx="50" cy="85" rx="28" ry="30" fill="rgba(100,200,100,0.04)"
                        initial={{ opacity: 0 }} animate={{ opacity: [0.05, 0.12, 0.05] }}
                        transition={{ duration: 2, repeat: Infinity }} />
                </g>
            )}
        </svg>
    );
}

function BoomBox({ active }: { active: boolean }) {
    return (
        <svg width="140" height="110" viewBox="0 0 140 110" overflow="visible" fill="none">
            {/* Body */}
            <rect x="10" y="20" width="120" height="70" rx="8" fill="#1a1a1a" stroke={active ? "#ff6644" : "#333"} strokeWidth="2" />
            {/* Handle */}
            <path d="M40 20 Q40 8 70 8 Q100 8 100 20" stroke="#444" strokeWidth="3" fill="none" />
            {/* Left speaker */}
            <circle cx="40" cy="55" r="20" fill="#222" stroke="#444" strokeWidth="1.5" />
            <circle cx="40" cy="55" r="12" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
            <circle cx="40" cy="55" r="5" fill="#333" />
            {/* Right speaker */}
            <circle cx="100" cy="55" r="20" fill="#222" stroke="#444" strokeWidth="1.5" />
            <circle cx="100" cy="55" r="12" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
            <circle cx="100" cy="55" r="5" fill="#333" />
            {/* Center display */}
            <rect x="58" y="35" width="24" height="12" rx="2" fill={active ? "#1a0a00" : "#111"} stroke="#444" strokeWidth="1" />
            {/* Buttons */}
            <circle cx="63" cy="60" r="3" fill={active ? "#ff6644" : "#333"} />
            <circle cx="77" cy="60" r="3" fill="#333" />
            {/* Cassette slot */}
            <rect x="60" y="68" width="20" height="8" rx="2" fill="#111" stroke="#333" strokeWidth="0.5" />

            {active && (
                <g>
                    {/* Display glow */}
                    <motion.rect x="60" y="37" width="20" height="8" rx="1" fill="#ff6644"
                        initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }} />
                    {/* Speaker vibration - left */}
                    <motion.circle cx="40" cy="55" r="20" fill="none" stroke="rgba(255,102,68,0.2)" strokeWidth="1"
                        animate={{ r: [20, 24, 20], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 0.3, repeat: Infinity }} />
                    {/* Speaker vibration - right */}
                    <motion.circle cx="100" cy="55" r="20" fill="none" stroke="rgba(255,102,68,0.2)" strokeWidth="1"
                        animate={{ r: [20, 24, 20], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }} />
                    {/* Music notes floating up */}
                    {["♪", "♫", "♪", "♫"].map((note, i) => (
                        <motion.text key={i}
                            x={25 + i * 28} y={20}
                            fill={i % 2 === 0 ? "#ff6644" : "#ff8866"}
                            fontSize="14" fontWeight="bold"
                            animate={{ y: [20, -15], x: [25 + i * 28, 20 + i * 30 + (i % 2 === 0 ? -8 : 8)], opacity: [0.8, 0], rotate: [0, i % 2 === 0 ? -20 : 20] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.35 }}>
                            {note}
                        </motion.text>
                    ))}
                    {/* Bass pulse glow */}
                    <motion.rect x="5" y="15" width="130" height="80" rx="12"
                        fill="none" stroke="rgba(255,102,68,0.08)" strokeWidth="2"
                        animate={{ scale: [1, 1.04, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 0.5, repeat: Infinity }} />
                </g>
            )}
        </svg>
    );
}

function CeilingFan({ active }: { active: boolean }) {
    return (
        <svg width="120" height="130" viewBox="0 0 120 130" overflow="visible" fill="none">
            {/* Ceiling mount */}
            <rect x="50" y="0" width="20" height="10" rx="3" fill="#888" />
            {/* Rod */}
            <rect x="57" y="10" width="6" height="25" fill="#777" />
            {/* Motor housing */}
            <ellipse cx="60" cy="42" rx="14" ry="8" fill="#666" stroke="#555" strokeWidth="1" />
            {/* Fan blades */}
            {active ? (
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "60px 42px" }}
                >
                    <ellipse cx="60" cy="20" rx="8" ry="18" fill="#8B7355" opacity="0.7" />
                    <ellipse cx="82" cy="42" rx="18" ry="8" fill="#8B7355" opacity="0.7" />
                    <ellipse cx="60" cy="64" rx="8" ry="18" fill="#8B7355" opacity="0.7" />
                    <ellipse cx="38" cy="42" rx="18" ry="8" fill="#8B7355" opacity="0.7" />
                </motion.g>
            ) : (
                <g>
                    <ellipse cx="60" cy="20" rx="8" ry="18" fill="#8B7355" opacity="0.5" />
                    <ellipse cx="82" cy="42" rx="18" ry="8" fill="#8B7355" opacity="0.5" />
                    <ellipse cx="60" cy="64" rx="8" ry="18" fill="#8B7355" opacity="0.5" />
                    <ellipse cx="38" cy="42" rx="18" ry="8" fill="#8B7355" opacity="0.5" />
                </g>
            )}
            {/* Center cap */}
            <circle cx="60" cy="42" r="5" fill="#999" stroke="#777" strokeWidth="1" />

            {active && (
                <g>
                    {/* Wind lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.path key={i}
                            d={`M${30 + i * 16} 85 Q${35 + i * 16} 80 ${40 + i * 16} 85 Q${45 + i * 16} 90 ${50 + i * 16} 85`}
                            stroke="rgba(136,221,170,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"
                            animate={{ y: [0, 25, 50], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }} />
                    ))}
                    {/* Subtle glow */}
                    <motion.circle cx="60" cy="42" r="30" fill="rgba(136,221,170,0.04)"
                        animate={{ r: [28, 35, 28], opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 1, repeat: Infinity }} />
                </g>
            )}
        </svg>
    );
}

export default function SpellTargets({ activeSpell, isCasting }: SpellTargetProps) {
    const targets = [
        <LightBulb key="b" active={isCasting} />,
        <Television key="t" active={isCasting} />,
        <WateredPlant key="w" active={isCasting} />,
        <BoomBox key="bb" active={isCasting} />,
        <CeilingFan key="f" active={isCasting} />,
    ];

    return (
        <div style={{ position: "relative", width: 140, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSpell}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    {targets[activeSpell]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
