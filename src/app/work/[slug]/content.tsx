"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Code,
  AlertTriangle,
  Lightbulb,
  Trophy,
  ArrowRight,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";
import { SectionPill } from "@/components/shared/section-pill";
import type { Project } from "@/data/projects";

export function CaseStudyContent({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <span className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
              {project.number} &mdash; {project.category}
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mt-4 tracking-tight">
              {project.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed">
              {project.tagline}
            </p>
          </FadeIn>

          {/* Tech pills */}
          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                ...project.techStack.frontend.slice(0, 3),
                ...project.techStack.backend.slice(0, 2),
                ...(project.techStack.mobile?.slice(0, 1) || []),
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Action buttons */}
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap gap-4 mt-10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 active:scale-[0.97] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted active:scale-[0.97] transition-all duration-300"
              >
                <Code className="w-4 h-4" />
                View Source
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Image */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 bg-background">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <SectionPill label="Overview" />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground mb-10">
              About the Project
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {project.description.map((paragraph, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn className="mb-16">
            <SectionPill label="Case Study" />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground">
              The Story
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: AlertTriangle,
                label: "Challenge",
                text: project.challenge,
              },
              {
                icon: Lightbulb,
                label: "Solution",
                text: project.solution,
              },
              {
                icon: Trophy,
                label: "Result",
                text: project.result,
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn className="mb-16">
            <SectionPill label="Impact" />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground">
              Key Metrics
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {project.metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="bg-muted rounded-2xl p-8 border border-border text-center h-full">
                  <p className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                    {metric.value}
                  </p>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-32 bg-muted">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <SectionPill label="Reflection" />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground mb-10">
              What I Learned
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.learnings}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn className="mb-16">
            <SectionPill label="Capabilities" />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-foreground">
              Key Features
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {project.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-muted rounded-2xl p-8 border border-border h-full flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <span className="text-foreground text-sm font-semibold">
                      {feature.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Tech Stack Detail */}
      <section className="py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="text-white/40 font-medium uppercase tracking-widest text-xs">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">
              Tech Stack
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {(
              [
                ["Frontend", project.techStack.frontend],
                ["Backend", project.techStack.backend],
                ...(project.techStack.mobile
                  ? ([["Mobile", project.techStack.mobile]] as const)
                  : []),
                ["Infrastructure", project.techStack.infrastructure],
              ] as const
            ).map(([label, items]) => (
              <StaggerItem key={label}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Architecture note */}
          <FadeIn delay={0.3} className="mt-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-3">
                Architecture
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <FadeIn>
            <span className="text-muted-foreground text-sm uppercase tracking-widest">
              Next Project
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="block group mt-4"
            >
              <h2 className="text-4xl md:text-6xl font-semibold text-foreground group-hover:text-foreground/70 transition-colors duration-300">
                {nextProject.title}
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span>{nextProject.category}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
