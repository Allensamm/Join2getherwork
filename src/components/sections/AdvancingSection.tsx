"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AdvancingSection() {
  return (
    <section className="py-32 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] uppercase text-black/30 font-medium"
        >
          Our flagship product
        </motion.p>

        {/* Big headline */}
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black text-black leading-[0.92] tracking-tight"
          >
            Advancing
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.92] tracking-tight"
            style={{ WebkitTextStroke: "2px #0a0a0a", color: "transparent" }}
          >
            Nigeria
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black text-black leading-[0.92] tracking-tight"
          >
            with technology.
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="h-px bg-black/10 w-full"
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24">
          <div className="flex-1 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-xl text-black/60 leading-relaxed max-w-xl"
            >
              Grassruts is our civic technology platform connecting Nigerian communities directly to their government. Citizens report infrastructure problems. Government gets organised, actionable data. Real issues get resolved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/grassruts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200"
              >
                Explore Grassruts <span>→</span>
              </Link>
              <Link
                href="/grassruts#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 border border-black/20 text-black font-bold text-sm rounded-full hover:border-black/60 transition-colors duration-200"
              >
                Join the Waitlist
              </Link>
            </motion.div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-8 md:min-w-[240px]">
            {[
              { num: "200M+", label: "Nigerians we are building for" },
              { num: "774", label: "Local Government Areas to reach" },
              { num: "3", label: "LGAs already in closed beta" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-3xl font-black text-black">{stat.num}</span>
                <span className="text-xs text-black/40 leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
