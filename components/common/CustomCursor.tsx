'use client';

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // ----------------------------------------
  // Detect desktop + mouse (not touch)
  // ----------------------------------------
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

  // ----------------------------------------
  // Cursor logic (only when enabled)
  // ----------------------------------------
  useEffect(() => {
    if (!enabled) return;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    // Hide native cursor
    document.documentElement.classList.add("custom-cursor-active");

    const setInnerX = gsap.quickTo(inner, "x", {
      duration: 0.12,
      ease: "power3.out",
    });
    const setInnerY = gsap.quickTo(inner, "y", {
      duration: 0.12,
      ease: "power3.out",
    });
    const setOuterX = gsap.quickTo(outer, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const setOuterY = gsap.quickTo(outer, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      setInnerX(e.clientX);
      setInnerY(e.clientY);
      setOuterX(e.clientX);
      setOuterY(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  // ----------------------------------------
  // Do not render on mobile / touch
  // ----------------------------------------
  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
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

      {/* Inner dot */}
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
