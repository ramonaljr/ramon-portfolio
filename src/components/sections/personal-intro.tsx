"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/motion";

export function PersonalIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 mesh-accent opacity-20 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeIn className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
                <Image
                  src="/ramon-photo.jpeg"
                  alt="Ramon Vallejera — Full-Stack Developer & AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="lg:col-span-8">
            <FadeIn direction="right" delay={0.15}>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">
                Hey, I&apos;m Ramon A. Vallejera Jr.
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mt-4 leading-tight text-on-surface">
                I turn complex problems into
                <span className="text-primary"> software that just works</span>
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <p className="text-on-surface-variant text-lg leading-relaxed mt-6 max-w-2xl">
                Full-stack developer and AI engineer based in the Philippines. I
                build everything from AI-powered platforms to cross-platform
                mobile apps — with an obsession for clean architecture and
                interfaces that feel effortless.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.45}>
              <div className="flex flex-wrap gap-3 mt-8">
                {["React / Next.js", "AI & Automation", "Mobile Apps", "Full-Stack"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-sm border border-outline-variant/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
