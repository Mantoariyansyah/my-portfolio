// constants/data.ts
import {
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Home,
  User,
  Layers,
  FolderGit2,
  Send,
} from "lucide-react";

import { NavLink, SocialLink, TechItem, Project, CommandItem } from "@/types";

// ============ NAVIGATION ============
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ============ SOCIAL ============
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/kaiaditya", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/kaiaditya", icon: Linkedin },
  { label: "Email", href: "mailto:hello@kaiaditya.dev", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/6281234567890", icon: MessageCircle },
];



// ============ TECH STACK (dengan ikon asli) ============
export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "HTML5", icon: SiHtml5, category: "frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss, category: "frontend", color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend", color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend", color: "#3178C6" },
  { name: "React", icon: FaReact, category: "frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "#06B6D4" },
  { name: "Vue.js", icon: SiVuedotjs, category: "frontend", color: "#4FC08D" },
  { name: "Vite", icon: SiVite, category: "frontend", color: "#646CFF" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, category: "backend", color: "#339933" },
  { name: "Express", icon: SiExpress, category: "backend", color: "#000000" },
  { name: "PHP", icon: SiPhp, category: "backend", color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, category: "backend", color: "#FF2D20" },

  // Database
  { name: "MySQL", icon: SiMysql, category: "database", color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database", color: "#4169E1" },

  // Tools
  { name: "Git", icon: SiGit, category: "tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "tools", color: "#181717" },
  { name: "Figma", icon: SiFigma, category: "tools", color: "#F24E1E" },
  { name: "VS Code", icon: VscVscode, category: "tools", color: "#007ACC" },
  { name: "Vercel", icon: SiVercel, category: "tools", color: "#000000" },
  { name: "Docker", icon: FaDocker, category: "tools", color: "#2496ED" },
];

// ============ PROJECTS ============
export const PROJECTS: Project[] = [
  {
    id: "orbit-dashboard",
    title: "Orbit Analytics Dashboard",
    description:
      "A real-time analytics dashboard with customizable widgets, dark mode, and role-based access, built for a SaaS startup tracking product usage.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    category: "dashboard",
    github: "https://github.com/kaiaditya/orbit-dashboard",
    demo: "https://orbit-dashboard.vercel.app",
    featured: true,
  },
  {
    id: "lumen-ecommerce",
    title: "Lumen Storefront",
    description:
      "A high-performance headless e-commerce storefront with instant search, cart persistence, and a 98+ Lighthouse performance score.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind", "Framer Motion"],
    category: "fullstack",
    github: "https://github.com/kaiaditya/lumen-storefront",
    demo: "https://lumen-storefront.vercel.app",
    featured: true,
  },
  {
    id: "atlas-landing",
    title: "Atlas SaaS Landing Page",
    description:
      "A conversion-focused landing page for a productivity SaaS, featuring scroll-triggered storytelling and an animated product preview.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind"],
    category: "landing",
    github: "https://github.com/kaiaditya/atlas-landing",
    demo: "https://atlas-landing.vercel.app",
    featured: true,
  },
  {
    id: "nimbus-crm",
    title: "Nimbus CRM",
    description:
      "An internal CRM tool with drag-and-drop pipelines, activity timelines, and granular permissions for a 40-person sales team.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "dashboard",
    github: "https://github.com/kaiaditya/nimbus-crm",
    demo: "https://nimbus-crm.vercel.app",
  },
  {
    id: "voyage-travel",
    title: "Voyage Travel Booking",
    description:
      "A travel booking web app with itinerary builder, live pricing, and a map-based destination explorer.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Laravel API"],
    category: "web",
    github: "https://github.com/kaiaditya/voyage-travel",
    demo: "https://voyage-travel.vercel.app",
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness Landing",
    description:
      "A bold, high-energy landing page for a fitness coaching brand with parallax sections and animated program cards.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Vite", "Tailwind"],
    category: "landing",
    github: "https://github.com/kaiaditya/pulse-fitness",
    demo: "https://pulse-fitness.vercel.app",
  },
];

// ============ COMMAND ============
export const COMMAND_ITEMS: CommandItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About Me", href: "#about", icon: User },
  { label: "Tech Stack", href: "#stack", icon: Layers },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Send },
];