"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery Call", body: "We start with a conversation. You tell us what you need, who your audience is, what your goals are. We ask questions to fully understand your project before we propose anything. This call is free and takes 30 to 45 minutes." },
  { n: "02", title: "Proposal and Quote", body: "Based on our discovery call, we put together a detailed proposal — exactly what we will build, the timeline, and the total cost. Everything is clear and specific. No vague descriptions. No hidden fees." },
  { n: "03", title: "Contract and Deposit", body: "If you are happy with the proposal, we send a simple contract outlining scope, timeline, and payment terms. You pay a 50% deposit to secure your spot and we get started." },
  { n: "04", title: "Design Phase", body: "We create mockups showing exactly what the final product will look like. You review and give feedback. We refine based on your input. We do not move to development until you are completely happy." },
  { n: "05", title: "Development Phase", body: "With the design approved, we build your website. We write clean code, integrate all the functionality, and keep you updated throughout with regular progress reports." },
  { n: "06", title: "Review and Testing", body: "When development is complete, we do thorough testing, then hand it over to you for review. You test, check all features, and let us know if anything needs adjustment. We fix issues until you are satisfied." },
  { n: "07", title: "Launch", body: "Once you approve, we launch. We handle all the technical details, make sure performance is optimised and security is in place. Your website is now live." },
  { n: "08", title: "Training and Handover", body: "We provide training on how to use your website — updating content, managing orders, checking analytics. We make sure you are comfortable before we consider the project complete." },
  { n: "09", title: "Ongoing Support", body: "Our relationship does not end at launch. We offer ongoing support and maintenance packages. When you need updates, fixes, or new features, we are here." },
];

export default function AgencyProcess() {
  return (
    <section className="py-28 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div className="md:sticky md:top-32 self-start flex flex-col gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium">
            Our Process
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-black text-black leading-tight">
            How we work with clients
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ originX: 0 }} className="h-0.5 w-10 bg-black rounded-full" />
        </div>

        <div className="flex flex-col border-l border-black/10 pl-8 md:pl-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative pb-10 last:pb-0"
            >
              <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-black" />
              <span className="text-xs font-mono text-black/25 tracking-widest">{step.n}</span>
              <h3 className="text-lg font-black text-black mt-0.5 mb-2">{step.title}</h3>
              <p className="text-sm text-black/55 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
