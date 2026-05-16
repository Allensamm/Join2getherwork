"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { y: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: custom.duration, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className,
  y = 40,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={{ y, duration }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
