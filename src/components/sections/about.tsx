"use client";

import { FadeIn } from "@/components/shared/motion";

const highlights = [
  { label: "Years Building", value: "8+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "AI Integrations", value: "15+" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32 bg-surface-container overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Headline accent */}
          <FadeIn direction="left" className="lg:col-span-5">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 leading-tight text-on-surface">
              Building at the intersection of design &amp; intelligence
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
                I&apos;m a full-stack developer and AI specialist who believes
                technology should feel invisible — powerful systems that just
                work, wrapped in interfaces that feel effortless. My work lives
                at the intersection of deep technical craft and thoughtful
                design.
              </p>
              <p>
                I&apos;ve spent years building for organizations that refuse to
                accept &ldquo;good enough&rdquo; — from autonomous workflow
                engines that eliminate entire categories of manual work, to
                pixel-perfect frontends that make complex systems feel simple.
              </p>
              <p className="text-on-surface font-medium">
                Every project I take on is a partnership. I care deeply about
                understanding your domain, your constraints, and your ambitions
                — because the best technology is built from empathy, not just
                engineering.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
