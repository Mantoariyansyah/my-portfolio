"use client";

import { Target, Zap, Users, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

const VALUES = [
  {
    icon: Target,
    title: "Precision",
    description: "Pixel-perfect implementation that stays faithful to every design detail.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast-loading, optimized, and responsive applications built for every device.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong communication and teamwork to transform ideas into successful products.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving development best practices.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Building exceptional digital experiences through modern frontend development
          </h2>
        </Reveal>

        <div className="mt-16 max-w-3xl mx-auto">
          <Reveal className="space-y-5">
            <p className="text-muted-foreground">
              I'm a Frontend Developer passionate about crafting fast, scalable, and intuitive web applications. With experience using React, Next.js, Vue.js, Tailwind CSS, and TypeScript, I transform ideas into production-ready interfaces that prioritize performance, accessibility, and user experience.
            </p>
            <p className="text-muted-foreground">
              Throughout my projects, I've developed administration dashboards, inventory systems, educational platforms, and modern e-commerce applications, focusing on reusable architectures, responsive layouts, and maintainable code. I enjoy collaborating with cross-functional teams to bridge design and functionality while delivering polished digital products.
            </p>
            <p className="text-muted-foreground">
              Outside of development, I continuously explore emerging frontend technologies, improve my problem-solving skills, and build personal projects that help me grow as a developer.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <value.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="mt-2 text-sm font-semibold">{value.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}