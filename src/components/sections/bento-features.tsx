"use client";

import { Server, Bot, Code, GitMerge } from "lucide-react";
import { SectionPill } from "@/components/shared/section-pill";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";

const services = [
  {
    icon: Server,
    title: "Scalable Systems",
    description:
      "I design backends that hold up under real traffic — clean APIs, solid databases, and infrastructure that doesn't fall over at 2 AM.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Custom AI agents and LLM integrations that handle the repetitive work your team shouldn't be doing manually. 50-85% less manual effort.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end builds across web and mobile — from the UI your users see to the servers running behind it. Monorepo architectures, shared packages.",
  },
  {
    icon: GitMerge,
    title: "Workflow Integration",
    description:
      "I connect the tools you already use and automate the steps in between. Plaid, Stripe, CRMs, ERPs — less copy-paste, more getting things done.",
  },
];

export function BentoFeatures() {
  return (
    <section id="services" className="bg-muted py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <FadeIn className="text-center">
          <SectionPill label="Services" />
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">
            What I Do Best
          </h2>
          <p className="text-muted-foreground text-lg mt-2 max-w-xl mx-auto">
            Four pillars that cover the full product lifecycle — from
            architecture to automation.
          </p>
        </FadeIn>

        {/* Service Cards */}
        <StaggerChildren
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="bg-white rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Icon className="w-16 h-16 text-foreground mx-auto my-8" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
