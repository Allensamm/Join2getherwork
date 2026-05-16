"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Text scale: starts very small, grows to full as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.08, 1]);

  // Subtle fade out near the very end so it doesn't linger
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] grid-overlay"
    >
      {/* Sticky container — text stays centered while section scrolls */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.h1
          style={{
            scale,
            opacity,
            fontSize: "clamp(3rem, 12vw, 10rem)",
            lineHeight: 1,
          }}
          className="font-black uppercase tracking-tighter text-black select-none"
        >
          JOIN2GETHERWORK
        </motion.h1>
      </div>
    </section>
  );
}
