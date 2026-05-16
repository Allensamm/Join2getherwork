"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "We Actually Build Things",
    body: "We are not a design agency that only makes pretty pictures. We are builders. We create our own products. We understand the full process from idea to launch because we do it ourselves every day. When you work with us, you work with people who know what it takes to ship real products.",
  },
  {
    title: "We are more",
    body: "Join2getherWork is not just a product company. We are also a full service website design and development agency. We help startups, small businesses, and organisations across Nigeria and beyond build their digital presence from scratch.",
  },
  {
    title: "We are determined",
    body: "Our agency work is not a side hustle. It is a core part of what we do. The revenue from client projects helps fund our own product development, and the experience we gain from building for clients makes us better at building our own products. Everyone wins.",
  },
  {
    title: "Building for founders",
    body: "We have built websites for founders launching their first startup, small business owners who need to reach more customers, organisations that need professional online presence, and companies that want custom web applications to run their operations.",
  },
];

const whatWeBuild = [
  "Startup websites and landing pages",
  "Business websites and company profiles",
  "E-commerce stores and online shops",
  "Web applications and dashboards",
  "Portfolio websites for creatives",
  "Booking and appointment systems",
  "Membership and community platforms",
  "Custom digital tools and internal systems",
];

export default function AgencySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each card owns 1 slot; the last slot is pure dwell time for the final card.
  // slots = cards.length + 1 so the last card holds for a full viewport.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const slots = cards.length + 1;
    const idx = Math.min(cards.length - 1, Math.floor(v * slots));
    setActiveIndex(idx);
  });

  return (
    <>
      {/* ── PART 1: Sticky card-swap scroll section ── */}
      <section
        ref={containerRef}
        className="relative grid-overlay"
        style={{ height: `${(cards.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col px-6 md:px-16 pt-24 pb-10">
          <div className="max-w-6xl mx-auto w-full flex flex-col flex-1">

            <p className="text-sm text-black/40 font-medium mb-10">
              Join2getherwork as a website Design company
            </p>

            <div className="flex-1 flex flex-col items-center">
              <p className="text-sm font-semibold text-black/50">What makes us different</p>
              <div className="w-px bg-black/20" style={{ height: "60px", flexShrink: 0 }} />

              {/* Single card slot — only ONE card is in the DOM at a time */}
              <div className="relative w-full max-w-sm" style={{ height: "340px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -36 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col gap-6"
                  >
                    <h3 className="font-black text-xl text-black text-center leading-snug">
                      {cards[activeIndex].title}
                    </h3>
                    <p className="text-sm text-black/55 leading-relaxed text-center">
                      {cards[activeIndex].body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PART 2: What We Build — starts after sticky section ends ── */}
      <section className="py-28 px-6 md:px-16 grid-overlay">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">

          <div className="flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-black text-black leading-tight"
            >
              What we<br />build
            </motion.h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ originX: 0 }}
              className="h-0.5 w-10 bg-black rounded-full"
            />
          </div>

          <div className="flex flex-col gap-8 border-l border-black/[0.06] pl-8 md:pl-12">
            <ul className="flex flex-col gap-3">
              {whatWeBuild.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-center gap-3 text-black/70 text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-black/55 leading-relaxed text-base"
            >
              Every project we take on gets the same attention and care we put into our own products. We do not do template work. We do not cut corners. We build custom solutions designed specifically for your needs and your audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/agency"
                className="inline-flex items-center gap-2 px-7 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200"
              >
                See Our Agency Services <span>→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
