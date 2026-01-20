'use client';

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const detect = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setEnabled(isLargeScreen && hasFinePointer);
    };

    detect();
    window.addEventListener("resize", detect);

    return () => window.removeEventListener("resize", detect);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    let outerX = 0;
    let outerY = 0;

    const easeInner = 0.25;
    const easeOuter = 0.12;

    let rafId: number | null = null;
    let isRunning = true;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (!isRunning) return;

      innerX += (mouseX - innerX) * easeInner;
      innerY += (mouseY - innerY) * easeInner;

      outerX += (mouseX - outerX) * easeOuter;
      outerY += (mouseY - outerY) * easeOuter;

      inner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
      outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });

    // STOP animation while scrolling
    let scrollTimer: number | null = null;
    const onScroll = () => {
      isRunning = false;
      if (scrollTimer) cancelAnimationFrame(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        isRunning = true;
        rafId = requestAnimationFrame(animate);
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // STOP animation when tab is inactive
    const onVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        isRunning = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.documentElement.classList.remove("custom-cursor-active");
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          w-10 h-10
          rounded-full
          border border-primary
          opacity-80
          z-[9999]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
        "
      />

      <div
        ref={innerRef}
        className="
          pointer-events-none
          fixed top-0 left-0
          w-3 h-3
          bg-primary
          rounded-full
          z-[9999]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
        "
      />
    </>
  );
}
