"use client";

import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn } from "@/components/shared/motion";

const footerColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Automation", href: "/services" },
      { label: "Full-Stack Development", href: "/services" },
      { label: "Scalable Systems", href: "/services" },
      { label: "Intelligent Workflows", href: "/services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:hello@ramon.dev" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ramon-vallejera-jr-mba-6976a3115/" },
      { label: "GitHub", href: "https://github.com/ramonaljr" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 text-white/90 font-serif text-sm tracking-wide leading-relaxed shadow-2xl bg-[#0f0f0f] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-accent opacity-30 pointer-events-none" />

      {/* Main Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12 py-24 max-w-screen-2xl mx-auto relative z-10">
        {/* Brand Column */}
        <FadeIn direction="up" className="col-span-2 md:col-span-1">
          <div className="text-2xl font-headline italic text-white mb-8">
            ramon.
          </div>
          <p className="max-w-xs mb-8 text-white/80">
            Full-stack developer &amp; AI engineer based in the Philippines.
            Let&apos;s build something great.
          </p>
          <div className="flex gap-4">
            <a
              href="https://ramon.dev"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <MaterialIcon name="public" className="text-[16px]" />
            </a>
            <a
              href="mailto:hello@ramon.dev"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <MaterialIcon name="mail" className="text-[16px]" />
            </a>
          </div>
        </FadeIn>

        {/* Link Columns */}
        {footerColumns.map((column, i) => (
          <FadeIn key={column.title} delay={0.1 * (i + 1)}>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">
              {column.title}
            </h4>
            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-orange-200 transition-all duration-300 inline-block hover:translate-x-1 text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-8 px-12 max-w-screen-2xl mx-auto flex items-center justify-center text-[10px] uppercase tracking-[0.2em] relative z-10 border-white/20 text-white/60">
        <span>
          &copy; {new Date().getFullYear()} Ramon. Crafted with intention.
        </span>
      </div>
    </footer>
  );
}
