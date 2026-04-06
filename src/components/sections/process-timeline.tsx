"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "@/components/shared/motion";
import { FadeIn } from "@/components/shared/motion";
import { MaterialIcon } from "@/components/shared/material-icon";

const cinematicSpring = {
  type: "spring" as const,
  damping: 30,
  stiffness: 100,
  mass: 1.2,
};

const phases = [
  {
    icon: "search",
    title: "Discovery",
    description:
      "Deep dive into your domain, existing systems, and goals. I ask the questions others skip.",
  },
  {
    icon: "architecture",
    title: "Architecture",
    description:
      "System design before code — data models, API contracts, deployment strategy, and technology choices.",
  },
  {
    icon: "rocket_launch",
    title: "Build",
    description:
      "Rapid, iterative development with continuous deployment. You see progress weekly, not quarterly.",
  },
  {
    icon: "support",
    title: "Ship & Support",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. I don't disappear after launch.",
  },
];

// ── Static grid for reduced motion ─────────────────────────
function StaticProcess() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface-container">
      <div className="max-w-screen-2xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
            How I work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <FadeIn key={phase.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-outline-variant/30 bg-surface">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MaterialIcon
                    name={phase.icon}
                    className="text-primary text-2xl"
                    filled
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                  Phase {i + 1}
                </span>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Animated scroll-pinned timeline ────────────────────────
function AnimatedProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active phase (0-3)
  const activePhaseRaw = useTransform(scrollYProgress, [0, 1], [0, 3]);

  // Progress bar fill (0% - 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="min-h-[300vh] relative bg-surface-container"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 w-full">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
              How I work
            </h2>
          </div>

          {/* Timeline phases — horizontal layout */}
          <div className="relative">
            {/* Progress bar track + fill */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-outline-variant/20 rounded-full" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                style={{ width: progressWidth }}
              />
            </div>

            {/* Phase items */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {phases.map((phase, i) => (
                <PhaseItem
                  key={phase.title}
                  phase={phase}
                  index={i}
                  activePhaseRaw={activePhaseRaw}
                />
              ))}
            </div>
          </div>

          {/* Active phase description (large, prominent) */}
          <div className="relative mt-12 md:mt-16 text-center max-w-2xl mx-auto min-h-[120px]">
            {phases.map((phase, i) => (
              <PhaseDescription
                key={phase.title}
                phase={phase}
                index={i}
                activePhaseRaw={activePhaseRaw}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Individual phase node ──────────────────────────────────
function PhaseItem({
  phase,
  index,
  activePhaseRaw,
}: {
  phase: (typeof phases)[number];
  index: number;
  activePhaseRaw: ReturnType<typeof useTransform<number, number>>;
}) {
  // Determine if this phase is active based on distance from current scroll position
  const opacity = useTransform(activePhaseRaw, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    return 0.35;
  });

  const scale = useTransform(activePhaseRaw, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1.08;
    return 1;
  });

  const glowOpacity = useTransform(activePhaseRaw, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    return 0;
  });

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      style={{ opacity, scale }}
      transition={cinematicSpring}
    >
      {/* Phase dot / icon */}
      <div className="relative mb-4">
        {/* Orange glow behind active phase */}
        <motion.div
          className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
          style={{ opacity: glowOpacity }}
          transition={cinematicSpring}
        />
        <div className="relative w-14 h-14 rounded-full bg-surface border-2 border-outline-variant/30 flex items-center justify-center z-10">
          <MaterialIcon
            name={phase.icon}
            className="text-primary text-2xl"
            filled
          />
        </div>
      </div>

      {/* Phase label */}
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">
        Phase {index + 1}
      </span>
      <h3 className="text-lg font-headline font-bold text-on-surface">
        {phase.title}
      </h3>
    </motion.div>
  );
}

// ── Phase description that fades in/out ────────────────────
function PhaseDescription({
  phase,
  index,
  activePhaseRaw,
}: {
  phase: (typeof phases)[number];
  index: number;
  activePhaseRaw: ReturnType<typeof useTransform<number, number>>;
}) {
  const opacity = useTransform(activePhaseRaw, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.3) return 1;
    if (distance < 0.6) return 1 - (distance - 0.3) / 0.3;
    return 0;
  });

  const y = useTransform(activePhaseRaw, (latest: number) => {
    const distance = latest - index;
    if (Math.abs(distance) < 0.3) return 0;
    return distance > 0 ? -20 : 20;
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ opacity, y }}
      transition={cinematicSpring}
    >
      <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
        {phase.description}
      </p>
    </motion.div>
  );
}

// ── Exported component ─────────────────────────────────────
export function ProcessTimeline() {
  const reduced = useReducedMotion();

  if (reduced) {
    return <StaticProcess />;
  }

  return <AnimatedProcess />;
}
