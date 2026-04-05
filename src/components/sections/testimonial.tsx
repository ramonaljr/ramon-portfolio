"use client";

import Image from "next/image";
import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn, ParallaxLayer } from "@/components/shared/motion";

export function Testimonial() {
  return (
    <section className="py-32 relative overflow-hidden bg-on-background text-white">
      {/* Ambient glow with parallax */}
      <ParallaxLayer
        speed={0.15}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 blur-[120px] rounded-full" />
      </ParallaxLayer>

      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <FadeIn>
          <MaterialIcon
            name="format_quote"
            className="text-6xl text-primary-container mb-8"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <blockquote className="text-3xl md:text-5xl font-headline font-medium text-white leading-tight mb-12">
            &ldquo;The integration didn&rsquo;t just speed up our processes; it
            fundamentally changed how we perceive organizational scale. We are
            now executing at a volume that was previously impossible.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20 shadow-lg relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLeFCFTwE9KFNHb1gpz4BP4420JooOTEDgvxvXcmKzJ4SCGzYSsEgQnWpNyytXSVW0eZ-PhIdBmv73f7GbjI0yl_ur1AofVDoWRYvSM4JkBVIQMIc6bOvuMvz7wwgiMbclV0A2amX3zy9Xa6YVw8YrBhf-Z_SKc51b815Eu742t8RL79J2JeHYvDjOSGdVlBj-Id4zGuI8cKXx76-2SlOT2NyutWX0X_ubJHHX2g2RNwob59gQsSE86gvfVjFUaR5EMwIHHOxBBaQ"
                alt="Portrait of Julian Thorne, CTO at Alstom Global"
                fill
                className="object-cover"
              />
            </div>
            <h5 className="text-xl font-headline font-bold text-white">
              Julian Thorne
            </h5>
            <p className="text-white/50 text-sm uppercase tracking-widest">
              CTO, Alstom Global
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
