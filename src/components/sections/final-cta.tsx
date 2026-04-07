"use client";

import { FadeIn } from "@/components/shared/motion";

export function FinalCTA() {
  return (
    <section id="contact" className="p-8">
      <div className="max-w-screen-2xl mx-auto relative rounded-xl overflow-hidden bg-primary p-20 text-center">
          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-8">
                Let&apos;s build something together
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Whether you&apos;re hiring for a team, need a freelance
                developer, or just want to talk through an idea — I&apos;d love
                to hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@ramon.dev"
                  className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-500"
                >
                  Send me a message
                </a>
                <a
                  href="#work"
                  className="bg-transparent text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 active:scale-[0.97] transition-all duration-500"
                >
                  See my work
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
    </section>
  );
}
