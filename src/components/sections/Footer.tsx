"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const links: Record<string, { label: string; href: string }[]> = {
  Products: [
    { label: "GRASSRUTS", href: "/#products" },
    { label: "DAATACENTER.io", href: "/#products" },
    { label: "SCHULNG", href: "/#products" },
    { label: "BUZSKALE", href: "/#products" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "Updates", href: "/updates" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socials = ["Twitter", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] pt-20 pb-10 px-6 md:px-16 grid-overlay">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <FadeIn className="md:col-span-1">
            <div className="mb-3">
              <span className="text-xl font-black text-black">join2gether</span>
              <span className="text-xl font-black text-black">work</span>
            </div>
            <p className="text-black/30 text-sm leading-relaxed">
              Building technology that solves real problems.
            </p>
          </FadeIn>

          {/* Link columns */}
          {Object.entries(links).map(([group, items], gi) => (
            <FadeIn key={group} delay={gi * 0.06}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-black/30 font-medium mb-4">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-black/50 hover:text-black transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/[0.08]">
          <p className="text-xs text-black/25">
            © {new Date().getFullYear()} Join2GetherWork Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s} href="#" className="text-xs text-black/30 hover:text-black transition-colors duration-200">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
