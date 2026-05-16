"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Design for Everyone",
    body: "Our products work for people with slow internet, old phones, and limited data. If your grandmother cannot use it, we have not done our job. Simplicity is not optional.",
  },
  {
    title: "Solve Real Problems",
    body: "We do not build products because the technology is cool. We build products because there is a problem that needs solving. If it does not make someone's life easier, we do not build it.",
  },
  {
    title: "Build to Last",
    body: "We are not building to flip. We are building to serve. Every product we create is designed to outlive us and keep working for generations. This is infrastructure, not a startup game.",
  },
];

export default function Philosophy() {
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
            Values
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </motion.div>

        {/* Four-column layout — same grid as expanded products */}
        <div className="grid md:grid-cols-4 gap-4 items-start">

          {/* Col 1 — sticky heading */}
          <div className="md:sticky md:top-32 self-start flex flex-col gap-6 pr-4">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-black text-black leading-[1.1]"
            >
              Our<br />Philosophy
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="h-0.5 w-10 bg-black rounded-full"
            />
          </div>

          {/* Cols 2–4 — cards matching product card width */}
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between h-[400px] hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="font-black text-xl text-black leading-tight">
                {card.title}
              </span>
              <p className="text-black/50 text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
