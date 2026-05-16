"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create your account",
    body: "Download the Grassruts app and sign up in under two minutes. Choose your community manually or let GPS find your Local Government Area automatically.",
  },
  {
    number: "02",
    title: "Spot an issue",
    body: "See a broken road? A flooded drainage? A failed streetlight? Open the app, snap a photo, drop a pin on the map, and write a short description of what you found.",
  },
  {
    number: "03",
    title: "Submit your report",
    body: "Your report is automatically categorised by issue type and location, then routed directly to the responsible government agency or local authority.",
  },
  {
    number: "04",
    title: "Community validates",
    body: "Neighbours can upvote your report, add their own photos, or confirm they are experiencing the same problem. Verified reports get priority attention.",
  },
  {
    number: "05",
    title: "Track in real time",
    body: "Follow your report through every stage — Received, Under Review, In Progress, and Resolved. Every status update comes with a notification directly to your phone.",
  },
  {
    number: "06",
    title: "See the change",
    body: "When an issue is resolved, the community gets notified. Photos of the fix are uploaded. The cycle closes and trust is built — one resolved problem at a time.",
  },
];

export default function GrassrutsSolution() {
  return (
    <section id="solution" className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* Top */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:flex-1 flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium"
            >
              The Solution
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-black text-black leading-tight"
            >
              A direct line between<br />
              <span className="text-[#4ade80]">citizens and government.</span>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:flex-1 text-black/55 leading-relaxed text-base self-end"
          >
            Grassruts is a mobile and web platform that gives every Nigerian a structured, trackable, and dignified way to raise community issues to the people responsible for fixing them. We built it to work on slow connections, in local languages, and for people who have never trusted a tech app before.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl font-black text-[#4ade80]">{step.number}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-black text-base text-black">{step.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
