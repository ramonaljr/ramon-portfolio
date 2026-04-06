"use client";

import { motion } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";

export function ResumeButton({ variant = "default" }: { variant?: "default" | "compact" }) {
  return (
    <motion.a
      href="/ramon-vallejera-resume.pdf"
      download
      className={variant === "compact"
        ? "flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
        : "inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full font-bold text-white border border-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(250,112,37,0.15)] active:scale-[0.97] transition-all duration-500 group"
      }
      whileHover={{ scale: variant === "compact" ? 1 : 1.02 }}
    >
      <motion.span
        className="inline-block"
        whileHover={{ y: 2 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <MaterialIcon name="download" className={variant === "compact" ? "text-base" : "text-lg"} />
      </motion.span>
      {variant === "compact" ? "CV" : "Download Resume"}
    </motion.a>
  );
}
