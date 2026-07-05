// components/sections/tech-card.tsx
"use client";

import { TechItem } from "@/types";
import { TiltCard } from "@/components/ui/tilt-card";

export function TechCard({ tech }: { tech: TechItem }) {
  const Icon = tech.icon; // this is now a component

  // Safety fallback in case icon is missing (shouldn't happen)
  if (!Icon) {
    return (
      <TiltCard>
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 text-center">
          <span className="text-sm font-medium">{tech.name}</span>
        </div>
      </TiltCard>
    );
  }

  return (
    <TiltCard>
      <div
        className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
        style={{ ["--glow" as string]: tech.color }}
      >
        <div
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-25"
          style={{ background: tech.color }}
        />
        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${tech.color}1A`, color: tech.color }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span className="relative text-sm font-medium">{tech.name}</span>
      </div>
    </TiltCard>
  );
}