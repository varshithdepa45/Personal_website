import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  accent: string;
  icon: LucideIcon;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  accent: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
