"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative h-14 w-14 flex items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
              />
              <span className="flex h-14 w-14 items-center justify-center text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  M
                </span>
                <span className="text-xl font-light text-muted-foreground/40">
                  /
                </span>
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  A
                </span>
              </span>
            </div>
            <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground">
              LOADING
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
