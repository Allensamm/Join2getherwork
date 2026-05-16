"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

const cards = [
  {
    title: "Design Teams",
    description: "Shared asset libraries, comment threads on designs, and version history that never gets lost.",
    color: "from-violet-500/20 to-purple-500/5",
    accent: "#a78bfa",
    icon: "🎨",
    delay: 0,
  },
  {
    title: "Dev Squads",
    description: "GitHub integrations, PR reviews, sprint boards, and CI status — all surfaced where you work.",
    color: "from-cyan-500/20 to-blue-500/5",
    accent: "#06b6d4",
    icon: "💻",
    delay: 0.1,
  },
  {
    title: "Marketing Crews",
    description: "Campaign planning, content calendars, asset approvals, and analytics in one dashboard.",
    color: "from-orange-500/20 to-rose-500/5",
    accent: "#f97316",
    icon: "📣",
    delay: 0.2,
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-32 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-xs tracking-[0.3em] uppercase text-accent-warm font-medium">Built For Everyone</span>
          </FadeIn>
          <TextReveal
            text="Whatever you build, we've got your back."
            as="h2"
            className="text-4xl md:text-6xl font-black text-white mt-4 leading-tight max-w-2xl mx-auto"
            stagger={0.07}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <ParallaxSection key={card.title} speed={0.08}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 border border-white/[0.07] bg-gradient-to-br ${card.color} overflow-hidden cursor-default group`}
              >
                {/* Glow accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 80px ${card.accent}15` }}
                />

                <div className="text-5xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{card.description}</p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                />
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
}
