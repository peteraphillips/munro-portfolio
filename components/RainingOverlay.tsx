"use client";

import { useEffect, useRef } from "react";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";

interface RaindropOptions {
  density?: number;
  speed?: number;
  opacity?: number;
  color?: string;
}

export default function RainingOverlay({
  density = 50,
  speed = 2,
  opacity = 0.6,
  color = "#ffffff",
}: RaindropOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isGhibliMode } = useGhibliTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Create raindrops
    interface Raindrop {
      x: number;
      y: number;
      length: number;
      opacity: number;
      speed: number;
    }

    const raindrops: Raindrop[] = [];

    // Initialize raindrops
    for (let i = 0; i < density; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 15 + 10,
        opacity: Math.random() * 0.5 + opacity * 0.5,
        speed: Math.random() * speed + speed * 0.5,
      });
    }

// Animation loop
    const animate = () => {
      // Clear canvas completely for transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      raindrops.forEach((drop) => {
        // Calculate movement
        const waveOffset = Math.sin(drop.y / 10) * 0.3;
        const angleOffset = isGhibliMode ? drop.speed * 0.4 : 0;
        const totalXOffset = waveOffset - angleOffset;
        
        // Calculate angle to align raindrop with fall trajectory
        const angle = Math.atan2(totalXOffset, drop.speed);
        
        // Draw raindrop rotated to match angle
        ctx.globalAlpha = drop.opacity;
        ctx.save();
        ctx.translate(drop.x, drop.y);
        ctx.rotate(-angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, drop.length);
        ctx.stroke();
        ctx.restore();

        // Update position
        drop.y += drop.speed;
        drop.x += totalXOffset;

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }

        if (drop.x > canvas.width) {
          drop.x = 0;
        } else if (drop.x < 0) {
          drop.x = canvas.width;
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [density, speed, opacity, color, isGhibliMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ display: "block" }}
    />
  );
}
