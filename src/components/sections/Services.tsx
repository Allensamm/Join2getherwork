"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";

const services = [
  {
    number: "01",
    title: "Collaborative Workspace",
    description: "Shared documents, whiteboards, and project boards — all in one place. Real-time co-editing with zero lag.",
    tags: ["Docs", "Boards", "Whiteboard"],
    gradient: "from-violet-600 to-purple-900",
  },
  {
    number: "02",
    title: "Smart Task Management",
    description: "AI-powered task assignment, deadline tracking, and workload balancing that actually works.",
    tags: ["AI Assign", "Deadlines", "Sprints"],
    gradient: "from-cyan-600 to-blue-900",
  },
  {
    number: "03",
    title: "Integrated Communications",
    description: "Video calls, async voice, threaded chat, and status updates — all in context of your work.",
    tags: ["Video", "Chat", "Async"],
    gradient: "from-orange-600 to-rose-900",
  },
  {
    number: "04",
    title: "Analytics & Insights",
    description: "Understand how your team works. Spot bottlenecks, celebrate wins, optimize constantly.",
    tags: ["Reports", "Heatmaps", "KPIs"],
    gradient: "from-green-600 to-teal-900",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Services</span>
            </FadeIn>
            <TextReveal
              text="Everything your team needs."
              as="h2"
              className="text-4xl md:text-6xl font-black text-white mt-4 leading-tight"
              stagger={0.08}
            />
          </div>
          <FadeIn delay={0.2} className="md:max-w-xs">
            <p className="text-white/40 leading-relaxed">
              A full suite of tools designed to eliminate friction and amplify output.
            </p>
          </FadeIn>
        </div>

        {/* Services list */}
        <div className="space-y-1">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              layout
              onClick={() => setActive(i === active ? -1 : i)}
              className="cursor-pointer rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-6 md:px-10 py-6 gap-6">
                <div className="flex items-center gap-6 flex-1">
                  <span className="text-sm font-mono text-white/20 shrink-0">{svc.number}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{svc.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/40 text-2xl font-light shrink-0"
                >
                  +
                </motion.div>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`px-6 md:px-10 pb-8 bg-gradient-to-br ${svc.gradient} bg-opacity-10`}>
                      <div className="h-px bg-white/10 mb-6" />
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <p className="text-white/60 leading-relaxed flex-1">{svc.description}</p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {svc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
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
