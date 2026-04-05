"use client";

import { motion } from "motion/react";

const cinematicSpring = {
  type: "spring" as const,
  damping: 30,
  stiffness: 100,
  mass: 1.2,
};

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 mesh-accent opacity-30" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematicSpring, delay: 0.1 }}
          className="text-white/60 font-bold uppercase tracking-widest text-xs"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...cinematicSpring, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-[1.1] tracking-tight mt-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...cinematicSpring, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mt-6 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
