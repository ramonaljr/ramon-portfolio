"use client";

import { SectionPill } from "@/components/shared/section-pill";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";

const phases = [
  {
    title: "Discovery",
    subtitle: "Phase 1",
    description:
      "Deep dive into your domain, existing systems, and goals. I ask the questions others skip.",
    tags: ["Research", "Strategy"],
  },
  {
    title: "Architecture",
    subtitle: "Phase 2",
    description:
      "System design before code — data models, API contracts, deployment strategy, and technology choices.",
    tags: ["System Design", "Planning"],
  },
  {
    title: "Build",
    subtitle: "Phase 3",
    description:
      "Rapid, iterative development with continuous deployment. You see progress weekly, not quarterly.",
    tags: ["Development", "Testing"],
  },
  {
    title: "Ship & Support",
    subtitle: "Phase 4",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. I don't disappear after launch.",
    tags: ["Deployment", "Maintenance"],
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="mb-16">
          <SectionPill label="Process" />
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">How I Work</h2>
        </FadeIn>

        <StaggerChildren stagger={0.1}>
          {phases.map((phase) => (
            <StaggerItem key={phase.title}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-8 border-b border-border hover:bg-muted/50 transition-colors duration-300 -mx-4 px-4 rounded-lg">
                {/* Left: Title + Subtitle */}
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    &bull; {phase.subtitle}
                  </p>
                </div>
                {/* Center: Description */}
                <div className="md:col-span-5">
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
                {/* Right: Tags */}
                <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-muted text-sm text-foreground"
                    >
                      {tag}
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
