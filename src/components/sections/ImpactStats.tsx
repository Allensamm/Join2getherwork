"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { number: 200, suffix: "M+", label: "Nigerians we are building for", desc: "Every product we ship is designed for the everyday Nigerian — not Silicon Valley." },
  { number: 774, suffix: "",   label: "Local Government Areas to serve", desc: "From Badagry to Maiduguri, no community is too small or too far." },
  { number: null, symbol: "∞", label: "Problems waiting to be solved", desc: "We are not running out of mission. Nigeria is full of problems worth fixing." },
];

export default function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">

        {/* Top rule */}
        <div className="h-px bg-black/10 mb-16 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={inView ? { x: "0%" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-black"
          />
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Number */}
              <div className="text-6xl md:text-7xl font-black text-black leading-none">
                {stat.number !== null ? (
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2.2} />
                ) : (
                  <span>{stat.symbol}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-base font-bold text-black leading-snug">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-sm text-black/45 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-black/10 mt-16 overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={inView ? { x: "0%" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-black"
          />
        </div>

      </div>
    </section>
  );
}
