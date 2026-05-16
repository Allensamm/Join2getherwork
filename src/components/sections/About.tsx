"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SlideIn from "@/components/ui/SlideIn";
import TextReveal from "@/components/ui/TextReveal";

const pillars = [
  { icon: "⚡", title: "Real-time Sync", desc: "Every update, file, and message synced instantly across your entire team." },
  { icon: "🔒", title: "Enterprise Security", desc: "Bank-grade encryption and granular access controls for peace of mind." },
  { icon: "🌍", title: "Remote-First", desc: "Built for distributed teams across every timezone and continent." },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="about" className="relative py-32 px-6 md:px-16 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <FadeIn className="mb-6">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-light font-medium">About Us</span>
        </FadeIn>

        {/* Heading */}
        <TextReveal
          text="We believe great work happens when great people connect."
          as="h2"
          className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl"
          stagger={0.06}
        />

        {/* Animated divider */}
        <div className="my-10 h-px bg-white/5 overflow-hidden">
          <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                Join2GetherWork was born from a simple frustration: too many tools, too many tabs, and too much time lost switching between them. We built a unified workspace so teams of any size can focus on what actually matters.
              </p>
              <p>
                From solo freelancers to enterprise squads — our platform adapts to you, not the other way around.
              </p>
            </div>
          </SlideIn>

          {/* Pillars */}
          <div className="grid gap-5">
            {pillars.map((p, i) => (
              <SlideIn key={p.title} direction="right" delay={i * 0.12}>
                <div className="glass rounded-2xl p-5 flex gap-4 hover:border-white/20 transition-all duration-300 group">
                  <div className="text-3xl shrink-0">{p.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-gradient transition-all">{p.title}</h3>
                    <p className="text-sm text-white/40">{p.desc}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
