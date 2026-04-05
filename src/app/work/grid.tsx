"use client";

import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion";
import { projects } from "@/data/projects";

export function WorkGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <StaggerChildren
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant mt-2 max-w-md leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.frontend.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.backend.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:text-on-primary-container transition-all duration-500 shrink-0 mt-1">
                    <MaterialIcon name="arrow_forward" className="text-lg" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
