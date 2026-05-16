"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const tiers = [
  { title: "Landing Pages", price: "From ₦150,000", timeline: "1 – 2 weeks", desc: "Single page websites focused on one goal. Product launches, waitlist signups, event registrations, sales pages." },
  { title: "Startup & Business Websites", price: "From ₦350,000", timeline: "2 – 4 weeks", desc: "Multi-page websites with custom design. About, services, portfolio, contact, and other pages as needed." },
  { title: "E-commerce Websites", price: "From ₦500,000", timeline: "4 – 8 weeks", desc: "Full online stores with product catalog, shopping cart, payment integration, and order management." },
  { title: "Web Applications", price: "From ₦800,000", timeline: "6 – 12 weeks", desc: "Custom web applications with complex functionality. Dashboards, booking systems, membership platforms, internal tools." },
];

const paras = [
  "We do not publish fixed prices because every project is different. A simple landing page costs less than a full e-commerce store. The price depends on what you need.",
  "But we are completely transparent about our pricing. When we send you a proposal, it breaks down exactly what you are paying for — the hours involved, the specific deliverables, and how we arrived at the total. No mystery. No surprises.",
  "We offer flexible payment terms. Most projects are split into milestones. You pay a deposit to start, then pay as we complete each phase. You are never at risk of paying for work that does not get done.",
];

export default function AgencyPricing() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24 mb-16">
          <div className="md:sticky md:top-32 self-start flex flex-col gap-5">
            <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">Pricing</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
              Transparent and fair pricing
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ originX: 0 }} className="h-0.5 w-10 bg-black rounded-full" />
          </div>
          <div className="flex flex-col gap-5 border-l border-black/[0.06] pl-8 md:pl-12">
            {paras.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-black/60 leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="font-black text-base text-black">{t.title}</span>
              <div>
                <p className="text-2xl font-black text-black">{t.price}</p>
                <p className="text-xs text-black/40 mt-1">{t.timeline}</p>
              </div>
              <p className="text-sm text-black/50 leading-relaxed flex-1">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <p className="text-sm text-black/40 max-w-xl">These are starting prices. Final pricing depends on the specific requirements of your project.</p>
          <Link href="/contact" className="shrink-0 px-7 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200">
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
