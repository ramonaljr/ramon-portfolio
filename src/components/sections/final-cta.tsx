"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/motion";

export function FinalCTA() {
  return (
    <section id="contact" className="px-4 lg:px-8 py-16">
      <FadeIn>
        <div className="bg-[#0a0a0a] rounded-3xl py-20 md:py-28 px-8 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight">
            Let&apos;s build something together
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
            Whether you&apos;re hiring for a team, need a freelance developer,
            or just want to talk through an idea — I&apos;d love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors"
            >
              Send me a message
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              See my work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
