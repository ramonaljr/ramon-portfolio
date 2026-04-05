"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { GlassCard } from "@/components/shared/glass-card";
import { CountUp } from "@/components/shared/motion";

const Galaxy = dynamic(() => import("@/components/Galaxy"), { ssr: false });

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
      <div className="text-white/50 text-xs mb-2">{label}</div>
      <div className={`text-2xl font-headline ${color}`}>
        <CountUp target={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
        <motion.div
          className={`${color.replace("text-", "bg-")} h-full rounded-full`}
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 2,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            delay: 1.4 + delay,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Galaxy WebGL Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          hueShift={25}
          speed={0.3}
          density={1.2}
          saturation={0.6}
          glowIntensity={0.4}
          starSpeed={0.3}
          twinkleIntensity={0.4}
          rotationSpeed={0.02}
          mouseRepulsion={true}
          repulsionStrength={1.5}
          transparent={false}
        />
      </div>

      {/* Subtle gradient overlay to warm the bottom */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1] mesh-accent opacity-30" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...cinematicSpring, delay: 0.2 }}
        >
          <GlassCard className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/80 text-sm font-medium mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to new projects
          </GlassCard>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...cinematicSpring, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-[1.08] tracking-tight mb-6"
        >
          I build smart software that actually works
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cinematicSpring, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Full-stack apps, AI integrations, and automation — I help teams
          ship products that feel effortless.
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
            className="group bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(250,112,37,0.4)] active:scale-[0.97] transition-all duration-500"
          >
            See what I&apos;ve built
          </a>
          <a
            href="#contact"
            className="glass-card text-white px-8 py-4 rounded-full font-bold text-lg border border-white/15 hover:border-white/30 hover:bg-white/10 active:scale-[0.97] transition-all duration-500"
          >
            Get in touch
          </a>
        </motion.div>

        {/* AI Console Widget */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...cinematicSpring, delay: 1.0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl p-px bg-gradient-to-br from-white/10 to-transparent">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[calc(2rem-1px)] p-8 text-left border border-white/5">
              {/* Console Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
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
                  color="text-secondary-container"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
