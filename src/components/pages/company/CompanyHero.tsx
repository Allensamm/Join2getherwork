"use client";
import { motion } from "framer-motion";

export default function CompanyHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 grid-overlay pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium"
        >
          Who we are
        </motion.span>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black text-black leading-none tracking-tight"
          >
            Built in Nigeria.<br />
            Built for the world.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-black/50 text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          Join2GetherWork Limited is a technology company on a single mission — build products that solve real problems, and help businesses everywhere build their digital presence. No hype. No buzzwords.
        </motion.p>
      </div>
    </section>
  );
}
