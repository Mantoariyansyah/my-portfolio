"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/data";
import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion-reveal";
import { ProjectCard } from "@/components/sections/project-card";

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "dashboard", label: "Dashboards" },
  { id: "landing", label: "Landing Pages" },
  { id: "fullstack", label: "Full Stack" },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Featured Projects
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A mix of dashboards, storefronts, and marketing sites shipped for real clients.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                filter === f.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {filter === f.id && (
                <motion.span
                  layoutId="project-filter-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
