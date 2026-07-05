// components/sections/tech-stack.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion-reveal";
import { TechCard } from "@/components/sections/tech-card";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
] as const;

export function TechStack() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return TECH_STACK;
    return TECH_STACK.filter((t) => t.category === active);
  }, [active]);

  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I use to build products
          </h2>
          <p className="mt-4 text-muted-foreground">
            A stack chosen for developer experience, performance, and long-term maintainability.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                active === cat.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="tech-tab-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <StaggerGroup
            key={active}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            stagger={0.05}
          >
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground py-10">
                No technologies found in this category.
              </div>
            ) : (
              filtered.map((tech) => (
                <StaggerItem key={`${tech.name}-${active}`}>
                  <TechCard tech={tech} />
                </StaggerItem>
              ))
            )}
          </StaggerGroup>
        </AnimatePresence>
      </div>
    </section>
  );
}