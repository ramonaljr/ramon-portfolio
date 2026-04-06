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
    <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden border-y border-white/5">
      <FadeIn direction="up">
        <p className="text-center text-outline text-xs uppercase tracking-[0.3em] font-bold mb-12">
          Tools I use every day
        </p>
      </FadeIn>

      {/* Marquee container */}
      <FadeIn delay={0.15}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 md:mx-12 flex-shrink-0 flex items-center"
              >
                <span className="font-headline font-bold text-xl md:text-2xl text-white/20 hover:text-white/50 transition-colors duration-500 cursor-default">
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
