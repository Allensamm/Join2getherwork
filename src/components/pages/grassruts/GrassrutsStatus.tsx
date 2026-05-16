"use client";

import { motion } from "framer-motion";

const columns = [
  {
    label: "Completed",
    dot: "bg-[#4ade80]",
    items: [
      "Product design and user research",
      "Core infrastructure architecture",
      "Beta testing framework",
      "Government partnerships in Lagos State",
      "Community onboarding playbook",
      "Multi-language interface (EN, HA, YO, IG)",
    ],
  },
  {
    label: "In Progress",
    dot: "bg-black/30",
    items: [
      "iOS and Android app development",
      "Government official portal",
      "Community validation algorithm",
      "Offline-first sync engine",
      "Anonymous reporting module",
      "Impact analytics dashboard",
    ],
  },
  {
    label: "Next Steps",
    dot: "bg-black/[0.12]",
    items: [
      "Full public launch in Lagos",
      "Expand to 3 additional states",
      "Federal government integration",
      "Open API for third-party developers",
      "Community leader programme",
      "Pilot in West Africa (Ghana, Kenya)",
    ],
  },
];

export default function GrassrutsStatus() {
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
            Current Status
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            Where we are<br />
            <span className="text-[#4ade80]">right now.</span>
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

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, ci) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                <span className="font-black text-sm text-black">{col.label}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: ci * 0.08 + i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-black/60 leading-snug"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${col.dot}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
