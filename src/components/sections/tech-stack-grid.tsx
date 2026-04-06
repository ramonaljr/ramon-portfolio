"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";

const skills = [
  {
    category: "Frontend",
    icon: "code",
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
    icon: "dns",
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
    icon: "smart_toy",
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
    icon: "phone_iphone",
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
    icon: "cloud",
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
    icon: "palette",
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
    <section className="py-24 md:py-32 bg-surface-container">
      <div className="max-w-screen-2xl mx-auto px-8">
        <FadeIn className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">
            Skills & Technologies
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="group bg-surface rounded-xl p-8 border border-outline-variant/20 h-full hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(250,112,37,0.08)] transition-all duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                    <MaterialIcon
                      name={group.icon}
                      className="text-primary-container text-xl"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-on-surface">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant group-hover:scale-105 transition-transform duration-300"
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
