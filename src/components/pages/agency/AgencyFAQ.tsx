"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How much does a website cost?", a: "Pricing depends on what you need. A simple landing page starts around ₦150,000. A full business website starts around ₦350,000. E-commerce and web applications cost more depending on complexity. Contact us with details about your project and we will provide a specific quote." },
  { q: "How long does it take to build a website?", a: "Timeline depends on the project scope. Landing pages take 1 to 2 weeks. Business websites take 2 to 4 weeks. E-commerce sites take 4 to 8 weeks. Complex web applications can take 2 to 3 months. We give you a specific timeline in our proposal." },
  { q: "Do I need to pay everything upfront?", a: "No. We typically ask for 50% deposit to start and 50% on completion. For larger projects, we can break it into more milestones so you pay as we deliver." },
  { q: "Will I be able to update the website myself?", a: "Yes. We set up content management systems that let you make updates without knowing how to code. We also provide training so you are comfortable making changes on your own." },
  { q: "What if I am not happy with the design?", a: "We include revision rounds in every project. You give feedback and we refine until you are happy. We do not move forward until you approve each stage." },
  { q: "Do you provide hosting?", a: "We do not provide hosting directly, but we help you set up hosting with reliable providers and handle all the configuration. Hosting costs are separate and paid directly to the provider." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. We offer monthly maintenance packages that include updates, backups, security monitoring, and support." },
  { q: "Can you help with content and copywriting?", a: "Yes. We provide content guidance and can help with copywriting if needed — website copy, product descriptions, or other content as part of your project." },
  { q: "Do you work with clients outside Nigeria?", a: "Yes. We work with clients anywhere in the world. Payment can be arranged in foreign currency if needed." },
  { q: "What technologies do you use?", a: "We use modern web technologies including React, Next.js, TypeScript, and Tailwind CSS for most projects. We choose the best technology for each specific project based on your requirements." },
  { q: "Can you redesign my existing website?", a: "Yes. We do website redesigns as well as building from scratch. We can take your existing site and give it a fresh look and improved functionality." },
  { q: "How do I get started?", a: "Contact us through our website or email hello@join2getherwork.com. Tell us about your project and we will schedule a discovery call to discuss your needs." },
];

export default function AgencyFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block mb-4">Common Questions</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="rounded-2xl border border-black/10 overflow-hidden hover:border-black/25 transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5 gap-4">
                <span className="font-bold text-black text-sm md:text-base">{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="text-black/30 text-xl shrink-0">+</motion.span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="px-6 pb-6 border-t border-black/10 pt-4">
                      <p className="text-black/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
