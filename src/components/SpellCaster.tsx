"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WandIllustration from "./WandIllustration";
import SpellTargets from "./SpellTargets";

const SPELLS = [
    { word: "Illuminate!", color: "#FFD700" },
    { word: "TV-onus!", color: "#4488ff" },
    { word: "Aguavate!", color: "#66bbff" },
];

const SPELL_DURATION = 3500; // ms per spell

export default function SpellCaster() {
    const [activeSpell, setActiveSpell] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSpell((prev) => (prev + 1) % SPELLS.length);
        }, SPELL_DURATION);
        return () => clearInterval(timer);
    }, []);

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
            <div style={{ flex: "0 0 auto", width: "clamp(280px, 50vw, 420px)" }}>
                <WandIllustration />
            </div>

            {/* Spell target area */}
            <div style={{
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                marginLeft: -40,
            }}>
                {/* Spell word */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={spell.word}
                        initial={{ opacity: 0, y: -10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
                            fontWeight: 700,
                            color: spell.color,
                            fontStyle: "italic",
                            textShadow: `0 0 20px ${spell.color}60, 0 0 40px ${spell.color}30`,
                            marginBottom: 4,
                            whiteSpace: "nowrap",
                        }}
                    >
                        &ldquo;{spell.word}&rdquo;
                    </motion.p>
                </AnimatePresence>

                {/* Target object */}
                <SpellTargets activeSpell={activeSpell} />
            </div>
        </div>
    );
}
