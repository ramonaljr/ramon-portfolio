"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn } from "@/components/shared/motion";

const logEntries = [
  {
    time: "14:02:11",
    color: "text-primary-container",
    borderColor: "border-primary",
    message:
      "DISCOVERY: Mapping existing infrastructure. Identifying automation opportunities across departments...",
  },
  {
    time: "14:02:13",
    color: "text-secondary",
    borderColor: "border-secondary",
    message:
      "ANALYSIS: 98% probability of workflow optimization. Designing custom AI agent architecture...",
  },
  {
    time: "14:02:15",
    color: "text-outline",
    borderColor: "border-on-surface",
    message:
      "BUILD: Deploying autonomous pipeline v2. Integrating with existing CRM and ERP systems.",
  },
  {
    time: "14:02:18",
    color: "text-primary-container",
    borderColor: "border-primary-container",
    message: "RESULT: System live. Efficiency gain +14%. Zero manual intervention required.",
    highlight: true,
  },
];

const processSteps = [
  {
    icon: "search",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Discovery & Strategy",
    description:
      "I map your systems, identify high-impact automation opportunities, and define a clear roadmap.",
  },
  {
    icon: "auto_awesome",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "Build & Iterate",
    description:
      "Rapid prototyping with continuous feedback — self-healing pipelines that adapt in real-time.",
  },
];

function AnimatedLogEntry({
  entry,
  index,
  isInView,
}: {
  entry: (typeof logEntries)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: 20 }
      }
      transition={{
        delay: 0.3 + index * 0.4,
        type: "spring",
        damping: 25,
        stiffness: 120,
      }}
      className={`flex gap-4 p-3 rounded border-l-4 ${entry.borderColor} ${
        entry.highlight
          ? "bg-primary-container/10"
          : "bg-surface-container"
      }`}
    >
      <span className={entry.color}>[{entry.time}]</span>
      <span
        className={
          entry.highlight
            ? "text-on-primary-container font-bold"
            : "text-on-surface"
        }
      >
        {entry.message}
      </span>
    </motion.div>
  );
}

export function UnifiedLayer() {
  const logRef = useRef<HTMLDivElement>(null);
  const isLogInView = useInView(logRef, { once: true, amount: 0.3 });

  return (
    <section id="process" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column */}
        <FadeIn direction="left" distance={40}>
          <h2 className="text-5xl font-headline font-bold leading-tight mb-8">
            How I work — a unified layer for enterprise-wide automation
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            I believe in eliminating silos. My approach places a unified AI layer
            atop your existing tech stack — connective tissue that translates
            intent into action across every department.
          </p>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.title} delay={0.2 + i * 0.15}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/30 hover:border-primary-container hover:shadow-[0_0_30px_rgba(250,112,37,0.08)] transition-all duration-500">
                  <div
                    className={`w-10 h-10 rounded-full ${step.iconBg} flex items-center justify-center ${step.iconColor}`}
                  >
                    <MaterialIcon name={step.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Right Column — Animated Decision Log */}
        <FadeIn direction="right" distance={40} delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary-container/10 blur-[100px] rounded-full" />

            <div
              ref={logRef}
              className="relative glass-card rounded-lg p-6 shadow-xl border border-white"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-outline">
                  Real-time Decision Log
                </h4>
                <span className="text-xs font-mono text-secondary">
                  ID: NODE_7742
                </span>
              </div>

              <div className="space-y-4 font-mono text-[11px]">
                {logEntries.map((entry, i) => (
                  <AnimatedLogEntry
                    key={entry.time}
                    entry={entry}
                    index={i}
                    isInView={isLogInView}
                  />
                ))}
              </div>

              {/* Blinking cursor at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  isLogInView
                    ? { opacity: [0, 1, 0] }
                    : { opacity: 0 }
                }
                transition={{
                  delay: 2.2,
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-4 font-mono text-[11px] text-primary-container"
              >
                █
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
