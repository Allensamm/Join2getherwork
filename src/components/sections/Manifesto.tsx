"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "We build products that solve real problems for everyday Nigerians. No hype. No buzzwords. Just tools that make life a little less hard.";

const words = text.split(" ");

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(progress, [start, end], ["#aaaaaa", "#0a0a0a"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-20 grid-overlay"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-2xl md:text-4xl leading-snug text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
