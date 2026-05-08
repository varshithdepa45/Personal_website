import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Brain,
  Database,
  Wrench,
  MapPin,
  Truck,
  Sun,
  Rocket,
  Trophy,
  GitBranch,
  GraduationCap,
  Lightbulb,
  Briefcase,
  FolderGit2,
  Zap,
  Award,
} from "lucide-react";

import type {
  NavItem,
  SkillCategory,
  Project,
  TimelineEntry,
  Achievement,
  Stat,
  SocialLink,
} from "@/types";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  name: "D Varshith Reddy",
  initials: "DVR",
  role: "AI Developer & Full-Stack Builder",
  email: "varshithreddy987@gmail.com",
  phone: "+91 9059845457",
  resumeUrl: `${BASE_PATH}/resume.pdf`,
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/varshithdepa45",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/varshith-reddy-98b701310",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:varshithreddy987@gmail.com",
    icon: Mail,
  },
];

export const STATS: Stat[] = [
  { label: "Projects Built", value: 18, suffix: "+", icon: FolderGit2 },
  { label: "Hackathons", value: 7, icon: Trophy },
  { label: "Technologies", value: 25, suffix: "+", icon: Zap },
  { label: "GitHub Contributions", value: 300, suffix: "+", icon: GitBranch },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 86 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 78 },
      { name: "Authentication", level: 84 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    accent: "from-fuchsia-500 to-purple-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 82 },
      { name: "Scikit-learn", level: 84 },
      { name: "LLMs / RAG", level: 86 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-cyan-400 to-blue-500",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Firebase", level: 86 },
      { name: "Redis", level: 74 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    accent: "from-pink-500 to-orange-400",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 82 },
      { name: "Figma", level: 80 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "tracenet",
    title: "TraceNet AI",
    tagline: "Geo-Intelligent Lost & Found Recovery Platform",
    description:
      "An AI-powered platform that reunites people with lost items using image similarity, geo-radius matching, and a trust score engine to filter fraudulent claims.",
    features: [
      "AI smart matching with image similarity",
      "Trust score verification system",
      "Live map radius tracking",
      "Fraud detection & claim scoring",
      "Real-time notifications & chat",
    ],
    stack: ["Next.js", "TypeScript", "Python", "TensorFlow", "MongoDB", "Mapbox"],
    github: "https://github.com/",
    demo: "https://varshithdepa45.github.io/Tracenet-ai/",
    accent: "from-blue-500 via-purple-500 to-fuchsia-500",
    icon: MapPin,
  },
  {
    id: "logistics",
    title: "AI Logistics Dispatch",
    tagline: "Intelligent Order Reassignment & Delay Prediction",
    description:
      "A logistics platform that uses ML to predict shipment delays and intelligently reassigns orders to the optimal driver based on live conditions and history.",
    features: [
      "Intelligent order reassignment",
      "ML-based delay prediction",
      "Driver management dashboard",
      "Live order tracking with ETA",
      "Performance analytics & SLAs",
    ],
    stack: ["React", "Node.js", "Express", "Python", "PostgreSQL", "Socket.IO"],
    github: "https://github.com/varshithdepa45/Smart-logistics",
    accent: "from-cyan-400 via-blue-500 to-purple-500",
    icon: Truck,
  },
  {
    id: "solar",
    title: "Solar Panel Fault Detection",
    tagline: "AI-Powered Solar Diagnostics & Predictive Maintenance",
    description:
      "Computer vision system that analyzes thermal & RGB imagery from solar farms to detect micro-cracks, hotspots, and degradation before they become failures.",
    features: [
      "AI-powered solar diagnostics",
      "Real-time monitoring dashboard",
      "Predictive maintenance alerts",
      "Performance & yield analytics",
      "Drone imagery integration",
    ],
    stack: ["Python", "OpenCV", "PyTorch", "FastAPI", "Next.js", "Firebase"],
    github: "https://github.com/varshithdepa45/solar-2",
    accent: "from-amber-400 via-pink-500 to-purple-500",
    icon: Sun,
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2022",
    title: "Discovered Web Development",
    description:
      "Started with HTML, CSS, and JavaScript. Built my first responsive sites and fell in love with the craft of turning ideas into interfaces.",
    icon: Code2,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    year: "2023",
    title: "Diving into AI & Machine Learning",
    description:
      "Got serious about Python, TensorFlow, and computer vision. Built intelligent systems that could see, predict, and adapt.",
    icon: Brain,
    accent: "from-purple-500 to-fuchsia-500",
  },
  {
    year: "2024",
    title: "Hackathon Builder Era",
    description:
      "Shipped products under 36-hour pressure. Learned to scope, prototype, and demo at startup speed alongside incredible teammates.",
    icon: Trophy,
    accent: "from-pink-500 to-orange-400",
  },
  {
    year: "2025",
    title: "Exploring Startup Ideas",
    description:
      "Started thinking like a founder. TraceNet AI and the logistics platform were born from real problems worth solving end-to-end.",
    icon: Lightbulb,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    year: "2026",
    title: "Internship & Open Source",
    description:
      "Preparing for high-impact internships, contributing to open source, and going deeper on production-grade AI systems.",
    icon: Briefcase,
    accent: "from-fuchsia-500 to-purple-500",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    label: "Hackathons Participated",
    value: 7,
    icon: Trophy,
    accent: "from-amber-400 to-orange-500",
  },
  {
    label: "Projects Completed",
    value: 18,
    suffix: "+",
    icon: Rocket,
    accent: "from-blue-500 to-purple-500",
  },
  {
    label: "Open Source Contributions",
    value: 30,
    suffix: "+",
    icon: GitBranch,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    label: "Certifications Earned",
    value: 12,
    icon: Award,
    accent: "from-purple-500 to-pink-500",
  },
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Startup Mindset",
    description:
      "I think in terms of products, not features. Speed, taste, and shipping things that matter.",
    icon: Rocket,
  },
  {
    title: "AI + Full Stack",
    description:
      "I bridge the gap between intelligent models and the polished interfaces real users actually touch.",
    icon: Brain,
  },
  {
    title: "Problem-First Builder",
    description:
      "Every project starts with a real friction. The tech stack is just whatever solves it best.",
    icon: Lightbulb,
  },
  {
    title: "Always Learning",
    description:
      "CSE AIML student obsessed with how systems scale, how teams ship, and how great products feel.",
    icon: GraduationCap,
  },
];
