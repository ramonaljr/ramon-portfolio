# Portfolio Cinematic Upgrade + Content Expansion — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the portfolio into a cinematic, content-rich experience with accessibility compliance — motion upgrades everywhere, new pages/sections, and quality fixes.

**Architecture:** Incremental enhancement of the existing Next.js 16 / React 19 / Tailwind 4 / Framer Motion stack. All new motion components extend `src/components/shared/motion.tsx`. New pages follow the existing `page.tsx` + `content.tsx` pattern. Use the `cinematic-frontend` skill for all motion work.

**Tech Stack:** Next.js 16.2.2, React 19, Tailwind CSS 4, motion/react (Framer Motion 12), OGL, Embla Carousel, Radix UI

---

## Task 1: prefers-reduced-motion (Accessibility Hard Gate)

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/shared/motion.tsx`
- Modify: `src/components/Galaxy.tsx`
- Modify: `src/components/sections/testimonials.tsx`
- Modify: `src/components/sections/logo-cloud.tsx`

**Step 1: Add reduced-motion CSS to globals.css**

Add at the end of `globals.css`:

```css
/* ── Accessibility: Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Step 2: Add useReducedMotion hook to motion.tsx**

Import `useReducedMotion` from `motion/react` and re-export it. Update `FadeIn`, `ScaleIn`, `TextReveal`, `StaggerChildren`, `StaggerItem`, `ParallaxLayer`, and `CountUp` to respect reduced motion:
- For `FadeIn`/`ScaleIn`/`TextReveal`: when reduced motion, render in final state (no initial transform, just `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}` with `duration: 0.01`)
- For `ParallaxLayer`: when reduced, return children without `motion.div` wrapper
- For `CountUp`: when reduced, display final value immediately without spring animation

**Step 3: Update Galaxy component**

In `Galaxy.tsx`, detect reduced motion via `window.matchMedia('(prefers-reduced-motion: reduce)')` and pass `disableAnimation={true}` to skip the RAF loop. Show a static first frame or just the background color.

**Step 4: Update infinite scroll animations**

In `testimonials.tsx`: wrap the `animate={{ translateY: "-50%" }}` in a check — if reduced motion, set `animate={{}}` and show all items static.

In `logo-cloud.tsx`: the marquee uses CSS `animate-marquee` which is already handled by the global CSS rule above.

**Step 5: Verify and commit**

```bash
npm run build
git add src/app/globals.css src/components/shared/motion.tsx src/components/Galaxy.tsx src/components/sections/testimonials.tsx
git commit -m "feat: add prefers-reduced-motion support across all motion components"
```

---

## Task 2: Scroll-Driven Section Entrances (Site-wide)

**Files:**
- Modify: `src/components/sections/logo-cloud.tsx`
- Modify: `src/components/sections/bento-features.tsx`
- Modify: `src/components/sections/featured-projects.tsx`
- Modify: `src/components/sections/mid-cta.tsx`
- Modify: `src/components/sections/testimonial.tsx`
- Modify: `src/components/sections/testimonials.tsx`
- Modify: `src/components/sections/final-cta.tsx`

**Step 1: Audit which sections already have entrances**

Currently have scroll entrances:
- ✅ Hero (staggered entrance)
- ✅ UnifiedLayer (FadeIn)
- ✅ About (FadeIn)
- ✅ Footer (FadeIn)
- ✅ BentoFeatures (StaggerChildren)
- ✅ FeaturedProjects (FadeIn on heading)

Missing or incomplete:
- ❌ LogoCloud — no section-level entrance
- ❌ MidCTA — parallax only, no section entrance
- ❌ Testimonial — has StaggerChildren but no section heading entrance
- ❌ Testimonials — FadeIn on heading but columns just appear
- ❌ FinalCTA — has ScaleIn but could be more dramatic

**Step 2: Add FadeIn wrappers to missing sections**

For each section listed above, wrap the section's primary content blocks in `FadeIn` or `ScaleIn` from `motion.tsx`. Follow the cinematic-frontend skill's decision router:
- `LogoCloud`: `FadeIn direction="up"` on the heading, then the marquee container
- `MidCTA`: `ScaleIn` on the sticky image wrapper
- `Testimonials`: `FadeIn` on each column with stagger (delay 0, 0.15, 0.3)
- `FinalCTA`: Increase drama — add `TextReveal` on the headline, `FadeIn` on the CTA buttons with delay

**Step 3: Verify and commit**

```bash
npm run build
git add src/components/sections/
git commit -m "feat: add scroll-triggered entrances to all homepage sections"
```

---

## Task 3: Page Transitions (View Transitions API)

**Files:**
- Modify: `next.config.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/components/layout/navbar.tsx`

**Step 1: Enable experimental viewTransition**

In `next.config.ts`, add:
```typescript
experimental: {
  viewTransition: true,
}
```

**Step 2: Wrap page content in ViewTransition**

In `src/app/layout.tsx`, import `ViewTransition` from `react` and wrap `{children}` in `<ViewTransition>`:
```tsx
import { ViewTransition } from 'react';
// ...
<body>
  <ViewTransition>{children}</ViewTransition>
</body>
```

**Step 3: Add CSS view-transition styles**

In `globals.css`, add cross-fade transition rules:
```css
/* ── View Transitions ── */
::view-transition-old(root) {
  animation: fade-out 200ms ease-in;
}
::view-transition-new(root) {
  animation: fade-in 300ms ease-out;
}
@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Step 4: Verify navigation transitions work**

