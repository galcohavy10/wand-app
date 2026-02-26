"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Spark {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

let sparkId = 0;

export default function WandCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [sparks, setSparks] = useState<Spark[]>([]);
    const animRef = useRef<number>(0);

    const spawnSparks = useCallback((x: number, y: number) => {
        const newSparks: Spark[] = [];
        const colors = ["#FFD700", "#f0d878", "#fff8dc", "#ff8844", "#ffaa33"];
        for (let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
            const speed = 2 + Math.random() * 4;
            newSparks.push({
                id: sparkId++,
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                life: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
        setSparks((prev) => [...prev, ...newSparks]);
    }, []);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const clickable = target.closest("a, button, [role='button'], input[type='submit']");
            setIsHovering(!!clickable);
        };

        const handleDown = (e: MouseEvent) => {
            setIsClicking(true);
            // Tip position offset (wand tip is to the left of cursor)
            spawnSparks(e.clientX - 16, e.clientY - 4);
        };

        const handleUp = () => setIsClicking(false);

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
        };
    }, [spawnSparks]);

    // Animate sparks
    useEffect(() => {
        const animate = () => {
            setSparks((prev) =>
                prev
                    .map((s) => ({
                        ...s,
                        x: s.x + s.vx,
                        y: s.y + s.vy,
                        vy: s.vy + 0.15,
                        life: s.life - 0.03,
                    }))
                    .filter((s) => s.life > 0)
            );
            animRef.current = requestAnimationFrame(animate);
        };
        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    // Wand rotation: default tilted, hover tilts down more
    const rotation = isHovering ? -15 : -35;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 99999,
            }}
        >
            {/* Sparks */}
            {sparks.map((s) => (
                <div
                    key={s.id}
                    style={{
                        position: "fixed",
                        left: s.x,
                        top: s.y,
                        width: 4 * s.life,
                        height: 4 * s.life,
                        borderRadius: "50%",
                        backgroundColor: s.color,
                        boxShadow: `0 0 ${6 * s.life}px ${s.color}`,
                        opacity: s.life,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}

            {/* Wand SVG */}
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                    position: "fixed",
                    left: pos.x - 20,
                    top: pos.y - 6,
                    transform: `rotate(${rotation}deg) scale(${isClicking ? 0.9 : 1})`,
                    transformOrigin: "30px 30px",
                    transition: "transform 0.15s ease-out",
                    filter: isHovering
                        ? "drop-shadow(0 0 6px rgba(255,215,0,0.6))"
                        : "none",
                }}
            >
                {/* Wand shaft — handle right, tip left */}
                <line x1="34" y1="34" x2="10" y2="10" stroke="#3D2B06" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="34" y1="34" x2="22" y2="22" stroke="#6B4F12" strokeWidth="3" strokeLinecap="round" />
                <line x1="22" y1="22" x2="10" y2="10" stroke="#A07828" strokeWidth="2.5" strokeLinecap="round" />

                {/* Tip glow */}
                <circle cx="8" cy="8" r={isHovering ? 5 : 3.5} fill="#FFD700" opacity={isHovering ? 0.5 : 0.4}>
                    {isHovering && (
                        <animate attributeName="r" values="4;6;4" dur="0.8s" repeatCount="indefinite" />
                    )}
                </circle>
                <circle cx="8" cy="8" r="2" fill="#fff8dc" />

                {/* Sparkle rays on hover */}
                {isHovering && (
                    <>
                        <line x1="8" y1="1" x2="8" y2="4" stroke="#fff" strokeWidth="1.5" opacity="0.8">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.6s" repeatCount="indefinite" />
                        </line>
                        <line x1="1" y1="8" x2="4" y2="8" stroke="#fff" strokeWidth="1.5" opacity="0.8">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.6s" repeatCount="indefinite" begin="0.2s" />
                        </line>
                        <line x1="3" y1="3" x2="5" y2="5" stroke="#fff" strokeWidth="1.5" opacity="0.7">
                            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="0.6s" repeatCount="indefinite" begin="0.1s" />
                        </line>
                        <line x1="3" y1="12" x2="5" y2="10" stroke="#FFD700" strokeWidth="1" opacity="0.5">
                            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="0.8s" repeatCount="indefinite" />
                        </line>
                        <line x1="12" y1="3" x2="10" y2="5" stroke="#FFD700" strokeWidth="1" opacity="0.5">
                            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
                        </line>
                    </>
                )}
            </svg>
        </div>
    );
}
