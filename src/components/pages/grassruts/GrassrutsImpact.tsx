"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "200M+", label: "Nigerians we are building for", color: "text-black" },
  { num: "774", label: "Local Government Areas to reach across Nigeria", color: "text-[#4ade80]" },
  { num: "1,000+", label: "Early sign-ups before public launch", color: "text-black" },
  { num: "3", label: "Local Government Areas already in our closed beta", color: "text-[#4ade80]" },
];

export default function GrassrutsImpact() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            The numbers behind<br />
            <span className="text-[#4ade80]">the mission.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
            className="h-0.5 w-10 bg-[#4ade80] rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-black/55 leading-relaxed text-base"
          >
            Grassruts is not a social experiment. It is a platform being built with clear targets, measured progress, and a commitment to accountability at every level — including our own.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-px bg-black/[0.06] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white grid-overlay p-10 md:p-14 flex flex-col gap-3"
            >
              <span className={`text-5xl md:text-6xl font-black leading-none ${stat.color}`}>
                {stat.num}
              </span>
              <span className="text-sm text-black/50 leading-snug max-w-xs">{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
