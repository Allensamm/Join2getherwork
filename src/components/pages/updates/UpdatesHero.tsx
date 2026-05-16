"use client";
import { motion } from "framer-motion";

export default function UpdatesHero() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-16 grid-overlay pt-32">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">
          Updates
        </motion.span>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl font-black text-black leading-none tracking-tight">
            What we're<br />
            building.
          </motion.h1>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="h-px w-full bg-black/10 mt-4" />
      </div>
    </section>
  );
}
