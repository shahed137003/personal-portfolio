import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function GeometricBackground() {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Balanced visible grid lines
  const gridColor = isDarkMode ? "rgba(255, 0, 122, 0.16)" : "rgba(225, 29, 72, 0.14)";

  // Track mouse movement for cursor spotlight & particle interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2D Particle Constellation System (Rose Carmine & Crimson Pink)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = isDarkMode
      ? ["#FF007A", "#E01E5A", "#F43F5E", "#FB7185", "#BE123C", "#FFFFFF"]
      : ["#be123c", "#e11d48", "#f43f5e", "#fda4af", "#881337"];

    particlesRef.current = Array.from({ length: 95 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3.5 + 1.2,
      speedX: Math.random() * 0.45 - 0.22,
      speedY: Math.random() * 0.45 - 0.22,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: isDarkMode ? Math.random() * 0.55 + 0.3 : Math.random() * 0.6 + 0.3,
      glow: Math.random() > 0.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        if (particle.glow) {
          const glowGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 4
          );
          glowGradient.addColorStop(0, particle.color + (isDarkMode ? "cc" : "dd"));
          glowGradient.addColorStop(1, particle.color + "00");
          ctx.fillStyle = glowGradient;
        } else {
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
        }

        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Connecting constellation line network
        particlesRef.current.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (isDarkMode ? 0.18 : 0.20) * (1 - dist / 100);
            ctx.lineWidth = 0.7;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (oldWidth > 0 && oldHeight > 0) {
        particlesRef.current.forEach((particle) => {
          particle.x = (particle.x / oldWidth) * canvas.width;
          particle.y = (particle.y / oldHeight) * canvas.height;
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Canvas Constellation Particle Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
      />

      {/* 2. Wide Ultra-Thin Geometric Grid Background (Wide 65px x 65px Squares, 0.8px Lines) */}
      <div className="absolute inset-0 opacity-85 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${gridColor} 0.8px, transparent 0.8px),
              linear-gradient(180deg, ${gridColor} 0.8px, transparent 0.8px)
            `,
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      {/* 3. Interactive Cursor Rose Spotlight Beam */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${
            isDarkMode ? "rgba(255, 0, 122, 0.18)" : "rgba(225, 29, 72, 0.15)"
          }, transparent 80%)`,
        }}
      />

      {/* 4. Beautiful Ambient Rose Light Shines */}
      <div
        className={`absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
          isDarkMode ? "bg-[#FF007A]/15" : "bg-[#fda4af]/22"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
          isDarkMode ? "bg-[#E01E5A]/14" : "bg-[#fecdd3]/25"
        }`}
      />

      {/* 5. Framer Motion Ambient Floating Glow Orbs */}
      <motion.div
        className={`absolute top-10 left-10 w-[500px] h-[500px] rounded-full blur-[140px] ${
          isDarkMode ? "bg-[#FF007A]/12" : "bg-[#f43f5e]/15"
        }`}
        animate={{
          x: [0, 70, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className={`absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full blur-[140px] ${
          isDarkMode ? "bg-[#E01E5A]/12" : "bg-[#fda4af]/16"
        }`}
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
