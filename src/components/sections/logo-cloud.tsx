"use client";

import { FadeIn } from "@/components/shared/motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "OpenAI",
  "Anthropic",
  "AWS",
  "Vercel",
  "PostgreSQL",
  "Tailwind",
  "Figma",
];

export function LogoCloud() {
  // Duplicate for seamless loop
  const items = [...technologies, ...technologies];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <FadeIn direction="up">
        <p className="text-center text-sm text-muted-foreground mb-12">
          Tools I use every day
        </p>
      </FadeIn>

      {/* Marquee container */}
      <FadeIn delay={0.15}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 md:mx-12 flex-shrink-0 flex items-center"
              >
                <span className="text-xl md:text-2xl font-semibold text-foreground/20 hover:text-foreground/50 transition-colors duration-300 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
