"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export function MagneticButton({
  children,
  className,
  href,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "ref">) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.1,
      y: (e.clientY - centerY) * 0.1,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
