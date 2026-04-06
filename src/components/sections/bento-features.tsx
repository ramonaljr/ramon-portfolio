"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  ParallaxLayer,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";

const services = [
  {
    icon: "storage",
    title: "Scalable Systems",
    description:
      "I design backends that hold up under real traffic — clean APIs, solid databases, and infrastructure that doesn't fall over at 2 AM.",
    accent: "from-primary-container/20",
  },
  {
    icon: "smart_toy",
    title: "AI & Automation",
    description:
      "Custom AI agents and LLM integrations that handle the repetitive work your team shouldn't be doing manually. 50-85% less manual effort.",
    accent: "from-secondary-container/20",
  },
  {
    icon: "developer_mode",
    title: "Full-Stack Development",
    description:
      "End-to-end builds across web and mobile — from the UI your users see to the servers running behind it. Monorepo architectures, shared packages.",
    accent: "from-tertiary-container/20",
  },
  {
    icon: "hub",
    title: "Workflow Integration",
    description:
      "I connect the tools you already use and automate the steps in between. Plaid, Stripe, CRMs, ERPs — less copy-paste, more getting things done.",
    accent: "from-primary-fixed/20",
  },
];

export function BentoFeatures() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 md:py-32 bg-surface"
    >
      <ParallaxLayer speed={0.1} direction="up">
        <div className="absolute inset-0 mesh-accent opacity-30 pointer-events-none" />
      </ParallaxLayer>

      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
            Core capabilities
          </h2>
          <p className="text-on-surface-variant text-lg mt-4 max-w-xl">
            Four pillars that cover the full product lifecycle — from
            architecture to automation.
          </p>
        </FadeIn>

        {/* Service Cards */}
        <StaggerChildren
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <StaggerItem key={service.title}>
              <div className="group relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/20 p-8 md:p-10 h-full hover:border-primary-container/50 hover:shadow-[0_0_40px_rgba(250,112,37,0.08)] transition-all duration-500">
                {/* Subtle gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center mb-6 group-hover:border-primary-container/40 transition-colors duration-500">
                    <MaterialIcon
                      name={service.icon}
                      className="text-primary text-2xl"
                    />
                  </div>

                  {/* Number */}
                  <span className="text-on-surface-variant/30 text-sm font-mono">
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-headline font-bold text-on-surface mt-1 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA link */}
        <FadeIn delay={0.5} className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 group"
          >
            View all services
            <MaterialIcon
              name="arrow_forward"
              className="text-lg group-hover:translate-x-1 transition-transform"
            />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
