"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/shared/motion";

const navLinks = [
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ramon-vallejera-jr-mba-6976a3115/" },
  { label: "GitHub", href: "https://github.com/ramonaljr" },
];

export function Footer() {
  return (
    <FadeIn>
      <footer className="bg-[#0a0a0a] text-white rounded-t-[2rem] mx-4 lg:mx-8 overflow-hidden">
        {/* Top Row: Logo + Nav + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 lg:px-16 pt-16 pb-12">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Ramon
          </Link>
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Book A Call
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Middle Row: Socials + Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 lg:px-16 py-12 border-t border-white/10">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-center">
            <a href="mailto:hello@ramon.dev" className="text-lg md:text-2xl font-semibold hover:text-white/80 transition-colors">
              hello@ramon.dev
            </a>
          </div>
          <div className="hidden md:block" />
        </div>

        {/* Marquee Name */}
        <div className="overflow-hidden py-8 border-t border-white/10">
          <div className="animate-marquee whitespace-nowrap flex">
            <span className="text-[6rem] lg:text-[8rem] font-bold text-white/[0.07] leading-none mx-4">
              Ramon Vallejera
            </span>
            <span className="text-[6rem] lg:text-[8rem] font-bold text-white/[0.07] leading-none mx-4">
              Ramon Vallejera
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-8 lg:px-16 py-6 border-t border-white/10 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Ramon Vallejera
        </div>
      </footer>
    </FadeIn>
  );
}
