"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    checkoutUrl: string;
}

export default function CheckoutModal({ isOpen, onClose, checkoutUrl }: CheckoutModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.75)",
                            backdropFilter: "blur(8px)",
                            zIndex: 10000,
                            cursor: "auto",
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "min(95vw, 500px)",
                            height: "min(90vh, 700px)",
                            background: "#0a0515",
                            borderRadius: 20,
                            border: "1px solid rgba(201,168,76,0.2)",
                            boxShadow: "0 0 80px rgba(201,168,76,0.1), 0 20px 60px rgba(0,0,0,0.5)",
                            zIndex: 10001,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "16px 20px",
                            borderBottom: "1px solid rgba(201,168,76,0.1)",
                        }}>
                            <span style={{
                                fontFamily: "var(--font-cinzel)",
                                fontSize: "0.85rem",
                                color: "var(--gold-light)",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                            }}>
                                ✦ Secure Checkout
                            </span>
                            <button
                                onClick={onClose}
                                style={{
                                    background: "none",
                                    border: "1px solid rgba(232,224,240,0.15)",
                                    color: "rgba(232,224,240,0.5)",
                                    fontSize: "0.8rem",
                                    padding: "6px 14px",
                                    borderRadius: 8,
                                    fontFamily: "var(--font-cinzel)",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                                    e.currentTarget.style.color = "var(--gold-light)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(232,224,240,0.15)";
                                    e.currentTarget.style.color = "rgba(232,224,240,0.5)";
                                }}
                            >
                                Close
                            </button>
                        </div>

                        {/* Stripe iframe */}
                        <iframe
                            src={checkoutUrl}
                            style={{
                                flex: 1,
                                width: "100%",
                                border: "none",
                                background: "#fff",
                                borderRadius: "0 0 20px 20px",
                            }}
                            title="Checkout"
                            allow="payment"
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
