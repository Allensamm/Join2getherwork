"use client";

import FadeIn from "@/components/ui/FadeIn";
import CountUp from "@/components/ui/CountUp";
import SlideIn from "@/components/ui/SlideIn";

const stats = [
  { value: 50000, suffix: "+", label: "Active Teams", delay: 0 },
  { value: 99, suffix: "%", label: "Uptime SLA", delay: 0.1 },
  { value: 120, suffix: "+", label: "Countries", delay: 0.2 },
  { value: 4, suffix: ".9★", label: "Avg Rating", delay: 0.3 },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Horizontal rule */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <SlideIn key={stat.label} direction="up" delay={stat.delay} className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl md:text-6xl font-black text-white">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
              </span>
              <span className="text-sm text-white/40 tracking-wide">{stat.label}</span>
            </SlideIn>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16" />
      </div>
    </section>
  );
}
