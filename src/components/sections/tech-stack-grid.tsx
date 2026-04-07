"use client";

import {
  Code,
  Server,
  Bot,
  Smartphone,
  Cloud,
  Palette,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";
import { SectionPill } from "@/components/shared/section-pill";
import type { LucideIcon } from "lucide-react";

const skills: { category: string; icon: LucideIcon; items: string[] }[] = [
  {
    category: "Frontend",
    icon: Code,
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Radix UI",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Edge Functions",
      "Server Actions",
    ],
  },
  {
    category: "AI & ML",
    icon: Bot,
    items: [
      "OpenAI API",
      "Google Gemini",
      "Anthropic Claude",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      "React Native",
      "Expo",
      "NativeWind",
      "iOS / Android",
      "Biometric Auth",
      "Push Notifications",
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    items: [
      "Docker",
      "Turborepo",
      "Vercel",
      "Railway",
      "AWS",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "Design",
    icon: Palette,
    items: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Prototyping",
      "Motion Design",
      "Accessibility",
    ],
  },
];

export function TechStackGrid() {
  return (
    <section className="py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="mb-16">
          <SectionPill label="Technical Expertise" />
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground">
            Skills & Technologies
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="group bg-white rounded-2xl p-8 border border-border h-full hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
