"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')
      );
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isDesktop, cursorX, cursorY, visible]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-primary/60 mix-blend-difference"
      style={{
        x,
        y,
        opacity: visible ? 1 : 0,
        scale: isPointer ? 1.8 : 1,
      }}
      transition={{ scale: { duration: 0.2 } }}
    />
  );
}
