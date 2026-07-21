"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";
import { usePrefersReducedMotion, useResponsiveRunway, useScrollScrubbedVideo } from "./useScrollScrubbedVideo";

type VideoScrubSceneProps = {
  id: string;
  videoSrc: string;
  posterStart: string;
  posterFinal: string;
  posterAlt: string;
  eyebrow: string;
  heading: string;
  sub: string;
  showCta?: boolean;
  priority?: boolean;
  runwayDesktopVh?: number;
  runwayMobileVh?: number;
};

function SceneCopy({
  eyebrow,
  heading,
  headingId,
  sub,
  showCta,
}: {
  eyebrow: string;
  heading: string;
  headingId: string;
  sub: string;
  showCta?: boolean;
}) {
  return (
    <>
      <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-brass-light">{eyebrow}</div>
      <h2
        id={headingId}
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
    </>
  );
}

/** Static fallback for prefers-reduced-motion: no pinning, no scrubbing. */
function ReducedMotionScene({
  id,
  posterFinal,
  posterAlt,
  eyebrow,
  heading,
  sub,
  showCta,
  priority,
}: VideoScrubSceneProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden isolate" aria-labelledby={`${id}-title`}>
      <Image src={posterFinal} alt={posterAlt} fill priority={priority} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/10 to-walnut/40" />
      <div className="relative z-10 px-5 md:px-12 pb-16 md:pb-24">
        <SceneCopy eyebrow={eyebrow} heading={heading} headingId={`${id}-title`} sub={sub} showCta={showCta} />
      </div>
    </section>
  );
}

function ScrubbedScene({
  id,
  videoSrc,
  posterStart,
  eyebrow,
  heading,
  sub,
  showCta,
  runwayDesktopVh = 240,
  runwayMobileVh = 180,
}: VideoScrubSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const runwayVh = useResponsiveRunway(runwayDesktopVh, runwayMobileVh);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const videoRef = useScrollScrubbedVideo(scrollYProgress);

  // Third keyframe pins the value through progress 1: framer-motion routes
  // 2-point scroll-linked opacity/transform through a native WAAPI
  // "accelerated" animation path that doesn't hold the last keyframe once
  // scroll moves past it, decaying back toward the first value instead of
  // staying clamped, which would fade the copy back out while still pinned.
  const copyOpacity = useTransform(scrollYProgress, [0.55, 0.85, 1], [0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0.55, 0.85, 1], [24, 0, 0]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: `${runwayVh}vh` }}>
      <div className="sticky top-0 h-screen h-dvh overflow-hidden isolate flex flex-col justify-end">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={posterStart}
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/10 to-walnut/40" />
        <motion.div
          className="relative z-10 px-5 md:px-12 pb-16 md:pb-24"
          style={{ opacity: copyOpacity, y: copyY }}
        >
          <SceneCopy eyebrow={eyebrow} heading={heading} headingId={`${id}-title`} sub={sub} showCta={showCta} />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Scroll-scrubbed video scene: the clip plays forward/backward in lockstep
 * with scroll position rather than on a timer. Mechanism ported from
 * LittlePieceofParadise (github.com/AgentScoutPro/LittlePieceofParadise),
 * which runs this same effect cleanly in production. Falls back to a
 * static final-frame image with immediate copy for prefers-reduced-motion.
 */
export default function VideoScrubScene(props: VideoScrubSceneProps) {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <ReducedMotionScene {...props} /> : <ScrubbedScene {...props} />;
}
