'use client';

import React, { useRef, useEffect } from "react";

interface LightRaysProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal";
  speed?: number;
  squareSize?: number;
}

interface HoveredSquare {
  x: number;
  y: number;
}

const Background: React.FC<LightRaysProps> = ({
  direction = "right",
  speed = 1,
  squareSize = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<HoveredSquare | null>(null);
  const needsRedraw = useRef(true);
  const lastHoverUpdate = useRef(0);

  const getThemeColors = () => {
    if (typeof window === "undefined") {
      return {
        borderColor: "#ccc",
        hoverFillColor: "#f0f0f0",
        gradientColor: "#fff",
      };
    }
    const theme = document.documentElement.getAttribute("data-theme");
    const isDark = theme === "abyss";
    return {
      borderColor: isDark ? "#333" : "#ccc",
      hoverFillColor: isDark ? "#222" : "#f0f0f0",
      gradientColor: isDark ? "#060010" : "#fff",
    };
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.offsetWidth * dpr);
      canvas.height = Math.floor(canvas.offsetHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      needsRedraw.current = true;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      const { borderColor, hoverFillColor, gradientColor } = getThemeColors();

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      // Draw grid with optimized loops
      for (let x = startX; x < w + squareSize; x += squareSize) {
        for (let y = startY; y < h + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Gradient overlay
      const gradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.sqrt(w * w + h * h) / 2
      );
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(1, gradientColor);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    const updateAnimation = () => {
      if (document.hidden) {
        requestRef.current = requestAnimationFrame(updateAnimation);
        return;
      }

      const effectiveSpeed = Math.max(speed, 0.1);

      // move grid
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
      }

      needsRedraw.current = true;

      if (needsRedraw.current) {
        drawGrid();
        needsRedraw.current = false;
      }

      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    // Throttle mouse move
    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastHoverUpdate.current < 50) return; // 20 FPS throttle

      lastHoverUpdate.current = now;

      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

      hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      needsRedraw.current = true;
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
      needsRedraw.current = true;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-canvas fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Background;