```bash
npm run dev
# Navigate between pages and confirm smooth fade transitions
```

**Step 5: Commit**

```bash
git add next.config.ts src/app/layout.tsx src/app/globals.css
git commit -m "feat: add page transitions via View Transitions API"
```

---

## Task 4: Design Consistency Pass

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/final-cta.tsx`
- Modify: `src/components/sections/testimonial.tsx`
- Modify: Various section files for spacing

**Step 1: Standardize section spacing**

Audit all sections and normalize to `py-24 md:py-32` as the base. Currently there's a mix of `py-16`, `py-24`, `py-32`, `pt-32 pb-20`. Exceptions: Hero (keeps `min-h-screen`), Footer (keeps its own padding).

**Step 2: Standardize button variants**

Add utility classes to `globals.css`:
```css
/* ── Button Variants ── */
.btn-primary {
  @apply bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold hover:shadow-[0_0_40px_rgba(250,112,37,0.3)] active:scale-[0.97] transition-all duration-500;
}
.btn-secondary {
  @apply glass-card text-white px-8 py-4 rounded-full font-bold border border-white/15 hover:border-white/30 hover:bg-white/10 active:scale-[0.97] transition-all duration-500;
}
.btn-ghost {
  @apply text-primary font-bold hover:text-primary-container transition-colors duration-300;
}
```

**Step 3: Standardize card hover states**

Ensure all cards use the same hover pattern:
```
hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(250,112,37,0.08)] transition-all duration-500
```

**Step 4: Verify and commit**

```bash
npm run build
git add src/app/globals.css src/components/sections/
git commit -m "refactor: standardize spacing, buttons, and card hover states"
```

---

## Task 5: Case Study Enhancement

**Files:**
- Modify: `src/data/projects.ts` (extend Project interface + data)
- Modify: `src/app/work/[slug]/content.tsx`

**Step 1: Extend the Project interface**

Add new fields to `Project` in `projects.ts`:
```typescript
export interface Project {
  // ... existing fields
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string; description: string }[];
  learnings: string;
  screenshots?: string[];
}
```

**Step 2: Add content data for each project**

For each of the 4 projects, add:
- `challenge`: 2-3 sentences about the problem
- `solution`: 2-3 sentences about the approach
- `result`: 2-3 sentences about the outcome
- `metrics`: 2-3 key metrics per project (e.g., `{ label: "Processing Speed", value: "3x", description: "Faster than manual accounting" }`)
- `learnings`: 2-3 sentences of reflection

**Step 3: Add Challenge/Solution/Result section to case study page**

In `content.tsx`, add a new section after Overview:

```tsx
{/* Challenge / Solution / Result */}
<section className="py-24 md:py-32 bg-surface">
  <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
    <FadeIn>
      <span className="text-primary font-bold uppercase tracking-widest text-xs">Challenge</span>
      <p className="text-on-surface-variant text-lg leading-relaxed mt-4">{project.challenge}</p>
    </FadeIn>
    <FadeIn delay={0.15}>
      <span className="text-secondary font-bold uppercase tracking-widest text-xs">Solution</span>
      <p className="text-on-surface-variant text-lg leading-relaxed mt-4">{project.solution}</p>
    </FadeIn>
    <FadeIn delay={0.3}>
      <span className="text-tertiary font-bold uppercase tracking-widest text-xs">Result</span>
      <p className="text-on-surface-variant text-lg leading-relaxed mt-4">{project.result}</p>
    </FadeIn>
  </div>
