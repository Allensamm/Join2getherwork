"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { title: "Grassruts Platform Design", type: "Civic Technology Platform", desc: "Complete UI/UX design for a civic technology platform with over 30 screens including dashboards, maps, reporting flows, and user management." },
  { title: "Join2getherWork Website", type: "Company Website", desc: "Our own company website designed to showcase our products and services with clear messaging and professional design." },
];

export default function AgencyPortfolio() {
  return (
    <section id="work" className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block mb-4">Our Work</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">Projects we have built</motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col gap-4 h-[280px] justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <span className="text-xs px-3 py-1 rounded-full bg-black/10 text-black/50 font-medium">{p.type}</span>
                <h3 className="text-xl font-black text-black mt-4 mb-2">{p.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-black/55 text-sm leading-relaxed max-w-xl">
            As we complete more client projects, we will add them here. Want to be featured? Start a project with us.
          </p>
          <Link href="/contact" className="shrink-0 px-7 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-colors duration-200">
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
