"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const getInitial = (dir: Direction, dist: number) => ({
  x: dir === "left" ? -dist : dir === "right" ? dist : 0,
  y: dir === "up" ? dist : dir === "down" ? -dist : 0,
  opacity: 0,
});

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.8,
  distance = 80,
  className,
}: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction, distance)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
