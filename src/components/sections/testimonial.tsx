"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";

const valueProps = [
  {
    icon: "rocket_launch",
    title: "I ship fast",
    description:
      "I build in short cycles and keep you in the loop. No disappearing for weeks — you'll see progress early and often.",
  },
  {
    icon: "layers",
    title: "Full-stack means full-stack",
    description:
      "Frontend, backend, infrastructure, AI — I handle the whole stack so you don't need 4 different contractors.",
  },
  {
    icon: "tune",
    title: "I care about the details",
    description:
      "Good software isn't just functional. I sweat the small stuff — performance, accessibility, the little interactions that make things feel polished.",
  },
];

export function Testimonial() {
  return (
    <section className="py-32 relative overflow-hidden bg-surface-container">
      <div className="max-w-screen-2xl mx-auto px-8">
        <FadeIn className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Why me
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
            Why work with me
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {valueProps.map((prop) => (
            <StaggerItem key={prop.title}>
              <div className="p-8 rounded-xl bg-surface border border-outline-variant/20 hover:border-primary-container hover:shadow-[0_0_30px_rgba(250,112,37,0.08)] transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6">
                  <MaterialIcon name={prop.icon} />
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                  {prop.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
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
