"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GrassrutsHero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 px-6 md:px-16 pt-40 grid-overlay">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="text-xs px-4 py-1.5 rounded-full bg-[#4ade80]/20 text-[#4ade80] font-bold tracking-widest uppercase">
            Product
          </span>
          <span className="text-xs text-black/30 font-medium tracking-widest uppercase">Civic Technology</span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-black text-black leading-[0.9] tracking-tight"
          >
            Grassruts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-black text-[#4ade80]"
          >
            The root of change.
          </motion.p>
        </div>

        {/* Divider + body */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="h-px bg-black/10 w-full"
        />

        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-black/55 leading-relaxed max-w-xl flex-1"
          >
            A civic technology platform connecting Nigerian communities directly to their government. Report infrastructure problems. Track real-time progress. Hold institutions accountable. Built for the 200 million Nigerians who deserve better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#waitlist"
              className="px-8 py-4 bg-[#4ade80] text-black font-bold text-sm rounded-full hover:opacity-90 transition-opacity"
            >
              Join the Waitlist
            </Link>
            <Link
              href="#solution"
              className="px-8 py-4 border border-black/20 text-black font-bold text-sm rounded-full hover:border-black/60 transition-colors"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
