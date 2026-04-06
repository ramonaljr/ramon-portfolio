"use client";

import React from "react";
import { motion } from "motion/react";
import { FadeIn, ParallaxLayer, useReducedMotion } from "@/components/shared/motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Ramon delivered our AI-powered dashboard in half the time we expected. His full-stack skills meant we didn't need to hire three separate contractors.",
    name: "Sarah Chen",
    role: "CTO, TechFlow",
  },
  {
    text: "What stood out was how well he understood our business problem before writing a single line of code. The final product was exactly what we needed.",
    name: "Marcus Rivera",
    role: "Founder, Payvio",
  },
  {
    text: "Ramon's attention to detail is incredible. The animations, the micro-interactions — everything feels polished and intentional.",
    name: "Aisha Patel",
    role: "Design Lead, Kalcio",
  },
  {
    text: "We needed someone who could handle both the React frontend and the Python AI backend. Ramon was the perfect fit — shipped a production-ready MVP in 6 weeks.",
    name: "James Park",
    role: "CEO, NeuralOps",
  },
  {
    text: "Great communicator. He kept us in the loop every step of the way and was always open to feedback. A rare find in freelance development.",
    name: "Elena Voss",
    role: "Product Manager, Husay",
  },
  {
    text: "Ramon turned our clunky internal tool into a sleek, modern app. Our team's productivity jumped 30% in the first month after launch.",
    name: "David Kim",
    role: "VP Engineering, Kanei",
  },
  {
    text: "He doesn't just build what you ask for — he'll push back when something doesn't make sense and suggest a better approach. That kind of partnership is invaluable.",
    name: "Priya Sharma",
    role: "Founder, DataLens",
  },
  {
    text: "The automation Ramon built saves us 20+ hours a week. What used to be a manual nightmare now runs itself. Worth every penny.",
    name: "Tom Nguyen",
    role: "Operations, ScaleBase",
  },
  {
    text: "I've worked with a lot of developers. Ramon is one of the few who genuinely cares about the user experience, not just making things 'work'.",
    name: "Lisa Chang",
    role: "Head of Product, Flowstate",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  const colors = [
    "bg-primary-container", "bg-secondary-container", "bg-tertiary-container",
    "bg-primary-fixed", "bg-secondary-fixed",
  ];
  const colorIndex = name.length % colors.length;
  return (
    <div className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({
  className,
  items,
  duration = 10,
}: {
  className?: string;
  items: Testimonial[];
  duration?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        animate={reduced ? {} : { translateY: "-50%" }}
        transition={
          reduced
            ? {}
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {items.map((testimonial, i) => (
              <div
                className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container max-w-xs w-full"
                key={i}
              >
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <Avatar name={testimonial.name} />
                  <div className="flex flex-col">
                    <div className="font-medium text-on-surface tracking-tight leading-5 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 text-on-surface-variant tracking-tight text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <ParallaxLayer speed={0.1}>
        <div className="absolute inset-0 mesh-accent opacity-20 pointer-events-none" />
      </ParallaxLayer>

      <div className="max-w-screen-2xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
            What people say
          </h2>
        </FadeIn>
      </div>

      <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <FadeIn delay={0}>
          <TestimonialsColumn items={firstColumn} duration={15} />
        </FadeIn>
        <FadeIn delay={0.15} className="hidden md:block">
          <TestimonialsColumn
            items={secondColumn}
            duration={19}
          />
        </FadeIn>
        <FadeIn delay={0.3} className="hidden lg:block">
          <TestimonialsColumn
            items={thirdColumn}
            duration={17}
          />
        </FadeIn>
      </div>
    </section>
  );
}
