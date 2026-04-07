"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ResumeButton } from "@/components/shared/resume-button";

const navLinks = [
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border backdrop-blur-sm bg-background/80"
            : "bg-background"
        )}
      >
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Ramon
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0"
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ResumeButton variant="compact" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full border border-foreground hover:bg-foreground hover:text-background active:scale-[0.97] transition-all duration-300"
              >
                Book A Call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full bg-background p-12 flex flex-col justify-center"
            >
              <nav className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      type: "spring",
                      damping: 25,
                      stiffness: 150,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block text-2xl font-semibold transition-colors",
                        isActive(link.href)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 25 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-16 inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Book A Call
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
