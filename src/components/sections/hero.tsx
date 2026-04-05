"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/shared/glass-card";
import { CountUp, ParallaxLayer } from "@/components/shared/motion";

const cinematicSpring = {
  type: "spring" as const,
  damping: 30,
  stiffness: 100,
  mass: 1.2,
};

function ConsoleMetric({
  label,
  value,
  suffix,
  decimals,
  color,
  width,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  decimals: number;
  color: string;
  width: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...cinematicSpring, delay: 1.2 + delay }}
      className="p-4 rounded-xl bg-white/5 border border-white/5"
    >
      <div className="text-white/60 text-xs mb-2">{label}</div>
      <div className={`text-2xl font-headline ${color}`}>
        <CountUp target={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
        <motion.div
          className={`${color.replace("text-", "bg-")} h-full rounded-full`}
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 1.4 + delay }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax gradient layers */}
      <ParallaxLayer speed={0.15} className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.25} direction="down" className="absolute inset-0">
        <div className="absolute inset-0 mesh-accent opacity-40" />
      </ParallaxLayer>

      {/* Ambient glow orb */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary-container/20 blur-[160px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...cinematicSpring, delay: 0.2 }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/80 text-sm font-medium mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Projects
          </GlassCard>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...cinematicSpring, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-[1.08] tracking-tight mb-6"
        >
          I architect AI-powered systems that transform enterprises
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematicSpring, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Full-stack development and autonomous AI workflows — bespoke solutions
          for organizations ready to operate at a new scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematicSpring, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#work"
            className="group bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] hover:bg-orange-50 active:scale-[0.97] transition-all duration-500"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="glass-card text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:border-white/40 hover:bg-white/10 active:scale-[0.97] transition-all duration-500"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* AI Console Widget */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...cinematicSpring, delay: 1.0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-lg p-px bg-gradient-to-br from-white/20 to-transparent">
            <div className="bg-[#1c1c18]/40 backdrop-blur-3xl rounded-[calc(2rem-1px)] p-8 text-left border border-white/5">
              {/* Console Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-secondary-container" />
                  <div className="w-3 h-3 rounded-full bg-primary-container" />
                </div>
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                  AI Performance Console
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <ConsoleMetric
                  label="Neural Load"
                  value={84.2}
                  suffix="%"
                  decimals={1}
                  color="text-primary-container"
                  width="84%"
                  delay={0}
                />
                <ConsoleMetric
                  label="Automation Yield"
                  value={99.9}
                  suffix="%"
                  decimals={1}
                  color="text-secondary-fixed"
                  width="99%"
                  delay={0.15}
                />
                <ConsoleMetric
                  label="Decision Latency"
                  value={12}
                  suffix="ms"
                  decimals={0}
                  color="text-white"
                  width="12%"
                  delay={0.3}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
