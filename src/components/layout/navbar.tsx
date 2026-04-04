"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-surface/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent backdrop-blur-md"
        )}
      >
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
          <a
            href="#"
            className={cn(
              "text-2xl font-headline italic transition-colors duration-500",
              scrolled ? "text-on-surface" : "text-white"
            )}
          >
            ramon.
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70",
                  scrolled
                    ? "text-on-surface/80 hover:text-primary"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={cn(
                "hidden md:inline-flex px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
                scrolled
                  ? "bg-primary-container text-on-primary-container hover:shadow-[0_0_30px_rgba(250,112,37,0.3)]"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              )}
            >
              Let&apos;s Talk
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                scrolled ? "text-on-surface" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              <MaterialIcon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
              }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-on-background/95 backdrop-blur-xl p-12 flex flex-col justify-center"
            >
              <nav className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      type: "spring",
                      damping: 25,
                      stiffness: 150,
                    }}
                    className="block text-3xl font-headline text-white/90 hover:text-primary-container transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 25 }}
                className="mt-16 inline-flex justify-center bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
