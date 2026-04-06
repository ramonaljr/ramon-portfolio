"use client";

import { FadeIn, ParallaxLayer } from "@/components/shared/motion";

const highlights = [
  { label: "Years Building", value: "8+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "AI Integrations", value: "15+" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-surface-container overflow-hidden"
    >
      <ParallaxLayer speed={0.15} direction="up">
        <div className="absolute inset-0 mesh-accent opacity-20 pointer-events-none" />
      </ParallaxLayer>

      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Headline accent */}
          <FadeIn direction="left" className="lg:col-span-5">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 leading-tight text-on-surface">
              A bit about me
            </h2>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {highlights.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-headline font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — Bio text */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-7">
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                I&apos;m a full-stack developer who&apos;s spent the last 8+
                years building software — mostly in React, Next.js, Node, and
                Python. Lately I&apos;ve been deep in AI, building agents and
                automation that actually save people time.
              </p>
              <p>
                I&apos;ve shipped everything from AI-powered accounting
                platforms to payroll systems to personal finance apps. I care
                about clean code, good UX, and not overengineering things.
              </p>
              <p className="text-on-surface font-medium">
                I treat every project like a collaboration. I want to understand
                your problem as well as you do — that&apos;s how the best
                software gets built.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
