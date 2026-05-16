"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const container = (delay: number, stagger: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as: Tag = "h2",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container(delay, stagger)}
    >
      <Tag className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
        {words.map((w, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span style={{ display: "inline-block" }} variants={word}>
              {w}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
