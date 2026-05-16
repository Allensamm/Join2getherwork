"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Agency",   href: "/agency" },
  { label: "Company",  href: "/company" },
  { label: "Careers",  href: "/careers" },
  { label: "Updates",  href: "/updates" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6">
        <div className="w-full max-w-5xl rounded-full bg-[#d4d4d4]/80 backdrop-blur-md px-6 py-3 flex items-center justify-between overflow-hidden">

          {/* Left — brand on inner pages / scroll text on home */}
          <div className="relative h-6 flex items-center w-44">
            {pathname !== "/" ? (
              <Link
                href="/"
                className="absolute left-0 whitespace-nowrap font-black text-black text-sm tracking-tight hover:opacity-60 transition-opacity duration-200"
              >
                JOIN2GETHERWORK
              </Link>
            ) : (
              <AnimatePresence>
                {scrolled && (
                  <motion.span
                    key="solving"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 whitespace-nowrap font-bold text-black text-sm"
                  >
                    Solving problems
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </div>

          {/* Center — "Building to last" on home land only */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <AnimatePresence>
              {pathname === "/" && !scrolled && (
                <motion.span
                  key="building"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap font-bold text-black text-sm"
                >
                  Building to last
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Right — page links + CTA */}
          <div className="flex items-center gap-5 ml-auto">
            {/* Page links — hidden on mobile */}
            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold transition-colors duration-200 ${
                    pathname === link.href ? "text-black" : "text-black/40 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="font-bold text-black text-sm shrink-0 hover:opacity-60 transition-opacity duration-200"
            >
              Get in Touch
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-5 h-0.5 bg-black origin-center" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5 bg-black" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-5 h-0.5 bg-black origin-center" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-6 right-6 z-40 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {[...navLinks, { label: "Get in Touch", href: "/contact" }].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-bold text-black hover:text-black/50 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