</section>
```

**Step 4: Add Metrics block**

Add a metrics section with animated CountUp values:
```tsx
{/* Key Metrics */}
{project.metrics && project.metrics.length > 0 && (
  <section className="py-24 md:py-32 bg-surface-container">
    <div className="max-w-screen-2xl mx-auto px-8">
      <FadeIn className="mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-xs">Impact</span>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface">Key Metrics</h2>
      </FadeIn>
      <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {project.metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <div className="text-center p-8 rounded-xl border border-outline-variant/20 bg-surface">
              <div className="text-5xl font-headline font-bold text-primary mb-2">{metric.value}</div>
              <div className="font-bold text-on-surface mb-1">{metric.label}</div>
              <div className="text-sm text-on-surface-variant">{metric.description}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
)}
```

**Step 5: Add "What I Learned" closing section**

```tsx
{/* Learnings */}
{project.learnings && (
  <section className="py-24 md:py-32 bg-surface">
    <div className="max-w-3xl mx-auto px-8">
      <FadeIn>
        <span className="text-primary font-bold uppercase tracking-widest text-xs">Reflection</span>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4 text-on-surface mb-6">What I Learned</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">{project.learnings}</p>
      </FadeIn>
    </div>
  </section>
)}
```

**Step 6: Verify and commit**

```bash
npm run build
git add src/data/projects.ts src/app/work/\[slug\]/content.tsx
git commit -m "feat: enhance case study pages with challenge/solution/result, metrics, and learnings"
```

---

## Task 6: Process Section Upgrade (Homepage)

**Files:**
- Create: `src/components/sections/process-timeline.tsx`
- Modify: `src/app/page.tsx` (replace `UnifiedLayer` with `ProcessTimeline`)

**Step 1: Create the new ProcessTimeline component**

Build a scroll-triggered timeline that pins and scrubs through 4 phases. Use `useScroll` + `useTransform` from motion.tsx:
- Section is `min-h-[400vh]` (scroll runway for 4 phases)
- Inner container is `sticky top-0 h-screen` with centered content
- `scrollYProgress` maps to active phase index (0-3)
- Each phase has: icon, number, title, description
- Active phase scales up and glows; inactive phases are dimmed
- Horizontal progress bar scrubs across the 4 phases
- Use `cinematicSpring` transitions
- Phases: Discovery, Architecture, Build, Ship & Support (reuse data from services page)

**Step 2: Replace UnifiedLayer import in page.tsx**

```tsx
// Remove:
import { UnifiedLayer } from "@/components/sections/unified-layer";
// Add:
import { ProcessTimeline } from "@/components/sections/process-timeline";
// In JSX, replace <UnifiedLayer /> with <ProcessTimeline />
```

Keep `unified-layer.tsx` in place (don't delete — it's referenced by `id="process"` anchors). Transfer the `id="process"` to the new component.

**Step 3: Verify and commit**

```bash
npm run dev
# Scroll through the homepage and verify the pinned timeline works
npm run build
git add src/components/sections/process-timeline.tsx src/app/page.tsx
git commit -m "feat: replace process section with cinematic scroll-triggered timeline"
```

---

## Task 7: Parallax Depth Layers

**Files:**
- Modify: `src/components/sections/bento-features.tsx`
- Modify: `src/components/sections/about.tsx`
- Modify: `src/components/sections/final-cta.tsx`
- Modify: `src/components/sections/testimonials.tsx`

**Step 1: Add ParallaxLayer to decorative elements**

Import `ParallaxLayer` from `motion.tsx` and wrap:
- `BentoFeatures`: Wrap the section's `mesh-accent` overlay in `<ParallaxLayer speed={0.1} direction="up">`
- `About`: Add a subtle parallax gradient behind the stats area with `speed={0.15}`
- `FinalCTA`: Wrap the `hero-gradient` and `mesh-accent` divs in `<ParallaxLayer speed={0.2}>`
- `Testimonials`: Add a parallax accent behind the heading with `speed={0.1}`

Keep speeds low (0.1-0.2) — these are background atmospheric effects, not primary content.

**Step 2: Verify and commit**

```bash
npm run build
git add src/components/sections/
git commit -m "feat: add parallax depth layers to section backgrounds"
```

---

## Task 8: Hero Entrance Polish

**Files:**
- Modify: `src/components/sections/hero.tsx`

**Step 1: Update hero entrance values**

- Change all `filter: "blur(10px)"` to `filter: "blur(15px)"`
- Add Galaxy fade-in: wrap the Galaxy container in a `motion.div` with `initial={{ opacity: 0 }}` `animate={{ opacity: 1 }}` `transition={{ duration: 1.2, delay: 0.1 }}`
- Add pulse glow to scroll indicator: change the scroll indicator's inner dot to use `animate={{ y: [0, 8, 0], boxShadow: ["0 0 0px rgba(250,112,37,0)", "0 0 12px rgba(250,112,37,0.4)", "0 0 0px rgba(250,112,37,0)"] }}`

**Step 2: Verify and commit**

```bash
npm run build
git add src/components/sections/hero.tsx
git commit -m "feat: polish hero entrance with deeper blur and Galaxy fade-in"
```

---

## Task 9: Focus Indicators + Skip Link

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Add focus-visible styles**

In `globals.css`, update the base layer:
```css
/* ── Focus Indicators ── */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

Also remove or override the existing `outline-ring/50` base style to ensure the primary color focus ring takes precedence.

**Step 2: Add skip-to-content link**

In `layout.tsx`, add as the first child of `<body>`:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-container focus:text-on-primary-container focus:rounded-lg focus:font-bold"
>
  Skip to main content
</a>
```

Also add `id="main-content"` to the `<main>` tag in each page file (page.tsx, about/page.tsx, etc.).

**Step 3: Verify and commit**

```bash
npm run build
git add src/app/globals.css src/app/layout.tsx src/app/page.tsx src/app/about/page.tsx src/app/services/page.tsx src/app/work/page.tsx src/app/contact/page.tsx
git commit -m "feat: add focus indicators and skip-to-content link for accessibility"
```

---

## Task 10: Footer Completion

**Files:**
- Modify: `src/components/layout/footer.tsx`

**Step 1: Fix broken links**

- Remove "Twitter / X" from Connect column (or replace with real profile URL if available)
- Remove the `href="#"` globe icon or point it to `https://ramon.dev`
- Remove Privacy Policy and Terms of Service links (no pages exist), or replace with simple text: "© 2026 Ramon. Crafted with intention."

**Step 2: Verify and commit**

```bash
npm run build
git add src/components/layout/footer.tsx
git commit -m "fix: remove broken footer links and placeholder social icons"
```

---

## Task 11: Resume/CV Download

**Files:**
- Create: `public/ramon-vallejera-resume.pdf` (placeholder — user will add real PDF)
- Create: `src/components/shared/resume-button.tsx`
- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/app/about/content.tsx`
- Modify: `src/app/contact/form.tsx`

**Step 1: Create ResumeButton component**

```tsx
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
```

**Step 2: Add to navbar (desktop, compact variant)**

In `navbar.tsx`, add next to the "Let's Talk" button:
```tsx
<ResumeButton variant="compact" />
```

**Step 3: Add to about page (default variant)**

In `about/content.tsx`, add after the story heading.

**Step 4: Add to contact page sidebar**

In `contact/form.tsx`, add after the social links section.

**Step 5: Verify and commit**

```bash
npm run build
git add public/ src/components/shared/resume-button.tsx src/components/layout/navbar.tsx src/app/about/content.tsx src/app/contact/form.tsx
git commit -m "feat: add resume/CV download button to navbar, about, and contact pages"
```

---

## Task 12: Testimonials Authenticity Pass

**Files:**
- Modify: `src/components/sections/testimonials.tsx`

**Step 1: Replace DiceBear avatars with initial-based avatars**

Remove all `image` fields pointing to `api.dicebear.com`. Replace with a simple component that renders a colored circle with initials:

```tsx
function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  const colors = [
    "bg-primary-container", "bg-secondary-container", "bg-tertiary-container",
    "bg-primary-fixed", "bg-secondary-fixed",
  ];
  const colorIndex = name.length % colors.length;
  return (
    <div className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}
```

**Step 2: Add company names to roles**

Update each testimonial's `role` field to include a company name (they already do — e.g., "CTO, TechFlow"). Ensure consistency in format: "Title, Company".

**Step 3: Remove the `image` field from the Testimonial interface**

**Step 4: Verify and commit**

```bash
npm run build
git add src/components/sections/testimonials.tsx
git commit -m "refactor: replace AI-generated avatars with initial-based testimonial avatars"
```

---

## Task 13: FAQ Section (Services Page)

**Files:**
- Create: `src/components/sections/faq.tsx`
- Modify: `src/app/services/content.tsx`

**Step 1: Create FAQ component**

Build a collapsible FAQ using Radix UI Accordion (or simple state toggle):

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MaterialIcon } from "@/components/shared/material-icon";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Most projects ship in 4-8 weeks depending on complexity. I break work into weekly sprints with demos, so you see progress from week one — not a big reveal at the end.",
  },
  {
    question: "Do you work with existing codebases?",
    answer: "Absolutely. About half my projects involve improving or extending existing systems. I'll audit the codebase first, identify quick wins, and propose a roadmap before writing any code.",
  },
  {
    question: "How do you handle communication?",
    answer: "Async-first with Slack or email, plus weekly sync calls. I send daily progress updates with screenshots and deploy previews. You'll never wonder what I'm working on.",
  },
  {
    question: "What happens after launch?",
    answer: "I provide 30 days of post-launch support included in every project. After that, I offer ongoing maintenance retainers or ad-hoc support as needed. I also hand over full documentation and knowledge transfer.",
  },
  {
    question: "What's your tech stack preference?",
    answer: "I specialize in Next.js, React, Node.js, Supabase, and Python for AI work. But I adapt to your existing stack — the best technology is whatever solves your problem without creating new ones.",
  },
];
```

Use `AnimatePresence` for smooth expand/collapse with `cinematicSpring` transition.

**Step 2: Add FAQ to services page**

In `services/content.tsx`, add `<FAQ />` between the Process section and the CTA section.

**Step 3: Verify and commit**

```bash
npm run build
git add src/components/sections/faq.tsx src/app/services/content.tsx
git commit -m "feat: add FAQ section to services page"
```

---

## Task 14: Blog Stub

**Files:**
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/content.tsx`
- Create: `src/data/posts.ts`
- Modify: `src/components/layout/navbar.tsx` (add Blog link)
- Modify: `src/app/sitemap.ts`

**Step 1: Create posts data**

```typescript
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    slug: "building-ai-agents-that-actually-work",
    title: "Building AI Agents That Actually Work",
    excerpt: "Most AI agents fail because they try to do too much. Here's how I build focused agents that reliably solve one problem well.",
    category: "AI Engineering",
    date: "2026-03-15",
    readTime: "8 min read",
  },
  {
    slug: "why-i-chose-supabase-over-firebase",
    title: "Why I Chose Supabase Over Firebase",
    excerpt: "After building 10+ apps on both platforms, here's why Supabase wins for serious projects — and where Firebase still has the edge.",
    category: "Architecture",
    date: "2026-02-28",
    readTime: "6 min read",
  },
  {
    slug: "the-monorepo-playbook",
    title: "The Monorepo Playbook for Full-Stack Apps",
    excerpt: "How I structure Turborepo projects with shared packages to ship web + mobile from a single codebase without losing my mind.",
    category: "Full-Stack",
    date: "2026-02-10",
    readTime: "10 min read",
  },
];
```

**Step 2: Create blog page with card grid**

Use `PageHeader`, `FadeIn`, `StaggerChildren` for the layout. Each card shows title, excerpt, category tag, date, read time. Cards link to `#` for now (no individual blog post pages yet — just the index).

