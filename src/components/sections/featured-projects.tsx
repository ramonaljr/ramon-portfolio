"use client";

import Image from "next/image";
import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn, ParallaxLayer } from "@/components/shared/motion";

const projects = [
  {
    number: "01",
    category: "Web3 Infrastructure",
    title: "Copper Genesis",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkmcAx7dORfN5pYSVnUsyYq83yeyoyOWFBRz26d2nIGUNY3wnkb1ANXxfXBouDDzk5--gmdzBe8eDbb1O6dFj4LFKfnnvGqSae_AmlT9_DTBlyD2xQDAsY0DM27qW3xTIkGTADQwwuJT33kloGgaJ43oEEags_S9WAwyS-mGaZO-d95npOy4IfYlkuq5ZepNI-Di9hQokLt5avwkDbH6_-JENwAFJwz6KD-Alhh01yG7SORY5KpfUaYiZKRFKZ_Wyz2Nl0mX-2BEY",
    imageAlt:
      "Dark moody 3D render of architectural geometric shapes with sharp golden light edges",
    offset: false,
  },
  {
    number: "02",
    category: "AI Automation",
    title: "Circuit Authority",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwhs0x8G6d4o-LIM-l4c2L9FnYH9xSvSo_hy4WWq0fNOoQVug0PcDe9tUNqcy_DPqt4aPllvp5oRNbLd0iGDZ5tcfphmXFMPCcQHP0Dt4o1HOLaVN57leD6ETMXtnpNnpn5aTSkVkjDg-bSH4vH1R7w3OLbnS7RncW91Zj8_ocWZonF-V_0B0VJD65pWpJ3XsHk6YeKm8GQ5tGRqCZTYkxgJpjxx3zAtI_ocXM65wzxdu02DKkDLSfXzANeyAv4Ji4_VjB459jvH4",
    imageAlt:
      "Cinematic 3D render of floating copper circuits glowing with intense orange light",
    offset: true,
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="work"
      className="py-32 bg-on-background text-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <FadeIn>
            <span className="text-primary-container font-bold uppercase tracking-widest text-xs">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mt-4">
              Selected Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 max-w-xs font-body italic mt-8 md:mt-0">
              Projects where design meets deep technical craft.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <FadeIn
              key={project.number}
              delay={i * 0.3}
              distance={80}
              className={project.offset ? "lg:mt-32" : ""}
            >
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8">
                  <ParallaxLayer speed={0.1}>
                    <div className="absolute inset-[-10%]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
