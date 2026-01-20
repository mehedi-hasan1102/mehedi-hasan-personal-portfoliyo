'use client';

import React, { useEffect, useRef } from "react";

const OrbitalAnimation: React.FC = () => {
  const dot2Ref = useRef<HTMLDivElement | null>(null);
  const dot3Ref = useRef<HTMLDivElement | null>(null);

  const radius2 = 35;
  const radius3 = 20;
  const center = 70;

  useEffect(() => {
    let angle2 = 180;
    let angle3 = 90;

    let lastTime = performance.now();
    let rafId: number;

    const animate = (time: number) => {
      // 30 FPS (33ms)
      if (time - lastTime > 33) {
        angle2 = (angle2 + 1.5) % 360;
        angle3 = (angle3 + 2) % 360;

        const x2 = center + radius2 * Math.cos((angle2 * Math.PI) / 180);
        const y2 = center + radius2 * Math.sin((angle2 * Math.PI) / 180);

        const x3 = center + radius3 * Math.cos((angle3 * Math.PI) / 180);
        const y3 = center + radius3 * Math.sin((angle3 * Math.PI) / 180);

        if (dot2Ref.current) {
          dot2Ref.current.style.transform = `translate(${x2 - 3}px, ${y2 - 3}px)`;
        }
        if (dot3Ref.current) {
          dot3Ref.current.style.transform = `translate(${x3 - 3}px, ${y3 - 3}px)`;
        }

        lastTime = time;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="w-[140px] h-[140px] relative">
      <div
        ref={dot2Ref}
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{ left: 0, top: 0, boxShadow: "0 0 6px rgba(34, 197, 94, 0.7)" }}
      />
      <div
        ref={dot3Ref}
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{ left: 0, top: 0, boxShadow: "0 0 6px rgba(34, 197, 94, 0.7)" }}
      />
      <div className="absolute w-[100px] h-[100px] border border-primary rounded-full top-[20px] left-[20px] opacity-30"></div>
      <div className="absolute w-[70px] h-[70px] border border-primary rounded-full top-[35px] left-[35px] opacity-30"></div>
      <div className="absolute w-[40px] h-[40px] border border-primary rounded-full top-[50px] left-[50px] opacity-30"></div>
    </div>
  );
};

export default OrbitalAnimation;
