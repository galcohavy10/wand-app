"use client";

import { useMemo } from "react";

export default function CSSParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${1 + Math.random() * 2}px`,
      color: ["#c9a84c", "#f0d878", "#b388ff", "#7b4bb3", "#ffffff"][
        Math.floor(Math.random() * 5)
      ],
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="sparkle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: `0 0 4px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
