"use client";

import { SectionPill } from "@/components/shared/section-pill";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";

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
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center text-sm font-bold">
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-muted py-32">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <SectionPill label="Testimonials" />
          <h2 className="text-4xl md:text-5xl font-semibold text-center mt-4">
            What people say
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 6).map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="bg-white rounded-2xl p-8 border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <Avatar name={testimonial.name} />
                  <div className="flex flex-col">
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
