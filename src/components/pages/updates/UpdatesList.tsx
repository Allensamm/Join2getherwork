"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  { date: "May 2025", tag: "Product", title: "GRASSRUTS enters closed beta", desc: "We have onboarded our first 200 users across three local government areas in Lagos. Early signal is strong — communities are already reporting issues.", featured: true },
  { date: "Apr 2025", tag: "Company", title: "Why we're building in public", desc: "Transparency isn't a marketing strategy for us. It's how we stay accountable to the people we are building for.", featured: false },
  { date: "Mar 2025", tag: "Product", title: "SCHULNG: what we learned from 40 school visits", desc: "Before writing a single line of code, we visited 40 Nigerian private schools. Here's what we found.", featured: false },
  { date: "Feb 2025", tag: "Product", title: "Introducing DAATACENTER.io", desc: "Nigerian SMEs are sitting on mountains of data they cannot use. We are building the tool that changes that.", featured: false },
  { date: "Jan 2025", tag: "Company", title: "Join2GetherWork: why we exist", desc: "A note from our founder on what we are doing, why we are doing it, and who we are doing it for.", featured: false },
];

export default function UpdatesList() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-16 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 md:p-12 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full bg-black/10 text-black/60 font-semibold">{featured.tag}</span>
            <span className="text-xs text-black/30">{featured.date}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">{featured.title}</h2>
          <p className="text-black/50 text-base leading-relaxed max-w-2xl">{featured.desc}</p>
          <Link href="/grassruts" className="text-sm font-bold text-black mt-2 hover:opacity-70 transition-opacity">Read more →</Link>
        </motion.div>

        {/* Rest */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between gap-6 h-[240px] hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-black/10 text-black/50 font-semibold">{post.tag}</span>
                  <span className="text-xs text-black/30">{post.date}</span>
                </div>
                <h3 className="font-black text-lg text-black leading-snug">{post.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed line-clamp-2">{post.desc}</p>
              </div>
              <span className="text-sm font-bold text-black">Read more →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
