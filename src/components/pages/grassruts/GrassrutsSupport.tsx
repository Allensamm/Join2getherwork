"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const options = [
  {
    title: "Partner with us",
    audience: "For government agencies and NGOs",
    body: "We are actively looking for Local Government Authorities, state agencies, and civil society organisations ready to pilot Grassruts in their communities. Bring us your mandate and your data.",
    cta: "Start a Partnership",
    href: "/contact",
  },
  {
    title: "Invest in us",
    audience: "For impact investors and VCs",
    body: "Grassruts is a scalable civic technology platform built for a continent of 1.4 billion people. If you believe government accountability can be a business, let's talk.",
    cta: "Get Investment Details",
    href: "/contact",
  },
  {
    title: "Spread the word",
    audience: "For every Nigerian who wants better",
    body: "You do not need to be a government or an investor to support Grassruts. Share this page. Tell people this exists. Join the waitlist. Community momentum is what launches movements.",
    cta: "Join the Waitlist",
    href: "#waitlist",
  },
];

export default function GrassrutsSupport() {
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
            Support Grassruts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            There are many ways<br />
            <span className="text-[#4ade80]">to be part of this.</span>
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

        {/* Options */}
        <div className="grid md:grid-cols-3 gap-4">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs text-black/40 font-medium">{opt.audience}</span>
                <h3 className="font-black text-xl text-black leading-snug">{opt.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed">{opt.body}</p>
              </div>
              <Link
                href={opt.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-xs rounded-full hover:bg-black/80 transition-colors duration-200 self-start"
              >
                {opt.cta} <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
