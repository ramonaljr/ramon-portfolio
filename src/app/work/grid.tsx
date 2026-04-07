"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-background py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <StaggerChildren
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-md leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.frontend.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.backend.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300 shrink-0 mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 active:scale-[0.97] transition-all duration-300"
          >
            Book A Call
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
