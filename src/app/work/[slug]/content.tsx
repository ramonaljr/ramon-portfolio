"use client";

import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/shared/motion";
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
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 mesh-accent opacity-30" />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8">
          <FadeIn>
            <span className="text-white/60 font-bold uppercase tracking-widest text-xs">
              {project.number} &mdash; {project.category}
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white mt-4 tracking-tight">
              {project.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-white/60 max-w-2xl mt-6 leading-relaxed">
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
                  className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
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
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-orange-50 active:scale-[0.97] transition-all duration-300"
                >
                  <MaterialIcon name="open_in_new" className="text-lg" />
                  View Live
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold border border-white/20 hover:bg-white/20 active:scale-[0.97] transition-all duration-300"
              >
                <MaterialIcon name="code" className="text-lg" />
                View Source
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Image */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 -mt-8">
          <ScaleIn initialScale={0.95}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface mb-10">
              About the Project
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {project.description.map((paragraph, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">
              The Story
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "report_problem",
                label: "Challenge",
                text: project.challenge,
              },
              {
                icon: "lightbulb",
                label: "Solution",
                text: project.solution,
              },
              {
                icon: "emoji_events",
                label: "Result",
                text: project.result,
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-surface rounded-xl p-8 border border-outline-variant/20 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-5">
                    <MaterialIcon
                      name={item.icon}
                      className="text-primary text-xl"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-on-surface mb-3">
                    {item.label}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">
              Key Metrics
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {project.metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20 text-center h-full">
                  <p className="text-5xl md:text-6xl font-headline font-bold text-primary mb-3">
                    {metric.value}
                  </p>
                  <h3 className="font-bold text-lg text-on-surface mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="max-w-3xl mx-auto px-8">
          <FadeIn>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Reflection
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface mb-10">
              What I Learned
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {project.learnings}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">
              Key Features
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {project.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20 h-full flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                    <MaterialIcon
                      name={feature.icon}
                      className="text-primary text-xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-on-surface mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
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
      <section className="py-24 md:py-32 bg-surface-container-high text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16">
            <span className="text-primary-container font-bold uppercase tracking-widest text-xs">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">
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
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-sm uppercase tracking-widest text-primary-container mb-4">
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
            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-sm uppercase tracking-widest text-primary-container mb-3">
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
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <FadeIn>
            <span className="text-on-surface-variant text-sm uppercase tracking-widest">
              Next Project
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="block group mt-4"
            >
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors duration-500">
                {nextProject.title}
              </h2>
              <p className="text-on-surface-variant mt-3">
                {nextProject.category}
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
