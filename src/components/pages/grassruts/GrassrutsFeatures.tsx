"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Issue Reporting",
    body: "Snap a photo, drop a location pin, write a description. Reporting a community problem takes less than 60 seconds.",
  },
  {
    title: "Real-time Tracking",
    body: "Every report has a live status — from submission through review, action, and resolution. You always know where things stand.",
  },
  {
    title: "Community Feed",
    body: "See what others in your LGA are reporting. Upvote issues you are also experiencing. Collective voice gets louder.",
  },
  {
    title: "Government Portal",
    body: "Officials get a clean, organised dashboard of incoming reports sorted by urgency, location, and issue type. No more chaos.",
  },
  {
    title: "Offline Mode",
    body: "Poor internet connection? Reports are saved locally and sync automatically when your connection returns. No report gets lost.",
  },
  {
    title: "Multi-language Support",
    body: "Available in English, Hausa, Yoruba, and Igbo. Grassruts speaks the language of every Nigerian community.",
  },
  {
    title: "Anonymous Reporting",
    body: "Sensitive issues can be submitted anonymously. We protect reporters while still ensuring accountability where it matters.",
  },
  {
    title: "Impact Analytics",
    body: "Community-level data on resolution rates, response times, and most common issues. Transparency for citizens. Insight for government.",
  },
];

export default function GrassrutsFeatures() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-black text-black leading-tight"
            >
              Built for real Nigeria,<br />not ideal Nigeria.
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/50 text-base leading-relaxed max-w-sm"
          >
            Every feature exists because of a real problem we found when we talked to real Nigerians about what civic engagement actually looks like on the ground.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-black text-sm text-black">{feature.title}</h3>
                <p className="text-xs text-black/55 leading-relaxed">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
