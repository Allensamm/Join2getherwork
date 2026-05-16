"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AgencyHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 grid-overlay pt-28">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">
          Agency
        </motion.span>

        <div style={{ overflow: "hidden" }}>
          <motion.h1 initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl font-black text-black leading-none tracking-tight">
            Website Design<br /><span>Agency.</span>
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-black/50 text-lg md:text-xl leading-relaxed max-w-2xl">
          We design and build websites that help startups and businesses grow — wherever in the world you are building. Custom solutions. Fair prices. Quality you can trust.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="flex flex-wrap gap-4">
          <Link href="/contact" className="px-8 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200">
            Start Your Project
          </Link>
          <a href="#work" className="px-8 py-4 border border-black/20 text-black font-bold text-sm rounded-full hover:border-black transition-colors duration-200">
            See Our Work
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="h-px w-full bg-black/10 mt-4" />
      </div>
    </section>
  );
}
