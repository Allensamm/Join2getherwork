"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    heading: "Communities are invisible to government.",
    body: "Across Nigeria's 774 Local Government Areas, millions of citizens live with broken infrastructure — roads that never get fixed, water systems that fail for months, public spaces that crumble quietly. There is no easy, organized way to tell anyone who has the power to change it.",
  },
  {
    heading: "Reports go nowhere.",
    body: "When citizens do try to report problems, their complaints get lost in phone calls, WhatsApp forwards, and bureaucratic channels that were never designed for accountability. There is no tracking. There is no follow-up. There is no record.",
  },
  {
    heading: "Government lacks the data.",
    body: "Local governments and agencies want to serve their communities better but often lack organised, real-time data on where the most urgent needs are. Decisions are made on guesswork instead of ground truth.",
  },
  {
    heading: "Trust has broken down.",
    body: "Decades of unresponsiveness have created a deep divide between citizens and institutions. People have stopped believing that reporting problems leads to anything. That cycle of disengagement makes things worse for everyone. Grassruts is built to break it.",
  },
];

export default function GrassrutsProblem() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.8fr] gap-16 md:gap-28">

        {/* Left — sticky label */}
        <div className="md:sticky md:top-32 md:self-start flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block"
          >
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            A country of problems<br />
            <span className="text-[#4ade80]">waiting to be solved.</span>
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

        {/* Right — paragraphs */}
        <div className="flex flex-col gap-12">
          {paragraphs.map((p, i) => (
            <motion.div
              key={p.heading}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex flex-col gap-3 border-l-2 border-black/[0.06] pl-8"
            >
              <h3 className="font-black text-lg text-black">{p.heading}</h3>
              <p className="text-black/55 leading-relaxed text-base">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
