"use client";
import { motion } from "framer-motion";

const pillars = [
  { label: "Founded", value: "2024", desc: "Born out of frustration with technology that ignores ordinary people." },
  { label: "Based in", value: "Nigeria", desc: "Lagos-founded, building for all 36 states and beyond." },
  { label: "Products", value: "4", desc: "Four products in development, each targeting a real and urgent problem." },
  { label: "Mission", value: "Simple", desc: "Can technology make life a little less hard? That is the only question we ask." },
];

export default function CompanyMission() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-black/10 mb-16 overflow-hidden">
          <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="h-full bg-black" />
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between h-[220px]"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-black/30 font-medium">{p.label}</span>
              <div>
                <p className="text-3xl font-black text-black mb-2">{p.value}</p>
                <p className="text-sm text-black/50 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
