"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagicReveal from "@/components/MagicReveal";
import SpellCaster from "@/components/SpellCaster";

const CHECKOUT_URL = "https://buy.stripe.com/bJeaEWfQx45j34B21zbjW03";

const CSSParticles = dynamic(() => import("@/components/CSSParticles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CSSParticles />

      <main style={{ position: "relative", zIndex: 10 }}>
        {/* ===== HERO ===== */}
        <section style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
        }}>
          {/* Radial bg */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(45,27,78,0.3) 0%, transparent 70%)",
          }} />

          {/* Slow rotating ring */}
          <motion.div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.06)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          />

          <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 48,
            paddingTop: 80,
          }}>
            {/* Spell Caster — boy + animated targets */}
            <SpellCaster />

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              <p style={{
                fontFamily: "var(--font-cinzel)",
                color: "var(--purple-light)",
                textTransform: "uppercase",
                letterSpacing: "0.4em",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: 16,
              }}>
                Forged in Resin
              </p>
              <h1 className="text-shimmer" style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 16,
              }}>
                The Wizard Wand
              </h1>
              <p style={{
                fontFamily: "var(--font-crimson)",
                color: "rgba(232,224,240,0.7)",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                maxWidth: 480,
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                Cast real spells in your home.
              </p>

              {/* Product card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{
                  marginTop: 48,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  alignItems: "center",
                  padding: 32,
                  borderRadius: 16,
                  border: "1px solid rgba(201,168,76,0.15)",
                  background: "rgba(45,27,78,0.15)",
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", paddingBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-cinzel)", color: "rgba(232,224,240,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.65rem", fontWeight: 600 }}>Limited Wands</span>
                  <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.75rem", fontWeight: 700, color: "var(--gold-light)" }}>$49</span>
                </div>

                <motion.a
                  href={CHECKOUT_URL}
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 0",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    borderRadius: 9999,
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "var(--font-cinzel)",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
                    color: "#0a0515",
                    textAlign: "center",
                    textDecoration: "none",
                    boxShadow: "0 0 30px rgba(201,168,76,0.2)",
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Buy Now
                </motion.a>

                <p style={{ fontFamily: "var(--font-crimson)", color: "rgba(232,224,240,0.4)", fontSize: "0.75rem", textAlign: "center" }}>
                  <span style={{ color: "var(--gold)" }}>FREE SHIPPING</span> GLOBAL
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(201,168,76,0.4)", marginBottom: 8 }}>Scroll</span>
            <motion.div
              style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--gold), transparent)", transformOrigin: "top" }}
              animate={{ scaleY: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ===== SPECS BAR ===== */}
        <section style={{ padding: "60px 24px", borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
          <MagicReveal>
            <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", maxWidth: 800, margin: "0 auto" }}>
              {[
                { label: "Material", value: "PLA+ Resin" },
                { label: "Length", value: '12 inch' },
                { label: "Finish", value: "Hand-Painted" },
                { label: "Core", value: "Weighted" },
              ].map((spec) => (
                <div key={spec.label} style={{ textAlign: "center", minWidth: 120 }}>
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.25rem", color: "var(--gold-light)", fontWeight: 500 }}>
                    {spec.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.65rem", color: "rgba(232,224,240,0.35)", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: 4 }}>
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>
          </MagicReveal>
        </section>

        {/* ===== FEATURES ===== */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: "✦", title: "3D Printed", desc: "Designed in CAD. Homemade" },
              { icon: "💥", title: "Cast Spells", desc: "Say spells out loud." },
              { icon: "⚡", title: "Fully Integrated", desc: "Connects to lights, tv, and more." },
            ].map((feat, i) => (
              <MagicReveal key={feat.title} delay={i * 0.08}>
                <div style={{
                  textAlign: "center",
                  padding: "40px 24px",
                  borderRadius: 16,
                  border: "1px solid rgba(201,168,76,0.1)",
                  background: "rgba(45,27,78,0.12)",
                }}>
                  <span style={{ fontSize: "2rem", color: "var(--gold)", display: "block", marginBottom: 16 }}>{feat.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.1rem", color: "var(--gold-light)", marginBottom: 8, fontWeight: 600 }}>{feat.title}</h3>
                  <p style={{ fontFamily: "var(--font-crimson)", fontSize: "0.95rem", color: "rgba(232,224,240,0.5)", lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              </MagicReveal>
            ))}
          </div>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="magic-divider" style={{ maxWidth: 400, margin: "0 auto", opacity: 0.3 }} />

        {/* ===== THE ORIGIN ===== */}
        <section style={{ padding: "100px 24px", textAlign: "center" }}>
          <MagicReveal>
            <p style={{ fontFamily: "var(--font-cinzel)", color: "var(--purple-light)", textTransform: "uppercase", letterSpacing: "0.35em", fontSize: "0.7rem", fontWeight: 700, marginBottom: 20 }}>
              The Origin
            </p>
          </MagicReveal>
          <MagicReveal delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-cinzel)", color: "var(--gold)", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 32 }}>
              From Keyboard to Workshop
            </h2>
          </MagicReveal>
          <MagicReveal delay={0.2}>
            <div style={{ fontFamily: "var(--font-crimson)", color: "rgba(232,224,240,0.6)", fontSize: "1.1rem", lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
              <p style={{ marginBottom: 20 }}>
                I&apos;m a software engineer who got tired of only building digital things. I wanted to create something physical.
              </p>
              <p>
                So I decided to become a wizard. I forged something that felt real. a wand, connected to a microphone, that could cast spells at home.
              </p>
            </div>
          </MagicReveal>
        </section>

        {/* ===== DIVIDER ===== */}
        <div className="magic-divider" style={{ maxWidth: 400, margin: "0 auto", opacity: 0.3 }} />

        {/* ===== QUOTE ===== */}
        <section style={{ padding: "100px 24px", textAlign: "center" }}>
          <MagicReveal>
            <blockquote style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(1.3rem, 4vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.4,
              maxWidth: 680,
              margin: "0 auto",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              &ldquo;Any sufficiently advanced technology is indistinguishable from magic.&rdquo;
            </blockquote>
          </MagicReveal>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section style={{
          padding: "100px 24px",
          textAlign: "center",
          background: "radial-gradient(ellipse at top, rgba(123,75,179,0.12) 0%, transparent 70%)",
        }}>
          <MagicReveal>
            <h2 className="text-shimmer" style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 700, marginBottom: 16 }}>
              Claim Your Wand
            </h2>
            <p style={{ fontFamily: "var(--font-crimson)", color: "rgba(232,224,240,0.55)", fontSize: "1.1rem", marginBottom: 32 }}>
              First batch. Limited run.
            </p>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--gold-light)", marginBottom: 32 }}>
              $49
            </p>
            <motion.a
              href={CHECKOUT_URL}
              style={{
                display: "inline-block",
                padding: "18px 56px",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                borderRadius: 9999,
                cursor: "pointer",
                border: "none",
                fontFamily: "var(--font-cinzel)",
                fontWeight: 700,
                background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
                color: "#0a0515",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(201,168,76,0.2)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Buy Now
            </motion.a>
            <p style={{ fontFamily: "var(--font-cinzel)", color: "rgba(232,224,240,0.35)", fontSize: "0.7rem", marginTop: 24, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              <span style={{ color: "var(--gold)", fontWeight: 700 }}>Free shipping</span> — Ships in 2-3 weeks
            </p>
          </MagicReveal>
        </section>

        {/* ===== FOOTER ===== */}
        <footer style={{ padding: "48px 24px", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.06)" }}>
          <p style={{ fontFamily: "var(--font-cinzel)", color: "rgba(232,224,240,0.15)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>
            Designed & crafted by a home wizard
          </p>
        </footer>
      </main>
    </>
  );
}
