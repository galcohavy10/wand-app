"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Script from "next/script";
import MagicReveal from "@/components/MagicReveal";
import WandIllustration from "@/components/WandIllustration";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id'?: string;
        'publishable-key'?: string;
        'client-reference-id'?: string;
        'customer-email'?: string;
      };
    }
  }
}

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

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 pt-20">
            {/* Left side: Boy pointing wand to the right */}
            <div className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl flex justify-center md:justify-end relative">
              <WandIllustration />
            </div>

            {/* Right side: Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-8 md:pt-0"
            >
              <p
                className="text-[var(--purple-light)] tracking-[0.4em] uppercase text-xs md:text-sm mb-4 font-semibold"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Forged in Resin
              </p>
              <h1
                className="text-shimmer text-6xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                The Wizard Wand
              </h1>
              <p
                className="text-[var(--foreground)]/70 text-lg md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed font-light mt-4"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Cast real spells with a real wand.
              </p>

              {/* Product Info & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 flex flex-col gap-6 items-center md:items-start z-20 relative bg-[rgba(45,27,78,0.2)] p-8 rounded-2xl border border-[var(--gold)]/20 shadow-[0_0_30px_rgba(201,168,76,0.05)] w-full max-w-md"
              >
                <div className="w-full flex justify-between items-center border-b border-[var(--gold)]/10 pb-4 mb-2">
                  <span className="text-[var(--foreground)]/60 uppercase tracking-widest text-xs font-semibold" style={{ fontFamily: "var(--font-cinzel)" }}>Initial Batch</span>
                  <p
                    className="text-3xl font-bold text-[var(--gold-light)]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    $39
                  </p>
                </div>

                <div className="w-full flex justify-center">
                  <img
                    src="https://m.media-amazon.com/images/I/615123EN3SL.jpg"
                    alt="Wand Placeholder"
                    className="w-full h-32 object-cover rounded-lg drop-shadow-[0_0_15px_rgba(201,168,76,0.4)] hover:scale-105 transition-transform duration-500 my-4 border border-[var(--gold)]/20"
                  />
                </div>

                <div className="w-full flex flex-col items-center gap-4">
                  {/* Next Script to load stripe component properly */}
                  <Script async src="https://js.stripe.com/v3/buy-button.js" />

                  <stripe-buy-button
                    buy-button-id="prod_U2iltPmfsIBEaE"
                    publishable-key="pk_live_XXXXXXXXXXXXXXXXXXXX"
                  ></stripe-buy-button>

                  <p
                    className="text-[var(--foreground)]/50 text-xs text-center w-full leading-relaxed mt-2"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    <span className="text-[var(--gold)]">Free shipping</span> —
                    Ships in 2-3 weeks
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-[var(--gold)]/50 mb-2">Scroll</span>
            <motion.div
              className="w-[1px] h-12 bg-gradient-to-b from-[var(--gold)] to-transparent"
              animate={{ scaleY: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </section>

        {/* ===== SPECS BAR ===== */}
        <section className="py-16 md:py-20 border-y border-[var(--gold)]/[0.08]">
          <MagicReveal>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center px-6">
              {[
                { label: "Material", value: "PLA+ Resin" },
                { label: "Length", value: '12"' },
                { label: "Finish", value: "Hand-Painted" },
                { label: "Core", value: "Weighted" },
              ].map((spec) => (
                <div key={spec.label} className="flex flex-col items-center gap-2">
                  <p
                    className="text-xl md:text-2xl text-[var(--gold-light)] font-medium"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {spec.value}
                  </p>
                  <p
                    className="text-[var(--foreground)]/40 text-xs md:text-sm uppercase tracking-[0.2em]"
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
        <section className="py-24 md:py-32 px-6">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                  className="flex flex-col items-center text-center p-10 md:p-12 rounded-3xl border border-[var(--gold)]/10 bg-[rgba(45,27,78,0.15)] hover:border-[var(--gold)]/30 transition-all duration-500 hover:bg-[rgba(45,27,78,0.25)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <span className="text-4xl text-[var(--gold)] block mb-6 drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]">
                    {feat.icon}
                  </span>
                  <h3
                    className="text-xl md:text-2xl text-[var(--gold-light)] mb-4 font-semibold tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-[var(--foreground)]/60 text-base md:text-lg leading-relaxed font-light"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    {feat.desc}
                  </p>
                </motion.div>
              </MagicReveal>
            ))}
          </div>
        </section>

        <div className="magic-divider w-full max-w-2xl mx-auto opacity-50" />

        {/* ===== THE STORY (short) ===== */}
        <section className="py-24 md:py-32 px-6 flex flex-col items-center text-center">
          <MagicReveal>
            <p
              className="text-[var(--purple-light)] tracking-[0.4em] uppercase text-sm font-bold mb-6 drop-shadow-[0_0_8px_rgba(179,136,255,0.4)]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Origin
            </p>
          </MagicReveal>
          <MagicReveal delay={0.1}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl mb-12 font-bold w-full max-w-4xl leading-tight text-[var(--gold-light)]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              From Keyboard to Workshop
            </h2>
          </MagicReveal>
          <MagicReveal delay={0.2}>
            <div
              className="w-full max-w-3xl mx-auto flex flex-col gap-8 text-[var(--foreground)]/80 text-xl md:text-2xl leading-loose font-light"
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
            <div className="mt-16 flex items-center justify-center gap-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[var(--gold)]/40" />
              <span className="text-[var(--gold)]/40 text-xl">✦</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[var(--gold)]/40" />
            </div>
          </MagicReveal>
        </section>

        <div className="magic-divider w-full max-w-2xl mx-auto opacity-50" />

        {/* ===== QUOTE ===== */}
        <section className="py-32 px-6 flex flex-col items-center text-center">
          <MagicReveal>
            <blockquote
              className="text-3xl md:text-4xl lg:text-5xl font-bold w-full max-w-5xl mx-auto leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              &ldquo;The line between technology and magic has never been
              thinner.&rdquo;
            </blockquote>
          </MagicReveal>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section className="py-24 md:py-32 px-6 flex flex-col items-center text-center bg-[radial-gradient(ellipse_at_top,_rgba(123,75,179,0.15)_0%,_transparent_70%)] relative">
          <MagicReveal>
            <h2
              className="text-shimmer text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Claim Your Wand
            </h2>
            <p
              className="text-[var(--foreground)]/70 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              First batch. Limited run. Each one unique.
            </p>
            <p
              className="text-5xl md:text-6xl font-bold text-[var(--gold-light)] mb-10 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              $39
            </p>
            <motion.button
              className="relative px-16 py-6 text-lg md:text-xl uppercase tracking-[0.25em] rounded-full overflow-hidden cursor-pointer shadow-[0_0_40px_rgba(201,168,76,0.2)] hover:shadow-[0_0_60px_rgba(201,168,76,0.3)] transition-shadow duration-300 group"
              style={{ fontFamily: "var(--font-cinzel)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[#fff] to-[var(--gold)] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <span className="relative z-10 text-[#0a0515] font-bold">
                Pre-Order Now
              </span>
            </motion.button>
            <p
              className="text-[var(--foreground)]/50 text-sm md:text-base mt-8 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              <span className="text-[var(--gold)] font-bold">Free shipping</span> — Ships in 2-3 weeks
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
