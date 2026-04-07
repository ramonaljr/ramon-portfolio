"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CountUp } from "@/components/shared/motion";
import { ArrowDown } from "lucide-react";

const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            {/* Vertical label */}
            <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase [writing-mode:vertical-rl] rotate-180">
                Web Developer
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold">
                  <CountUp target={50} suffix="+" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Projects completed
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <CountUp target={10} suffix="+" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Clients served
                </p>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight">
              Hello
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              — I&apos;m Ramon, a web development wizard
            </p>

            {/* Scroll prompt */}
            <motion.div
              className="mt-16 flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Scroll down
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="relative lg:h-[80vh] h-[50vh] lg:-mr-8"
          >
            <Image
              src="/ramon-photo.jpeg"
              alt="Ramon Vallejera — Full-Stack Developer"
              fill
              className="object-cover object-top grayscale"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
