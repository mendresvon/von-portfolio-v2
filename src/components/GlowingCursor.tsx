// src/components/GlowingCursor.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlowingCursorProps {
  isActive: boolean;
}

export default function GlowingCursor({ isActive }: GlowingCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(220, 230, 255, 0.15), transparent 80%)`,
      }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}