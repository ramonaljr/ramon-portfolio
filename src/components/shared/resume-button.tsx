"use client";

import { motion } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";

export function ResumeButton({ variant = "default" }: { variant?: "default" | "compact" }) {
  return (
    <motion.a
      href="/ramon-vallejera-resume.pdf"
      download
      className={variant === "compact"
        ? "flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
        : "inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border border-border hover:border-foreground/30 active:scale-[0.97] transition-all duration-500 group"
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
