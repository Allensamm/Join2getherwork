"use client";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "Join2getherWork built exactly what we needed for our startup launch. Professional, fast, and they actually listened to what we wanted instead of just doing whatever was easiest.", author: "Chidi O.", role: "Startup Founder, Lagos" },
  { quote: "Finally found a tech company that understands Nigeria. They designed for our actual customers, not some imaginary ideal user. The website works great even on slow connections.", author: "Amina B.", role: "Business Owner, Abuja" },
  { quote: "Clear communication throughout the whole project. I always knew what was happening and they delivered on time. The final product was better than I expected.", author: "Emeka N.", role: "Founder, Port Harcourt" },
];

export default function AgencyTestimonials() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block mb-4">What Clients Say</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            Trusted by startups and businesses
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#e8e8e8] grid-overlay rounded-2xl p-8 flex flex-col justify-between gap-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-black/65 text-sm leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-black text-black text-sm">{t.author}</p>
                <p className="text-xs text-black/40 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
