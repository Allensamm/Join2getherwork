"use client";
import { motion } from "framer-motion";

const paragraphs = [
  "Join2getherWork is a website design and development agency founded in Nigeria. We help startups, small businesses, and organisations around the world build professional digital products that help them reach customers, grow revenue, and achieve their goals.",
  "What makes us different from other agencies is that we are not just designers who make pretty pictures. We are builders. We run our own products. We understand the full journey from idea to launch to growth because we live it every day with our own work.",
  "When you work with us, you get a team that understands what it takes to build something that actually works. Not just something that looks good in a presentation, but something that performs in the real world with real users and real business goals.",
  "We have worked with first-time founders who needed a website to launch their startup. We have worked with established businesses who needed a refresh. We have worked with organisations who needed complex web applications to run their operations. Whatever you need, we can build it.",
];

export default function AgencyIntro() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div className="md:sticky md:top-32 self-start flex flex-col gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">
            Our Agency
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            Professional websites built by people who actually build products
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ originX: 0 }} className="h-0.5 w-10 bg-black rounded-full" />
        </div>

        <div className="flex flex-col gap-6 border-l border-black/[0.06] pl-8 md:pl-12">
          {paragraphs.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-black/65 text-base md:text-lg leading-relaxed">
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
