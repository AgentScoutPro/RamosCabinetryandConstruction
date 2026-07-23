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
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;

    let mounted = true;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const seekToCurrentTarget = () => {
      const duration = durationRef.current;
      if (!duration) return;
      const cappedProgress = Math.min(Math.max(progress.get(), 0), 1) * maxProgress;
      targetTimeRef.current = cappedProgress * duration;
      currentTimeRef.current = video.currentTime || targetTimeRef.current;
      try {
        video.currentTime = currentTimeRef.current;
      } catch {
        // Keep the poster visible until the decoder accepts the first seek.
      }
    };

    const onLoaded = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
        seekToCurrentTarget();
      }
    };

    const tick = () => {
      if (!mounted) return;

      const video = videoRef.current;
      const duration = durationRef.current;
      if (video && duration) {
        const nextTime = currentTimeRef.current + (targetTimeRef.current - currentTimeRef.current) * 0.18;
        currentTimeRef.current = Math.abs(targetTimeRef.current - nextTime) < 0.012 ? targetTimeRef.current : nextTime;

        try {
          if (Math.abs(video.currentTime - currentTimeRef.current) > 0.004) {
            video.currentTime = currentTimeRef.current;
          }
        } catch {
          // Mobile decoders can reject a frame while warming; the next rAF retries.
        }
      }

      rafRef.current = requestAnimationFrame(tick);
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
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, maxProgress, progress]);

  useMotionValueEvent(progress, "change", (value) => {
    if (!enabled) return;
    const duration = durationRef.current;
    if (!duration) return;
    targetTimeRef.current = Math.min(Math.max(value, 0), 1) * maxProgress * duration;
  });

  return videoRef;
}
