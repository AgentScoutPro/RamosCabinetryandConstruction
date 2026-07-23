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

export function useScrollScrubbedVideo(progress: MotionValue<number>, enabled = true, maxProgress = 1) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const applyFrame = () => {
      const duration = durationRef.current;
      const video = videoRef.current;
      if (!video || !duration) return;

      const targetTime = Math.min(Math.max(targetProgressRef.current, 0), 1) * maxProgress * duration;
      try {
        if (Math.abs(video.currentTime - targetTime) > 0.003) {
          video.currentTime = targetTime;
        }
      } catch {
        // Mobile decoders can reject seeks during warmup; next scroll frame retries.
      }
    };

    const queueFrame = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        applyFrame();
      });
    };

    const onLoaded = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
        targetProgressRef.current = progress.get();
        queueFrame();
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
  }, [enabled, maxProgress, progress]);

  useMotionValueEvent(progress, "change", (value) => {
    if (!enabled) return;
    targetProgressRef.current = value;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const video = videoRef.current;
      const duration = durationRef.current;
      if (!video || !duration) return;
      const targetTime = Math.min(Math.max(targetProgressRef.current, 0), 1) * maxProgress * duration;
      try {
        if (Math.abs(video.currentTime - targetTime) > 0.003) {
          video.currentTime = targetTime;
        }
      } catch {
        // Mobile decoders can reject seeks during warmup; next scroll frame retries.
      }
    });
  });

  return videoRef;
}
