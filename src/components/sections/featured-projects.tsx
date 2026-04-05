"use client";

import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn, ParallaxLayer } from "@/components/shared/motion";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  // Show first 2 projects on landing page
  const featured = projects.slice(0, 2);

  return (
    <section
      id="work"
      className="py-32 bg-surface-container text-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <FadeIn>
            <span className="text-primary-container font-bold uppercase tracking-widest text-xs">
              Recent work
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mt-4">
              Projects I&apos;ve shipped
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 max-w-xs font-body italic mt-8 md:mt-0">
              Real products, real users, real code.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {featured.map((project, i) => (
            <FadeIn
              key={project.slug}
              delay={i * 0.3}
              distance={80}
              className={i === 1 ? "lg:mt-32" : ""}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8">
                  <ParallaxLayer
                    speed={0.1}
                    className="absolute inset-[-10%]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </ParallaxLayer>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-primary-container text-sm font-bold mb-2">
                      {project.number} &mdash; {project.category}
                    </p>
                    <h3 className="text-3xl font-headline font-bold">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
                    <MaterialIcon name="north_east" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* View All Link */}
        <FadeIn delay={0.5} className="mt-20 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold transition-colors group"
          >
            View all projects
            <MaterialIcon
              name="arrow_forward"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
