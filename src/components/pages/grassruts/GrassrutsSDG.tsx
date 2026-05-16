"use client";

import { motion } from "framer-motion";

const sdgs = [
  {
    number: "SDG 16",
    title: "Peace, Justice, and Strong Institutions",
    body: "Grassruts directly advances Goal 16 by promoting participatory governance, building accountability mechanisms between citizens and public institutions, and creating structured channels for community grievance resolution. When ordinary people can hold institutions accountable through data and transparency, democracy gets stronger.",
    accent: "#4ade80",
  },
  {
    number: "SDG 11",
    title: "Sustainable Cities and Communities",
    body: "By giving communities the tools to identify and escalate infrastructure problems, Grassruts helps cities become more inclusive, safe, resilient, and sustainable. Goal 11 requires active citizen participation in urban governance. Grassruts makes that participation easy, organised, and effective for the first time at scale.",
    accent: "#4ade80",
  },
];

export default function GrassrutsSDG() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium"
          >
            UN Sustainable Development Goals
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            Aligned with global<br />
            <span className="text-[#4ade80]">development goals.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
            className="h-0.5 w-10 bg-[#4ade80] rounded-full"
          />
        </div>

        {/* SDG cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-10 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs px-4 py-1.5 rounded-full bg-[#4ade80]/20 text-[#4ade80] font-bold tracking-widest uppercase">
                  {sdg.number}
                </span>
              </div>
              <h3 className="font-black text-xl text-black leading-snug">{sdg.title}</h3>
              <p className="text-sm text-black/55 leading-relaxed">{sdg.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
