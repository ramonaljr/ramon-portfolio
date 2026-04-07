"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/motion";

export function MidCTA() {
  return (
    <section className="px-4 lg:px-8 py-16">
      <FadeIn>
        <div className="bg-[#0a0a0a] rounded-3xl py-20 md:py-28 px-8 text-center relative overflow-hidden">
          <FadeIn delay={0.1} direction="none">
            <p className="text-white/50 text-sm mb-4">
              (Book Your Free Consultation Now!)
            </p>
          </FadeIn>
          <FadeIn delay={0.2} direction="none">
            <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight">
              Ready to Start? Get A Free Consultation!
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} direction="none">
            <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
              Take advantage of this offer to discuss your project needs with an
              experienced full-stack developer.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="none">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 mt-10 px-6 py-3 text-sm font-medium rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Let&apos;s talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