**Step 3: Add Blog to navbar**

Add `{ label: "Blog", href: "/blog" }` to `navLinks` in `navbar.tsx`.

**Step 4: Add to sitemap**

Add `/blog` to `sitemap.ts` with `changeFrequency: "weekly"` and `priority: 0.7`.

**Step 5: Verify and commit**

```bash
npm run build
git add src/app/blog/ src/data/posts.ts src/components/layout/navbar.tsx src/app/sitemap.ts
git commit -m "feat: add blog page stub with placeholder articles"
```

---

## Task 15: Skills/Tech Stack Visual (About Page)

**Files:**
- Create: `src/components/sections/tech-stack-grid.tsx`
- Modify: `src/app/about/content.tsx`

**Step 1: Create interactive tech stack grid**

Replace the current pill-list skills grid with an interactive grouped grid:
- 6 categories in a responsive grid
- Each category card has an icon, title, and tech items
- Tech items are clickable chips that expand on hover to show a brief description
- Cards use `StaggerChildren` entrance
- Each chip has the `group-hover:scale-105` micro-interaction
- Category cards have the standardized card hover state

**Step 2: Replace the existing skills section in about/content.tsx**

Import the new `TechStackGrid` component and swap it in.

**Step 3: Verify and commit**

```bash
npm run build
git add src/components/sections/tech-stack-grid.tsx src/app/about/content.tsx
git commit -m "feat: replace skills pill list with interactive tech stack grid on about page"
```

