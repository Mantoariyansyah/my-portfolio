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

// ============ PROJECTS (4 card sesuai permintaan) ============
export const PROJECTS: Project[] = [
  {
    id: "firman-perabot",
    title: "Firman Perabot Inventory Management System",
    description:
      "A comprehensive inventory management system for furniture business with real-time stock tracking, sales analytics, and automated reporting. Built to streamline warehouse operations and improve business efficiency.",
    image: "/images/gambar1.png",
    tags: ["PHP Native", "MySQL", "BOOTSTRAP"],
    category: "dashboard",
    github: "https://github.com/kaiaditya/firman-perabot",
    demo: "https://firman-perabot.vercel.app",
    featured: true,
  },
  {
    id: "smas-kristen-bethel",
    title: "SMAS Kristen Bethel Jakarta School Website",
    description:
      "A modern school website featuring academic information, student portal, event calendar, and online registration system. Designed to enhance communication between school and parents.",
    image: "/images/gambar2.png",
    tags: ["React.js", "TypeScript", "Tailwind", "Framer Motion"],
    category: "landing",
    github: "https://github.com/kaiaditya/smas-kristen-bethel",
    demo: "https://visionary-moxie-324b5d.netlify.app/daftarsiswa",
    featured: true,
  },
  {
    id: "teknik-abadi-admin",
    title: "Teknik Abadi Inventory & E-Commerce Platform",
    description:
      "An admin dashboard for an industrial tools e-commerce platform with product management, order processing, customer analytics, and supplier integration. Built for efficient business management.",
    image: "/images/gambar3.png",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "dashboard",
    github: "https://github.com/kaiaditya/teknik-abadi-admin",
    demo: "https://teknik-abadi-admin.vercel.app",
    featured: true,
  },
  {
    id: "kostmate-landing",
    title: "KostMate Boarding House Management Platform",
    description:
      "A landing page for a boarding house management platform with property listings, room booking system, and tenant management features. Designed to help property owners manage their rentals efficiently.",
    image: "/images/gambar4.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    category: "landing",
    github: "https://github.com/kaiaditya/kostmate",
    demo: "https://www.kostmate.com/",
    featured: true,
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