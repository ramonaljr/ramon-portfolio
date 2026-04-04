"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  type Transition,
} from "motion/react";
import { useRef, useEffect, useState, type ReactNode } from "react";

// ── Cinematic Spring Config ──────────────────────────────
const cinematicSpring: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 100,
  mass: 1.2,
};

// ── FadeIn ───────────────────────────────────────────────
// Scroll-triggered fade + rise. The workhorse animation.
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 60,
  duration,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition: Transition = duration
    ? { duration, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay }
    : { ...cinematicSpring, delay };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerChildren ──────────────────────────────────────
// Wraps children with sequential reveal delays.
export function StaggerChildren({
  children,
  className,
  stagger = 0.15,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerItem ──────────────────────────────────────────
// Child of StaggerChildren. Each item fades + rises.
export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 50,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: cinematicSpring,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── ParallaxLayer ────────────────────────────────────────
// Subtle vertical parallax driven by scroll position.
export function ParallaxLayer({
  children,
  className,
  speed = 0.2,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * 100 * speed, factor * -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// ── CountUp ──────────────────────────────────────────────
// Animates a number from 0 to target when scrolled into view.
export function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
    mass: 1,
  });
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (value) => {
      setDisplay(`${prefix}${value.toFixed(decimals)}${suffix}`);
    });
    return unsubscribe;
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

// ── ScaleIn ──────────────────────────────────────────────
// Scroll-triggered scale + fade. For dramatic reveals.
export function ScaleIn({
  children,
  className,
  delay = 0,
  initialScale = 0.9,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialScale?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ ...cinematicSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── TextReveal ───────────────────────────────────────────
// Reveals text line by line with a clip mask effect.
export function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...cinematicSpring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Re-export motion for direct use in components
export { motion, useScroll, useTransform, useInView };