---

## Task 16: Magnetic CTA Buttons

**Files:**
- Create: `src/components/shared/magnetic-button.tsx`
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/components/sections/final-cta.tsx`

**Step 1: Create MagneticButton component**

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export function MagneticButton({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.a> & { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.1, // 10% pull strength
      y: (e.clientY - centerY) * 0.1,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
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
```

**Step 2: Apply to hero CTAs and final CTA buttons**

Replace the `<a>` tags on primary CTA buttons with `<MagneticButton>`.

**Step 3: Verify and commit**

```bash
npm run build
git add src/components/shared/magnetic-button.tsx src/components/sections/hero.tsx src/components/sections/final-cta.tsx
git commit -m "feat: add magnetic hover effect to primary CTA buttons"
```

---

## Task 17: OG Images

**Files:**
- Create: `src/app/opengraph-image.tsx`
- Create: `src/app/work/[slug]/opengraph-image.tsx`

**Step 1: Create root OG image**

Use Next.js's built-in OG image generation (`ImageResponse` from `next/og`):

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ramon Vallejera — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}>
        <div style={{ color: "#fa7025", fontSize: 24, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          ramon.dev
        </div>
        <div style={{ color: "#f0ede8", fontSize: 64, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>
          Full-Stack Developer
          <br />& AI Engineer
        </div>
        <div style={{ color: "#9a9590", fontSize: 24, marginTop: 20 }}>
          React · Next.js · Node.js · Python · AI Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
```

**Step 2: Create per-project OG images**

Similar but with project title, category, and tagline dynamically loaded from `projects.ts`.

**Step 3: Verify and commit**

```bash
npm run build
git add src/app/opengraph-image.tsx src/app/work/\[slug\]/opengraph-image.tsx
git commit -m "feat: add dynamic Open Graph images for social sharing"
```

---

## Execution Summary

| Task | Type | Files | Est. Complexity |
|---|---|---|---|
| 1. prefers-reduced-motion | Accessibility | 5 | Medium |
| 2. Section entrances | Cinematic | 7 | Low |
| 3. Page transitions | Cinematic | 3 | Low |
| 4. Design consistency | Quality | 4+ | Medium |
| 5. Case study enhancement | Content | 2 | High |
| 6. Process timeline | Cinematic + Content | 2 | High |
| 7. Parallax depth | Cinematic | 4 | Low |
| 8. Hero polish | Cinematic | 1 | Low |
| 9. Focus + skip link | Accessibility | 7 | Low |
| 10. Footer completion | Quality | 1 | Low |
| 11. Resume download | Feature | 5 | Medium |
| 12. Testimonials fix | Content | 1 | Low |
| 13. FAQ section | Content | 2 | Medium |
| 14. Blog stub | Feature | 5 | Medium |
| 15. Tech stack visual | Feature | 2 | Medium |
| 16. Magnetic buttons | Cinematic | 3 | Low |
| 17. OG images | Quality | 2 | Medium |

**Total: 17 tasks, ~55 files touched**

Tasks 1-4 are independent and can be parallelized. Tasks 5-8 are independent. Tasks 9-17 are independent. Maximum parallelism: 4 agents at a time within each batch.
