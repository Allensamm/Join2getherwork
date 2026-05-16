"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Join2getherWork Limited is a technology company founded in Nigeria. We build products for people who have been overlooked by technology for too long — and we help businesses and organisations around the world build their digital presence.",
  "We are not building the next social media app. We are not chasing trends. We look at the problems that real people face every single day and ask a simple question: can technology make this better?",
  "Our products are designed for the market woman in Onitsha, the farmer in Kano, the student in Ibadan, and the civil servant in Abuja. Our agency serves founders, businesses, and organisations anywhere in the world who need a team that builds with the same care and precision.",
  "We believe that solving real problems for real people is how you build something that lasts. It is also how you build something that matters.",
];

export default function WhoWeAre() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">
            About us
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">

          {/* Left — sticky heading */}
          <div className="md:sticky md:top-32 self-start flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-black leading-[1.05]"
            >
              who<br />we are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-black/40 font-medium leading-relaxed max-w-[200px]"
            >
              A company with one mission
            </motion.p>

            {/* Decorative accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="h-0.5 w-12 bg-black rounded-full"
            />
          </div>

          {/* Right — paragraphs */}
          <div className="flex flex-col gap-7 border-l border-black/[0.06] pl-8 md:pl-12">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-black/70 text-base md:text-lg leading-[1.8]"
              >
                {para}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
