"use client";

import { FadeIn, ScaleIn } from "@/components/shared/motion";

export function FinalCTA() {
  return (
    <section id="contact" className="p-8">
      <ScaleIn initialScale={0.95}>
        <div className="max-w-screen-2xl mx-auto relative rounded-xl overflow-hidden bg-primary p-20 text-center">
          <div className="absolute inset-0 hero-gradient opacity-60" />

          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-8">
                Let&apos;s build something extraordinary
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it. Whether
                you need a full platform, an AI integration, or a strategic
                technology partner — let&apos;s talk.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@ramon.dev"
                  className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-[0.97] transition-all duration-500"
                >
                  Start a Conversation
                </a>
                <a
                  href="#process"
                  className="bg-transparent text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 active:scale-[0.97] transition-all duration-500"
                >
                  View My Process
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}
