"use client";

import Image from "next/image";
import { Sparkles, Target } from "lucide-react";
import { FadeIn } from "@/components/shared/motion";

export function PersonalIntro() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: About Me text */}
          <FadeIn>
            <h2 className="text-4xl font-semibold">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              I&apos;m Ramon, a full-stack developer and AI engineer based in
              the Philippines. I build everything from AI-powered platforms to
              cross-platform mobile apps — with an obsession for clean
              architecture and interfaces that feel effortless. My approach
              combines technical depth with design sensibility, so every project
              ships fast and scales well.
            </p>
          </FadeIn>

          {/* Right: Asymmetric layout */}
          <div className="space-y-6">
            {/* Stat card */}
            <FadeIn delay={0.15}>
              <div className="bg-muted rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div className="text-5xl font-bold tracking-tight">320%</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Average efficiency improvement for client workflows
                </p>
              </div>
            </FadeIn>

            {/* Smaller photo */}
            <FadeIn delay={0.3}>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/ramon-photo.jpeg"
                  alt="Ramon A. Vallejera, Jr. working"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </FadeIn>

            {/* Bullet points */}
            <FadeIn delay={0.45}>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Clean architecture</p>
                    <p className="text-sm text-muted-foreground">
                      Scalable codebases built with maintainability in mind
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Result-driven delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Shipping products that solve real problems, on time
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
