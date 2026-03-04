"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WandIllustration from "./WandIllustration";
import SpellTargets from "./SpellTargets";

const SPELLS = [
    { word: "Illuminate!", color: "#FFD700" },
    { word: "TV-onus!", color: "#4488ff" },
    { word: "Aguavate!", color: "#66ddff" },
    { word: "Hocus Unfocus!", color: "#ff6644" },
    { word: "Breezio!", color: "#88ddaa" },
];

const SHOW_OFF_DURATION = 900;
const CAST_DURATION = 3200;
const SPELL_HIT_DELAY = 150; // pause before spell takes effect

export default function SpellCaster() {
    const [activeSpell, setActiveSpell] = useState(0);
    const [isCasting, setIsCasting] = useState(false);
    const [isObjectActive, setIsObjectActive] = useState(false);

    const runCycle = useCallback(() => {
        setIsCasting(false);
        setIsObjectActive(false);

        const castTimer = setTimeout(() => {
            setIsCasting(true);

            // Object activates after a short delay
            const hitTimer = setTimeout(() => {
                setIsObjectActive(true);
            }, SPELL_HIT_DELAY);

            // After cast, go straight to next spell (object stays ON during exit)
            const nextTimer = setTimeout(() => {
                setActiveSpell((prev) => (prev + 1) % SPELLS.length);
            }, CAST_DURATION);

            return () => { clearTimeout(nextTimer); clearTimeout(hitTimer); };
        }, SHOW_OFF_DURATION);

        return () => clearTimeout(castTimer);
    }, []);

    useEffect(() => {
        const cleanup = runCycle();
        return cleanup;
    }, [activeSpell, runCycle]);

    const spell = SPELLS[activeSpell];

    return (
        <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            width: "100%",
            maxWidth: 700,
        }}>
            {/* Boy with wand */}
            <div style={{ flex: "0 0 auto", width: "clamp(280px, 50vw, 420px)", position: "relative" }}>
                <WandIllustration isCasting={isCasting} spellIndex={activeSpell} />

                {/* Spell text — dramatic entrance near the boy */}
                <div style={{
                    position: "absolute",
                    top: "12%",
                    left: "55%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    zIndex: 20,
                }}>
                    <AnimatePresence mode="wait">
                        {isCasting && (
                            <motion.div
                                key={spell.word}
                                initial={{ opacity: 0, scale: 0.3, y: 15 }}
                                animate={{
                                    opacity: 1,
                                    scale: [0.3, 1.15, 1],
                                    y: [15, -3, 0],
                                }}
                                exit={{ opacity: 0, scale: 0.6, y: -10 }}
                                transition={{
                                    duration: 0.5,
                                    scale: { duration: 0.6, times: [0, 0.6, 1] },
                                    y: { duration: 0.6, times: [0, 0.6, 1] },
                                }}
                                style={{ position: "relative" }}
                            >
                                {/* Glow backdrop */}
                                <motion.div
                                    style={{
                                        position: "absolute",
                                        inset: -12,
                                        borderRadius: 20,
                                        background: `radial-gradient(ellipse, ${spell.color}25 0%, transparent 70%)`,
                                        zIndex: -1,
                                    }}
                                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.1, 0.95] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <p style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(0.85rem, 2vw, 1.3rem)",
                                    fontWeight: 800,
                                    color: spell.color,
                                    fontStyle: "italic",
                                    textShadow: `0 0 10px ${spell.color}, 0 0 25px ${spell.color}90, 0 0 50px ${spell.color}50`,
                                    whiteSpace: "nowrap",
                                    letterSpacing: "0.05em",
                                }}>
                                    &ldquo;{spell.word}&rdquo;
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Spell target */}
            <div style={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -40,
            }}>
                <SpellTargets activeSpell={activeSpell} isCasting={isObjectActive} />
            </div>
        </div>
    );
}
