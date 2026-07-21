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
 * Binds a framer-motion scroll progress value (0-1) to a <video>'s
 * currentTime. Ported from LittlePieceofParadise's working implementation:
 * preload="auto" + a one-time play().pause() prime so mobile decoders are
 * warm before the first seek, fastSeek() preferred over currentTime, and
 * the scroll subscription driven by useMotionValueEvent (already
 * rAF-batched) rather than a manual scroll listener.
 */
export function useScrollScrubbedVideo(progress: MotionValue<number>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const latestProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
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

    const primePlayback = video.play();
    if (primePlayback) {
      primePlayback.then(() => video.pause()).catch(() => {
        // Autoplay priming is a best-effort mobile decoder hint, not required.
      });
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useMotionValueEvent(progress, "change", (value) => {
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
        // Mobile browsers can reject seeks during decoder warmup; the next
        // scroll/metadata event will retry with the latest progress.
      }
    });
  });

  return videoRef;
}
