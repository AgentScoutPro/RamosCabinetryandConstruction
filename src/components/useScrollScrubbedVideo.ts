import { useEffect, useRef, useState } from "react";
import { type MotionValue, useMotionValueEvent } from "framer-motion";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function useResponsiveRunway(desktopVh: number, mobileVh: number) {
  const [runwayVh, setRunwayVh] = useState(desktopVh);

  useEffect(() => {
    const setRunway = () => setRunwayVh(window.innerWidth < 640 ? mobileVh : desktopVh);
    setRunway();
    window.addEventListener("resize", setRunway);
    return () => window.removeEventListener("resize", setRunway);
  }, [desktopVh, mobileVh]);

  return runwayVh;
}

/**
 * Production scroll-video scrubber, matching the proven Little Piece pattern:
 * metadata preload, metadata-time sync with fastSeek when available, and one
 * rAF-batched currentTime assignment per scroll progress change.
 */
export function useScrollScrubbedVideo(progress: MotionValue<number>, enabled = true) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const latestProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const seekToProgress = () => {
      const duration = durationRef.current;
      if (!duration) return;
      const targetTime = Math.min(Math.max(latestProgressRef.current, 0), 1) * duration;

      try {
        if (typeof video.fastSeek === "function") {
          video.fastSeek(targetTime);
          return;
        }
      } catch {
        // Safari can throw while a video is still becoming seekable; fall back below.
      }

      try {
        video.currentTime = targetTime;
      } catch {
        // Leave the poster visible until the next metadata/canplay/scroll event.
      }
    };

    const onLoaded = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
        seekToProgress();
      }
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("durationchange", onLoaded);
    video.addEventListener("canplay", onLoaded);

    try {
      video.load();
    } catch {
      // Some browsers no-op or throw if load is called during source setup.
    }

    if (video.readyState >= 1) onLoaded();

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  useMotionValueEvent(progress, "change", (value) => {
    if (!enabled) return;
    latestProgressRef.current = value;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const video = videoRef.current;
      const duration = durationRef.current;
      if (!video || !duration) return;
      const targetTime = Math.min(Math.max(value, 0), 1) * duration;
      try {
        video.currentTime = targetTime;
      } catch {
        // Mobile browsers can reject seeks during decoder warmup; next scroll event retries.
      }
    });
  });

  return videoRef;
}
