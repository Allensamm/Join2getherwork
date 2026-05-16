"use client";
import { motion } from "framer-motion";

const perks = [
  { title: "Remote-first", desc: "Work from anywhere in the world. We don't believe great work is tied to a location." },
  { title: "Real impact", desc: "Every line of code you write goes into products used by real people with real problems." },
  { title: "Grow fast", desc: "Small team means you own big things. Your decisions ship. Your work matters." },
  { title: "Equity included", desc: "Early team members share in what we build. If the company wins, you win." },
];

export default function CareersPerks() {
  return (
    <section className="py-20 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-black text-black mb-10">
          Why join us
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-4">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between h-[220px]"
            >
              <div>
                <p className="font-black text-lg text-black mb-1">{p.title}</p>
                <p className="text-sm text-black/50 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
