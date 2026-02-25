"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagicReveal from "@/components/MagicReveal";
import WandIllustration from "@/components/WandIllustration";

const CSSParticles = dynamic(() => import("@/components/CSSParticles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CSSParticles />

      <main className="relative z-10">
        {/* ===== HERO ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
          {/* Radial bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,27,78,0.3)_0%,_transparent_70%)]" />

          {/* Slow rotating ring */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full border border-[var(--gold)]/[0.06]"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <WandIllustration />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <p
                className="text-[var(--purple-light)] tracking-[0.4em] uppercase text-[10px] mb-3"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Forged in code & resin
              </p>
              <h1
                className="text-shimmer text-5xl md:text-7xl lg:text-8xl font-bold"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                The Wizard Wand
              </h1>
              <p
                className="mt-4 text-[var(--foreground)]/50 text-lg md:text-xl max-w-md mx-auto"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                A real, hand-crafted wand. 3D printed. Hand-painted. One of a kind.
              </p>
            </motion.div>

            {/* Price + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <p
                className="text-4xl md:text-5xl font-bold text-[var(--gold-light)]"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                $39
              </p>
              <motion.button
                className="relative px-12 py-4 text-sm md:text-base uppercase tracking-[0.25em] rounded-full overflow-hidden cursor-pointer"
                style={{ fontFamily: "var(--font-cinzel)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Button glow bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[#fff] to-[var(--gold)] opacity-0 hover:opacity-30 transition-opacity duration-500" />
                <span className="relative z-10 text-[#0a0515] font-semibold">
                  Pre-Order Now
                </span>
              </motion.button>
              <p
                className="text-[var(--foreground)]/30 text-xs"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Free shipping — Ships in 2-3 weeks
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="w-[1px] h-6 bg-gradient-to-b from-[var(--gold)]/40 to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              />
            </motion.div>
          </div>
        </section>

        {/* ===== SPECS BAR ===== */}
        <section className="py-12 border-y border-[var(--gold)]/[0.08]">
          <MagicReveal>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
              {[
                { label: "Material", value: "PLA+ Resin" },
                { label: "Length", value: '12"' },
                { label: "Finish", value: "Hand-Painted" },
                { label: "Core", value: "Weighted" },
              ].map((spec) => (
                <div key={spec.label}>
                  <p
                    className="text-lg md:text-xl text-[var(--gold-light)]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {spec.value}
                  </p>
                  <p
                    className="text-[var(--foreground)]/30 text-xs uppercase tracking-widest mt-1"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>
          </MagicReveal>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "✦",
                title: "3D Printed",
                desc: "Designed in CAD. Printed layer by layer with precision.",
              },
              {
                icon: "✋",
                title: "Hand-Finished",
                desc: "Sanded, primed, painted, and sealed by hand.",
              },
              {
                icon: "⚡",
                title: "Weighted Core",
                desc: "Balanced weight for a satisfying feel. Not a toy.",
              },
              {
                icon: "◈",
                title: "One of a Kind",
                desc: "No two are exactly alike. Your wand chooses you.",
              },
            ].map((feat, i) => (
              <MagicReveal key={feat.title} delay={i * 0.08}>
                <motion.div
                  className="text-center p-8 rounded-2xl border border-[var(--gold)]/[0.06] bg-[rgba(45,27,78,0.08)] hover:border-[var(--gold)]/15 transition-all duration-500"
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                >
                  <span className="text-2xl text-[var(--gold)] block mb-3">
                    {feat.icon}
                  </span>
                  <h3
                    className="text-base text-[var(--gold-light)] mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-[var(--foreground)]/40 text-sm"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    {feat.desc}
                  </p>
                </motion.div>
              </MagicReveal>
            ))}
          </div>
        </section>

        <div className="magic-divider max-w-sm mx-auto" />

        {/* ===== THE STORY (short) ===== */}
        <section className="py-24 px-6 text-center">
          <MagicReveal>
            <p
              className="text-[var(--purple-light)] tracking-[0.3em] uppercase text-[10px] mb-4"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Origin
            </p>
          </MagicReveal>
          <MagicReveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--gold)" }}
            >
              From Keyboard to Workshop
            </h2>
          </MagicReveal>
          <MagicReveal delay={0.2}>
            <div
              className="max-w-xl mx-auto text-[var(--foreground)]/50 text-base md:text-lg leading-relaxed space-y-4"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <p>
                I&apos;m a software engineer who got tired of only building digital
                things. I wanted to create something I could hold.
              </p>
              <p>
                So I bought a 3D printer, failed a dozen times, and eventually
                forged something that felt real — a wand, born from code and
                resin, designed to make anyone feel like a wizard.
              </p>
            </div>
          </MagicReveal>
          <MagicReveal delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--gold)]/20" />
              <span className="text-[var(--gold)]/20 text-sm">✦</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--gold)]/20" />
            </div>
          </MagicReveal>
        </section>

        <div className="magic-divider max-w-sm mx-auto" />

        {/* ===== QUOTE ===== */}
        <section className="py-24 px-6 text-center">
          <MagicReveal>
            <blockquote
              className="text-2xl md:text-3xl max-w-2xl mx-auto leading-snug"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--gold)" }}
            >
              &ldquo;The line between technology and magic has never been
              thinner.&rdquo;
            </blockquote>
          </MagicReveal>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section className="py-24 px-6 text-center">
          <MagicReveal>
            <h2
              className="text-shimmer text-3xl md:text-5xl mb-3"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Claim Your Wand
            </h2>
            <p
              className="text-[var(--foreground)]/40 text-base mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              First batch. Limited run. Each one unique.
            </p>
            <p
              className="text-3xl md:text-4xl font-bold text-[var(--gold-light)] mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              $39
            </p>
            <motion.button
              className="relative px-14 py-5 text-base uppercase tracking-[0.25em] rounded-full overflow-hidden cursor-pointer"
              style={{ fontFamily: "var(--font-cinzel)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] opacity-90" />
              <span className="relative z-10 text-[#0a0515] font-semibold">
                Pre-Order Now
              </span>
            </motion.button>
            <p
              className="text-[var(--foreground)]/25 text-xs mt-4"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Free shipping — Ships in 2-3 weeks
            </p>
          </MagicReveal>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 px-6 text-center border-t border-[var(--gold)]/[0.06]">
          <p
            className="text-[var(--foreground)]/15 text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Designed & crafted by a home wizard
          </p>
        </footer>
      </main>
    </>
  );
}
