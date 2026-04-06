"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import { ResumeButton } from "@/components/shared/resume-button";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";
import { TechStackGrid } from "@/components/sections/tech-stack-grid";

const timeline = [
  {
    period: "2018 — 2020",
    title: "Foundations",
    description:
      "Started with HTML/CSS/JS, built early client sites, and fell in love with the craft of making things for the web.",
  },
  {
    period: "2020 — 2022",
    title: "Full-Stack Growth",
    description:
      "Went deep into React, Node.js, and databases. Built production applications for real businesses and learned to ship.",
  },
  {
    period: "2022 — 2024",
    title: "AI & Automation",
    description:
      "Integrated AI into every workflow. Built autonomous agents, intelligent dashboards, and self-healing pipelines.",
  },
  {
    period: "2024 — Present",
    title: "Enterprise Scale",
    description:
      "Building full-stack SaaS platforms with monorepo architectures, cross-platform mobile apps, and AI-powered business logic.",
  },
];

const values = [
  {
    icon: "visibility",
    title: "Invisible Technology",
    description:
      "The best systems disappear into the workflow. I build tools that feel effortless — complexity hidden behind simplicity.",
  },
  {
    icon: "handshake",
    title: "Partnership Over Projects",
    description:
      "Every engagement starts with understanding your domain, your constraints, and your ambitions. Technology is built from empathy.",
  },
  {
    icon: "precision_manufacturing",
    title: "Craft at Every Layer",
    description:
      "From database schema to pixel spacing — I care about quality at every level of the stack, not just the surface.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Story */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight">
              I&apos;ve spent 8+ years building software that refuses to be
              &ldquo;good enough&rdquo;
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                I&apos;m a full-stack developer and AI specialist based in the
                Philippines. My work lives at the intersection of deep technical
                craft and thoughtful design — building systems that are powerful
                under the hood and effortless on the surface.
              </p>
              <p>
                From autonomous workflow engines that eliminate entire categories
                of manual work, to pixel-perfect interfaces that make complex
                systems feel simple — I build for organizations that demand
                excellence at every layer.
              </p>
              <p className="text-on-surface font-medium">
                I&apos;ve shipped 40+ projects, integrated AI into 15+ systems,
                and built cross-platform applications used across web, iOS, and
                Android.
              </p>
              <div className="pt-2">
                <ResumeButton />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills Grid */}
      <TechStackGrid />

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn className="mb-16 text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">
              Experience Timeline
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <FadeIn key={item.period} delay={i * 0.15}>
                  <div className="relative pl-16">
                    {/* Dot */}
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-primary-container border-4 border-surface" />
                    <span className="text-xs text-primary font-bold uppercase tracking-widest">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-headline font-bold mt-1 text-on-surface">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-surface-container-high text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16 text-center">
            <span className="text-primary-container font-bold uppercase tracking-widest text-xs">
              Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">
              What Drives My Work
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center p-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                    <MaterialIcon
                      name={value.icon}
                      className="text-primary-container text-2xl"
                    />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-on-surface-variant text-lg mb-10">
              I&apos;m currently available for new engagements — from full
              platforms to focused AI integrations.
            </p>
            <a
              href="/contact"
              className="inline-flex bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(250,112,37,0.3)] active:scale-[0.97] transition-all duration-500"
            >
              Start a Conversation
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
