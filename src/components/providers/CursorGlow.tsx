"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const bigRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const big = bigRef.current;
    const small = smallRef.current;
    if (!big || !small) return;

    let x = 0, y = 0;
    let bx = 0, by = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      small.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      bx = lerp(bx, x, 0.06);
      by = lerp(by, y, 0.06);
      big.style.transform = `translate(${bx - 200}px, ${by - 200}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={bigRef}
        className="cursor-glow"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        ref={smallRef}
        className="cursor-glow"
        style={{
          width: 8,
          height: 8,
          background: "#a78bfa",
        }}
      />
    </>
  );
}
