"use client";

import { FadeIn } from "@/components/shared/motion";

export function MidCTA() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-xl bg-surface-container border border-outline-variant/20">
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mb-2">
                Have a project in mind?
              </h3>
              <p className="text-on-surface-variant max-w-lg">
                I&apos;m currently available for new engagements — from full
                platform builds to focused AI integrations.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(250,112,37,0.3)] active:scale-[0.97] transition-all duration-500"
            >
              Let&apos;s Talk
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
