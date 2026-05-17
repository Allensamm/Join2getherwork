"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "grassruts",
    name: "GRASSRUTS",
    status: "IN DEVELOPMENT",
    description:
      "A civic technology platform that lets Nigerian communities collectively report infrastructure problems to government. When 50 people from the same area report the same issue, the government gets automatically notified. The problem stays visible until citizens confirm it is fixed.",
    tags: ["Civic Tech", "Community Reporting", "Government Alerts", "Infrastructure", "Mobile App", "Open Accountability"],
  },
  {
    id: "daata",
    name: "DAATACENTER.io",
    status: "IN DEVELOPMENT",
    description:
      "A centralised data intelligence platform built for Nigerian businesses. Collect, organise, and act on structured data without needing a dedicated data team. Built for speed and simplicity.",
    tags: ["Data Tools", "Business Intelligence", "No-Code", "Analytics", "Nigeria SMEs", "Dashboard"],
  },
  {
    id: "schulng",
    name: "SCHULNG",
    status: "IN DEVELOPMENT",
    description:
      "A school management and learning platform designed for Nigerian private schools. Handles admissions, fee payments, timetables, parent communication, and student performance — all in one place.",
    tags: ["EdTech", "School Management", "Parent Portal", "Fee Payments", "Nigeria Schools", "Learning"],
  },
  {
    id: "buzskale",
    name: "BUZSKALE",
    status: "IN DEVELOPMENT",
    description:
      "A growth platform for Nigerian micro and small businesses. From invoicing and inventory to customer tracking and social selling — Buzskale gives small business owners the tools to scale without the complexity.",
    tags: ["SME Tools", "Invoicing", "Inventory", "Customer CRM", "Social Selling", "Scale"],
  },
];

/* ── individual product card ── */
function ProductCard({
  product,
  rotate = 0,
  className = "",
  onLearnMore,
}: {
  product: (typeof products)[0];
  rotate?: number;
  className?: string;
  onLearnMore: () => void;
}) {
  return (
    <motion.div
      layoutId={`card-${product.id}`}
      style={{ rotate }}
      className={`relative bg-[#e8e8e8] grid-overlay rounded-2xl p-6 flex flex-col justify-between ${className}`}
    >
      <span className="font-black text-xl md:text-2xl text-black leading-tight">
        {product.name}
      </span>
      <button
        onClick={onLearnMore}
        className="text-black/50 text-sm font-medium text-left hover:text-black transition-colors duration-200 cursor-pointer"
      >
        what is this about?
      </button>
    </motion.div>
  );
}

/* ── full detail overlay ── */
function ProductDetail({
  product,
  onBack,
}: {
  product: (typeof products)[0];
  onBack: () => void;
}) {
  return (
    <>
      {/* Backdrop — fades in independently */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50"
        style={{ background: "rgba(240,240,240,0.5)", backdropFilter: "blur(12px)" }}
      />

      {/* Card — slides up with spring */}
      <motion.div
        key="detail-card"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-16 pointer-events-none"
      >
        <div
          className="w-full max-w-3xl rounded-3xl p-8 md:p-12 flex flex-col gap-6 overflow-y-auto pointer-events-auto"
          style={{
            maxHeight: "88vh",
            background: "rgba(0, 0, 0, 0.72)",
            backdropFilter: "blur(48px) saturate(200%) brightness(0.9)",
            WebkitBackdropFilter: "blur(48px) saturate(200%) brightness(0.9)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 0 0 0.5px rgba(255,255,255,0.04) inset, 0 48px 100px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Back button */}
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-lg font-bold shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer self-start"
          >
            ←
          </button>

          {/* Status badge */}
          <span className="self-start px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase">
            {product.status}
          </span>

          {/* Name */}
          <h2 className="font-black text-3xl md:text-5xl text-white leading-tight">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-2">
            {product.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, type: "spring", stiffness: 120, damping: 20 }}
                className="px-5 py-2.5 rounded-xl text-white/60 text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginTop: i % 2 === 1 ? "8px" : "0px",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ── main section ── */
export default function Products() {
  const [expanded, setExpanded] = useState(false);
  const [activeProduct, setActiveProduct] = useState<(typeof products)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleLearnMore = (product: (typeof products)[0]) => {
    setActiveProduct(product);
  };

  const handleBack = () => {
    setActiveProduct(null);
    // scroll back to this section
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <section ref={sectionRef} className="py-24 px-6 md:px-16 overflow-hidden grid-overlay">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {!expanded ? (
              /* ── COLLAPSED: button left + one tilted card right ── */
              <motion.div
                key="collapsed"
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                className="flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <motion.button
                  onClick={() => setExpanded(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 bg-black text-white font-bold text-2xl md:text-3xl px-8 py-5 rounded-full flex items-center gap-3 cursor-pointer"
                >
                  see our products <span>→</span>
                </motion.button>

                <div className="w-full md:w-[320px] h-[280px] md:h-[400px]">
                  <ProductCard
                    product={products[0]}
                    rotate={4}
                    className="w-full h-full"
                    onLearnMore={() => handleLearnMore(products[0])}
                  />
                </div>
              </motion.div>
            ) : (
              /* ── EXPANDED: all 4 cards ── */
              <motion.div
                key="expanded"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {products.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ x: i === 0 ? 0 : 200 + i * 60, opacity: i === 0 ? 1 : 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      delay: i === 0 ? 0 : i * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-[220px] md:h-[400px]"
                  >
                    <ProductCard
                      product={product}
                      rotate={0}
                      className="w-full h-full"
                      onLearnMore={() => handleLearnMore(product)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Detail overlay — rendered outside the section so it can cover the full viewport */}
      <AnimatePresence>
        {activeProduct && (
          <ProductDetail product={activeProduct} onBack={handleBack} />
        )}
      </AnimatePresence>
    </>
  );
}
