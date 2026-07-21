"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

export default function VideoScrubScene({
  id,
  videoSrc,
  posterSrc,
  posterAlt,
  eyebrow,
  heading,
  sub,
  showCta = false,
  priority = false,
}: {
  id: string;
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  eyebrow: string;
  heading: string;
  sub: string;
  showCta?: boolean;
  priority?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !videoReady) return;
    const wrap = sectionRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const traveled = -rect.top;
        const progress = total > 0 ? Math.min(1, Math.max(0, traveled / total)) : 0;
        const duration = video.duration;
        if (duration && !Number.isNaN(duration)) {
          try {
            video.currentTime = progress * duration;
          } catch {
            /* ignore seek errors during rapid scroll */
          }
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, videoReady]);

  return (
    <div ref={sectionRef} id={id} className="relative h-[220vh] motion-reduce:h-auto">
      <div
        className="sticky top-0 h-screen motion-reduce:static motion-reduce:h-[85vh] overflow-hidden"
        aria-labelledby={`${id}-title`}
      >
        {/* Poster is the base layer: instant paint, and the permanent fallback if video can't load or plays are skipped. */}
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        {!reducedMotion && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedMetadata={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/10 to-walnut/40" />

        <div className="absolute inset-x-0 bottom-0 px-5 md:px-12 pb-16 md:pb-24">
          <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-brass-light">
            {eyebrow}
          </div>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl sm:text-4xl md:text-6xl text-cream mt-4 max-w-3xl leading-[1.05]"
          >
            {heading}
          </h2>
          <p className="mt-5 text-cream/70 text-lg max-w-xl leading-relaxed">{sub}</p>

          {showCta && (
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-brass text-walnut text-sm tracking-wide text-center hover:bg-brass-light transition-colors"
              >
                Request a Free Estimate
              </Link>
              <a
                href={business.phoneHref}
                className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-wide text-center hover:border-brass hover:text-brass-light transition-colors"
              >
                Call {business.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
