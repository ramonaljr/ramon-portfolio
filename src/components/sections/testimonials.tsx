"use client";

import React from "react";
import { motion } from "motion/react";
import { FadeIn, useReducedMotion } from "@/components/shared/motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Ramon delivered our AI-powered dashboard in half the time we expected. His full-stack skills meant we didn't need to hire three separate contractors.",
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah",
  },
  {
    text: "What stood out was how well he understood our business problem before writing a single line of code. The final product was exactly what we needed.",
    name: "Marcus Rivera",
    role: "Founder, Payvio",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus",
  },
  {
    text: "Ramon's attention to detail is incredible. The animations, the micro-interactions — everything feels polished and intentional.",
    name: "Aisha Patel",
    role: "Design Lead, Kalcio",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Aisha",
  },
  {
    text: "We needed someone who could handle both the React frontend and the Python AI backend. Ramon was the perfect fit — shipped a production-ready MVP in 6 weeks.",
    name: "James Park",
    role: "CEO, NeuralOps",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=James",
  },
  {
    text: "Great communicator. He kept us in the loop every step of the way and was always open to feedback. A rare find in freelance development.",
    name: "Elena Voss",
    role: "Product Manager, Husay",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Elena",
  },
  {
    text: "Ramon turned our clunky internal tool into a sleek, modern app. Our team's productivity jumped 30% in the first month after launch.",
    name: "David Kim",
    role: "VP Engineering, Kanei",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=David",
  },
  {
    text: "He doesn't just build what you ask for — he'll push back when something doesn't make sense and suggest a better approach. That kind of partnership is invaluable.",
    name: "Priya Sharma",
    role: "Founder, DataLens",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
  },
  {
    text: "The automation Ramon built saves us 20+ hours a week. What used to be a manual nightmare now runs itself. Worth every penny.",
    name: "Tom Nguyen",
    role: "Operations, ScaleBase",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Tom",
  },
  {
    text: "I've worked with a lot of developers. Ramon is one of the few who genuinely cares about the user experience, not just making things 'work'.",
    name: "Lisa Chang",
    role: "Head of Product, Flowstate",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Lisa",
  },
];

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
                  <img
                    width={40}
                    height={40}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full bg-surface-container-high"
                  />
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
    <section className="py-32 bg-surface overflow-hidden">
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
        <TestimonialsColumn items={firstColumn} duration={15} />
        <TestimonialsColumn
          items={secondColumn}
          duration={19}
          className="hidden md:block"
        />
        <TestimonialsColumn
          items={thirdColumn}
          duration={17}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
