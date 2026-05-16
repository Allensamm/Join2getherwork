"use client";
import { motion } from "framer-motion";

const reasons = [
  { title: "We Build Our Own Products", body: "We are not just an agency that builds for clients. We build and run our own products like Grassruts. This means we understand the full picture. We know what works and what does not. When you hire us, you get that experience applied to your project." },
  { title: "We Build for Real Users", body: "We build products for underserved markets where constraints are real — slow connections, limited data, budget-conscious users. That thinking shapes everything we build for clients too. We do not design for imaginary ideal users. We design for real ones." },
  { title: "We Do Not Use Templates", body: "Every website we build is custom designed and developed for that specific client. We do not buy templates and slap your logo on them. We write real code and create real designs tailored to your specific needs." },
  { title: "We Care About Results", body: "A beautiful website that does not convert is a waste of money. We design with your business goals in mind. Whether that is getting signups, making sales, or building your brand, every decision we make is aimed at helping you achieve your goals." },
  { title: "We Communicate Clearly", body: "You will never wonder what is happening with your project. We provide regular updates, respond to messages quickly, and explain technical concepts in plain language. No jargon. No disappearing for weeks." },
  { title: "We Deliver On Time", body: "When we give you a timeline, we stick to it. We do not overpromise and underdeliver. We plan carefully, communicate proactively if anything changes, and deliver when we say we will." },
  { title: "We Charge Fair Prices", body: "We are not the cheapest option. But we are one of the best values. Our prices reflect the quality of work we deliver. No hidden fees. No surprise charges. What we quote is what you pay." },
  { title: "We Support You After Launch", body: "Our relationship does not end when your website goes live. We offer ongoing support and maintenance. We are here when you need updates, fixes, or improvements long after we finish building." },
];

export default function AgencyWhyUs() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block mb-4">
              Why Join2getherWork
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight max-w-xl">
              What makes our agency different
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between h-[280px] hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="font-black text-base text-black leading-snug">{r.title}</span>
              <p className="text-sm text-black/50 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
