"use client";
import { motion } from "framer-motion";

const events = [
  { year: "2024", title: "The idea", desc: "Frustrated by how little technology served ordinary Nigerians, we started asking: what if we actually built for them?" },
  { year: "2024", title: "Company formed", desc: "Join2GetherWork Limited was registered in Nigeria with one mandate — solve real problems." },
  { year: "2025", title: "First products begin", desc: "GRASSRUTS, DAATACENTER.io, SCHULNG, and BUZSKALE enter active development simultaneously." },
  { year: "2025", title: "Building in public", desc: "We open our roadmap and invite our community to help us prioritise what gets built next." },
];

export default function CompanyTimeline() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div className="md:sticky md:top-32 self-start flex flex-col gap-4">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            Our<br />Story
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ originX: 0 }} className="h-0.5 w-10 bg-black rounded-full" />
        </div>

        <div className="flex flex-col border-l border-black/10 pl-8 md:pl-12">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pb-12 last:pb-0"
            >
              <div className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-black" />
              <span className="text-xs tracking-widest uppercase text-black/30 font-medium">{ev.year}</span>
              <h3 className="text-xl font-black text-black mt-1 mb-2">{ev.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{ev.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
