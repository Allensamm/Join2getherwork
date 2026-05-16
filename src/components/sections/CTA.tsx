"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} id="contact" className="py-32 px-6 md:px-16 relative overflow-hidden">
      <motion.div
        style={{ scale, opacity, background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5))" }}
        className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-1"
      >
        <div className="rounded-[22px] bg-[#050505] px-8 md:px-16 py-20 text-center relative overflow-hidden">
          {/* Internal orb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 100%)",
            }}
          />

          <FadeIn className="mb-3">
            <span className="text-xs tracking-[0.3em] uppercase text-primary-light font-medium">Get Started Today</span>
          </FadeIn>

          <TextReveal
            text="Ready to work together, better?"
            as="h2"
            className="text-4xl md:text-7xl font-black text-white leading-tight mb-6"
            stagger={0.07}
          />

          <FadeIn delay={0.3} className="mb-10">
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Join thousands of teams already building great things together. Free to start. No credit card required.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <motion.a
                  href="#"
                  className="px-10 py-4 rounded-full font-bold text-white text-sm relative overflow-hidden inline-block"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start for Free
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="#"
                  className="px-10 py-4 rounded-full font-bold text-white/70 text-sm border border-white/20 hover:border-white/50 hover:text-white transition-all inline-block"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Demo
                </motion.a>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
