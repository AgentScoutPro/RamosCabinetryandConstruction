"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CraftReveal({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel,
  afterLabel,
}: {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Track progress as the section moves through the viewport (0 = just entered, 1 = fully scrolled past)
      const total = rect.height - vh;
      const traveled = -rect.top;
      const p = total > 0 ? Math.min(1, Math.max(0, traveled / total)) : 0;
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[220vh] motion-reduce:h-auto">
      <div className="sticky top-0 h-screen motion-reduce:static motion-reduce:h-[70vh] overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image src={beforeSrc} alt={beforeAlt} fill sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
          >
            <Image src={afterSrc} alt={afterAlt} fill sizes="100vw" className="object-cover" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-walnut/70 via-transparent to-walnut/20" />

          <div className="absolute inset-x-0 bottom-0 px-5 md:px-12 pb-16 flex items-end justify-between">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-brass-light">
                {progress < 0.5 ? beforeLabel : afterLabel}
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-cream mt-3 max-w-xl leading-tight">
                Built by Hand, Fit to the Room
              </h2>
            </div>
            <div className="hidden md:block w-40 h-1 bg-cream/20 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-brass"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
