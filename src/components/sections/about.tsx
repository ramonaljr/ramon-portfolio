"use client";

import { SectionPill } from "@/components/shared/section-pill";
import { FadeIn } from "@/components/shared/motion";

const highlights = [
  { label: "Years Building", value: "8+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "AI Integrations", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="bg-muted py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left -- Headline + Stats */}
          <FadeIn direction="left" className="lg:col-span-5">
            <SectionPill label="About" />
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              A bit about me
            </h2>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {highlights.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right -- Bio text */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-7">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
              <p className="font-medium text-foreground">
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
