"use client";

import { Rocket, Layers, SlidersHorizontal } from "lucide-react";
import { SectionPill } from "@/components/shared/section-pill";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";

const valueProps = [
  {
    icon: Rocket,
    title: "I ship fast",
    description:
      "I build in short cycles and keep you in the loop. No disappearing for weeks — you'll see progress early and often.",
  },
  {
    icon: Layers,
    title: "Full-stack means full-stack",
    description:
      "Frontend, backend, infrastructure, AI — I handle the whole stack so you don't need 4 different contractors.",
  },
  {
    icon: SlidersHorizontal,
    title: "I care about the details",
    description:
      "Good software isn't just functional. I sweat the small stuff — performance, accessibility, the little interactions that make things feel polished.",
  },
];

export function Testimonial() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <SectionPill label="Why Work With Me" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center mt-4">
            Why work with me
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {valueProps.map((prop) => (
            <StaggerItem key={prop.title}>
              <div className="bg-white rounded-2xl border border-border p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                  <prop.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
