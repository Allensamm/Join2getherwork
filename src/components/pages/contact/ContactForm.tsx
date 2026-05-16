"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const reasons = ["General enquiry", "Partnership", "Press", "Careers", "Product feedback"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-20 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase text-black/30 font-medium">Email us directly</p>
            <a href="mailto:hello@join2getherwork.com" className="text-lg font-bold text-black hover:text-black/60 transition-colors duration-200">
              hello@join2getherwork.com
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase text-black/30 font-medium">Based in</p>
            <p className="text-base font-bold text-black">Lagos, Nigeria</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-3">
            <p className="text-xs tracking-widest uppercase text-black/30 font-medium">Follow along</p>
            {["Twitter / X", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-sm font-bold text-black/50 hover:text-black transition-colors duration-200">{s} →</a>
            ))}
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center gap-4 text-center py-20">
              <span className="text-5xl">✓</span>
              <h3 className="text-2xl font-black text-black">Message received.</h3>
              <p className="text-black/50">We will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="bg-[#e8e8e8] grid-overlay rounded-xl px-5 py-4 text-sm text-black placeholder:text-black/30 outline-none border border-transparent focus:border-black/20 transition-colors" />
                <input required type="email" placeholder="Email address" className="bg-[#e8e8e8] grid-overlay rounded-xl px-5 py-4 text-sm text-black placeholder:text-black/30 outline-none border border-transparent focus:border-black/20 transition-colors" />
              </div>

              <select className="bg-[#e8e8e8] grid-overlay rounded-xl px-5 py-4 text-sm text-black/60 outline-none border border-transparent focus:border-black/20 transition-colors">
                {reasons.map((r) => <option key={r}>{r}</option>)}
              </select>

              <textarea required rows={5} placeholder="Your message" className="bg-[#e8e8e8] grid-overlay rounded-xl px-5 py-4 text-sm text-black placeholder:text-black/30 outline-none border border-transparent focus:border-black/20 transition-colors resize-none" />

              <button type="submit" className="self-start px-8 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200">
                Send message
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
