"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  { title: "Frontend Engineer", type: "Full-time · Remote", product: "All Products", desc: "You will build the interfaces that millions of Nigerians use. We care about performance, accessibility, and simplicity above all else. React, Next.js, TypeScript." },
  { title: "Backend Engineer", type: "Full-time · Remote", product: "All Products", desc: "Design and build the APIs, databases, and services that power our products. Node.js, PostgreSQL, and a strong understanding of building for low-bandwidth environments." },
  { title: "Product Designer", type: "Full-time · Remote", product: "GRASSRUTS / SCHULNG", desc: "Design experiences for users who may be using a 4-year-old Android phone on 3G. Simplicity is your first constraint. Impact is your goal." },
  { title: "Community & Growth", type: "Full-time · Remote", product: "GRASSRUTS", desc: "Help us grow grassroots adoption across Nigerian communities. You understand how information travels in Nigeria — through WhatsApp, radio, market squares." },
  { title: "Product Manager", type: "Full-time · Remote", product: "DAATACENTER.io", desc: "Define what gets built and why. You are obsessed with the Nigerian SME and understand their daily reality better than anyone." },
];

export default function CareersRoles() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-black text-black mb-10">
          Open roles
        </motion.h2>

        <div className="flex flex-col gap-2">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-black/10 overflow-hidden cursor-pointer hover:border-black/30 transition-colors duration-200"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                  <span className="font-bold text-black text-base">{role.title}</span>
                  <span className="text-xs text-black/40">{role.type}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#e8e8e8] text-black/50 self-start md:self-auto">{role.product}</span>
                </div>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="text-black/30 text-xl shrink-0">+</motion.span>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 flex flex-col md:flex-row gap-6 items-start border-t border-black/10 pt-5">
                      <p className="text-black/60 text-sm leading-relaxed flex-1">{role.desc}</p>
                      <a href="/contact" className="shrink-0 px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-black/80 transition-colors duration-200">
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
