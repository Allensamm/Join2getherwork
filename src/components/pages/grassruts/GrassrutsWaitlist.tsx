"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GrassrutsWaitlist() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="waitlist" className="py-16 px-6 md:px-16 grid-overlay">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-3xl bg-black p-12 md:p-20 flex flex-col items-center text-center gap-10"
      >
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-xs tracking-[0.35em] uppercase text-white/30 font-medium">Join the Waitlist</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Be first when<br />
            <span className="text-[#4ade80]">Grassruts launches.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Enter your phone number and we will notify you the moment Grassruts is available in your area. No spam. Just one message when it is time.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-medium text-sm">+234</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="800 000 0000"
                  required
                  className="w-full pl-16 pr-4 py-4 bg-white/10 border border-white/10 text-white placeholder-white/20 rounded-full text-sm font-medium focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#4ade80] text-black font-bold text-sm rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-4xl">✓</span>
              <p className="text-[#4ade80] font-black text-lg">You are on the list.</p>
              <p className="text-white/40 text-sm">We will reach you as soon as Grassruts launches in your area.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-white/20 text-xs">
          By joining you agree to receive one SMS notification about the Grassruts launch. No marketing. No spam.
        </p>
      </motion.div>
    </section>
  );
}
