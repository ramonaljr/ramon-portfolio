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
    <section className="py-16 bg-surface-container-low overflow-hidden">
      <FadeIn>
        <p className="text-center text-outline text-xs uppercase tracking-[0.3em] font-bold mb-12">
          Technologies &amp; Platforms I Work With
        </p>
      </FadeIn>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-8 md:mx-12 flex-shrink-0 flex items-center"
            >
              <span className="font-headline font-bold text-xl md:text-2xl text-on-surface/40 hover:text-on-surface/80 transition-colors duration-500 cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
