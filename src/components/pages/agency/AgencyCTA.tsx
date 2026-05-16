"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function AgencyCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section ref={ref} className="py-16 px-6 md:px-16 grid-overlay">
      <motion.div style={{ scale }} className="max-w-6xl mx-auto rounded-3xl bg-black p-12 md:p-20 text-center flex flex-col items-center gap-8">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-black text-white leading-tight">
          Ready to build<br />your website?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-white/50 text-lg max-w-xl leading-relaxed">
          Tell us about your project. We will get back to you within 24 hours with initial thoughts and next steps.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:opacity-90 transition-opacity">
            Start Your Project
          </Link>
          <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold text-sm rounded-full hover:border-white/50 transition-colors">
            Schedule a Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
