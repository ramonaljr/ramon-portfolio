"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-white/10 text-white shadow-lg border border-white/10 flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container active:scale-[0.92] transition-all duration-300"
          aria-label="Back to top"
        >
          <MaterialIcon name="arrow_upward" className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
