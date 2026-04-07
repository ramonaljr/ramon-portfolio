"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export function AboutHero() {
  return (
    <section className="pt-32 pb-0">
      {/* Text section */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16">
          {/* Left: Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              Hello There, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Ramon
            </h1>
          </motion.div>

          {/* Right: Bio + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.25 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello, I&apos;m Ramon, a passionate full-stack developer and AI
              engineer with over 8+ years of experience in crafting intuitive and
              impactful digital experiences. I&apos;ve led various projects with
              a focus on user-centered design. Let&apos;s collaborate to bring
              your ideas to life!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Let&apos;s talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Full-width photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      >
        <Image
          src="/ramon-photo.jpeg"
          alt="Ramon A. Vallejera, Jr."
          fill
          className="object-cover object-top grayscale"
          priority
        />
      </motion.div>
    </section>
  );
}
