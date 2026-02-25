"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WandIllustration from "./WandIllustration";
import SpellTargets from "./SpellTargets";

const SPELLS = [
    { word: "Illuminate!", color: "#FFD700" },
    { word: "TV-onus!", color: "#4488ff" },
    { word: "Aguavate!", color: "#66bbff" },
];

const SHOW_OFF_DURATION = 1000;   // show object in OFF state first
const CAST_DURATION = 3000;       // wand fires, object ON
const PAUSE_DURATION = 600;       // pause before next scene

export default function SpellCaster() {
    const [activeSpell, setActiveSpell] = useState(0);
    const [isCasting, setIsCasting] = useState(false);

    const runCycle = useCallback(() => {
        // Phase 1: Object visible but OFF, wand dim
        setIsCasting(false);

        // Phase 2: After a beat, fire the wand and activate the object
        const castTimer = setTimeout(() => {
            setIsCasting(true);

            // Phase 3: After cast duration, stop and move to next
            const stopTimer = setTimeout(() => {
                setIsCasting(false);

                // Phase 4: Brief pause, then next spell
                const nextTimer = setTimeout(() => {
                    setActiveSpell((prev) => (prev + 1) % SPELLS.length);
                }, PAUSE_DURATION);

                return () => clearTimeout(nextTimer);
            }, CAST_DURATION);

            return () => clearTimeout(stopTimer);
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
                <WandIllustration isCasting={isCasting} />

                {/* Spell text — near the boy's head */}
                <div style={{
                    position: "absolute",
                    top: "15%",
                    left: "55%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    zIndex: 20,
                }}>
                    <AnimatePresence mode="wait">
                        {isCasting && (
                            <motion.p
                                key={spell.word}
                                initial={{ opacity: 0, y: 8, scale: 0.7 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.7 }}
                                transition={{ duration: 0.35 }}
                                style={{
                                    fontFamily: "var(--font-cinzel)",
                                    fontSize: "clamp(0.8rem, 1.8vw, 1.2rem)",
                                    fontWeight: 700,
                                    color: spell.color,
                                    fontStyle: "italic",
                                    textShadow: `0 0 16px ${spell.color}80, 0 0 32px ${spell.color}40`,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                &ldquo;{spell.word}&rdquo;
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Spell target — to the right */}
            <div style={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -40,
            }}>
                <SpellTargets activeSpell={activeSpell} isCasting={isCasting} />
            </div>
        </div>
    );
}
