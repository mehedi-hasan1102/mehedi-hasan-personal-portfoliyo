'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OrbitalAnimation: React.FC = () => {
  const [angle2, setAngle2] = useState<number>(180);
  const [angle3, setAngle3] = useState<number>(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle2((prev) => (prev + 1.5) % 360); // middle orbit speed
      setAngle3((prev) => (prev + 2) % 360);   // inner orbit speed
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const radius2: number = 35;  // middle orbit radius
  const radius3: number = 20;  // inner orbit radius
  const center: number = 70;   // center of container

  const x2: number = center + radius2 * Math.cos((angle2 * Math.PI) / 180);
  const y2: number = center + radius2 * Math.sin((angle2 * Math.PI) / 180);

  const x3: number = center + radius3 * Math.cos((angle3 * Math.PI) / 180);
  const y3: number = center + radius3 * Math.sin((angle3 * Math.PI) / 180);

  return (
    <div className="w-[140px] h-[140px] relative">
      {/* Middle Orbiting Particle */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{
          left: x2 - 3,
          top: y2 - 3,
          boxShadow: "0 0 6px rgba(59, 130, 246, 0.7)",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.3 }}
      />

      {/* Inner Orbiting Particle */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{
          left: x3 - 3,
          top: y3 - 3,
          boxShadow: "0 0 6px rgba(59, 130, 246, 0.7)",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      {/* Orbit Rings */}
      <div className="absolute w-[100px] h-[100px] border border-primary rounded-full top-[20px] left-[20px] opacity-30"></div>
      <div className="absolute w-[70px] h-[70px] border border-primary rounded-full top-[35px] left-[35px] opacity-30"></div>
      <div className="absolute w-[40px] h-[40px] border border-primary rounded-full top-[50px] left-[50px] opacity-30"></div>
    </div>
  );
};

export default OrbitalAnimation;
