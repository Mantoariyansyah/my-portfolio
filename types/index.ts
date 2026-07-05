import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons"; // tambahkan ini

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

// Ubah TechItem agar icon bisa berupa IconType (dari react-icons)
export interface TechItem {
  name: string;
  icon: IconType; // bukan string
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

export type ProjectCategory = "all" | "web" | "dashboard" | "landing" | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export interface CommandItem {
  label: string;
  href: string;
  icon: LucideIcon;
  shortcut?: string;
}