import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export const SITE_CONFIG = {
  name: "Manto Ariyansyah",
  title: "Frontend Developer",
  description:
    "Frontend Developer crafting fast, accessible, and beautifully animated web experiences with React, Next.js, and TypeScript.",
  url: "https://kaiaditya.dev",
  email: "mantoariyansyah23@gmail.com",
  location: "Bogor, Indonesia",
  github: "https://github.com/Mantoariyansyah",
  linkedin: "https://www.linkedin.com/in/manto-ariyansyah-1a74b0252/",
  whatsapp: "https://wa.me/6289688087637",
  cvUrl: "/cv.pdf",
};
