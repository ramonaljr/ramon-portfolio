"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

const IMG_PADDING = 12;

function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]/60"
        style={{ opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-lg md:text-xl font-bold uppercase tracking-widest text-primary-container">
        Ready to start?
      </p>
      <p className="text-center text-4xl font-headline font-bold md:text-7xl max-w-4xl px-8">
        Let&apos;s build something great
      </p>
    </motion.div>
  );
}

export function MidCTA() {
  return (
    <section className="bg-surface">
      <div>
        <div
          style={{
            paddingLeft: IMG_PADDING,
            paddingRight: IMG_PADDING,
          }}
        >
          <div className="relative h-[150vh]">
            <StickyImage imgUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" />
            <OverlayCopy />
          </div>
          <div className="mx-auto max-w-screen-xl px-4 pb-24 pt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
              <div className="col-span-1 md:col-span-7">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mb-4">
                  Got something you want to build?
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  I&apos;m taking on new projects — whether it&apos;s a full
                  product build, an AI feature, or just figuring out the right
                  architecture. Let&apos;s talk about what you need.
                </p>
              </div>
              <div className="col-span-1 md:col-span-5 flex md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(250,112,37,0.3)] active:scale-[0.97] transition-all duration-500"
                >
                  Let&apos;s chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
