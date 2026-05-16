"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CompanyValues() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
            Want to build<br />with us?
          </h2>
          <p className="text-black/50 leading-relaxed">
            We are always looking for people who care more about impact than hype. If that sounds like you, we want to hear from you.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="flex gap-4 flex-wrap">
          <Link href="/careers" className="px-7 py-4 rounded-full bg-black text-white font-bold text-sm hover:bg-black/80 transition-colors duration-200">
            See Open Roles
          </Link>
          <Link href="/contact" className="px-7 py-4 rounded-full border border-black/20 text-black font-bold text-sm hover:border-black transition-colors duration-200">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
