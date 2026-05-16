"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01", title: "Startup Websites",
    body: "You have an idea and you need a website that tells your story and converts visitors into customers or users. We build startup websites that communicate your value clearly, build trust with your audience, and drive the actions you want people to take.",
    includes: ["Custom design tailored to your brand", "Responsive layout for all devices", "Fast loading optimised for all connections", "SEO setup so people can find you", "Analytics integration", "Content guidance and copywriting support", "Hosting setup and configuration", "Training on how to make updates"],
  },
  {
    number: "02", title: "Business Websites",
    body: "Your business needs a professional online presence. A website that tells potential customers who you are, what you do, and why they should choose you.",
    includes: ["Professional design that reflects your brand", "Clear presentation of your services or products", "Contact forms and inquiry systems", "Location maps and business information", "Testimonials and social proof sections", "Mobile friendly responsive design", "Search engine optimisation", "Easy content management"],
  },
  {
    number: "03", title: "Landing Pages",
    body: "Sometimes you do not need a full website. You need a single focused page that drives one specific action — a product launch, waitlist signup, sales page, or event registration.",
    includes: ["Single page focused on one goal", "Persuasive copy that drives action", "Clear call to action", "Form integration for capturing leads", "Fast loading and mobile optimised", "A/B testing setup if needed", "Analytics and conversion tracking"],
  },
  {
    number: "04", title: "E-commerce Websites",
    body: "We build online stores designed for the Nigerian market with local payment integration and shipping options. Showcases your products, handles payments securely, and provides a smooth buying experience.",
    includes: ["Custom e-commerce design", "Product catalog with search and filtering", "Shopping cart and checkout", "Payment gateway integration (Paystack, Flutterwave)", "Order management system", "Customer accounts and order tracking", "Inventory management", "Sales reporting and analytics"],
  },
  {
    number: "05", title: "Web Applications",
    body: "Sometimes a website is not enough. You need a full web application — a customer dashboard, booking system, internal tool, membership platform, or custom software solution.",
    includes: ["Custom application architecture", "User authentication and accounts", "Database design and implementation", "Admin dashboard for management", "API development for integrations", "Responsive design for all devices", "Security best practices", "Documentation and training"],
  },
  {
    number: "06", title: "Portfolio Websites",
    body: "We build portfolio websites for photographers, designers, artists, writers, and other creatives who need their work to speak for itself and impress potential clients.",
    includes: ["Gallery and portfolio layouts", "Project case studies", "About and contact pages", "Fast image loading and optimisation", "Responsive design for all devices", "Easy to update content management", "Social media integration"],
  },
  {
    number: "07", title: "Booking and Appointment Systems",
    body: "A booking system that shows your availability, lets customers choose their preferred time, sends confirmations and reminders, and integrates with your calendar.",
    includes: ["Online booking interface", "Calendar and availability management", "Automated confirmations and reminders", "Payment integration for deposits", "Customer management", "Staff scheduling if needed", "Mobile friendly design"],
  },
  {
    number: "08", title: "Membership and Community Platforms",
    body: "A platform where members can access exclusive content, connect with each other, and engage with your brand — with subscriptions, access controls, and community features.",
    includes: ["Member registration and login", "Content access controls", "Subscription and payment integration", "Member profiles and directories", "Community features and forums", "Admin dashboard for management", "Email integration"],
  },
];

export default function AgencyServices() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium block mb-4">
            Our Services
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            What we can build for you
          </motion.h2>
        </div>

        <div className="flex flex-col gap-2">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="rounded-2xl border border-black/10 overflow-hidden hover:border-black/25 transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 md:px-10 py-5 gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-black/20 shrink-0">{svc.number}</span>
                  <span className="font-bold text-black text-base md:text-lg">{svc.title}</span>
                </div>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="text-black/30 text-2xl shrink-0">+</motion.span>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="px-6 md:px-10 pb-8 pt-2 border-t border-black/10">
                      <div className="grid md:grid-cols-2 gap-8 mt-4">
                        <p className="text-black/60 text-sm leading-relaxed">{svc.body}</p>
                        <ul className="flex flex-col gap-2">
                          {svc.includes.map((inc) => (
                            <li key={inc} className="flex items-center gap-2 text-sm text-black/55">
                              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
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
