# Finox-Inspired Minimal Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Completely reskin the portfolio from dark/animation-heavy to a light, minimal, Finox-inspired design while retaining all pages, sections, data, and routing.

**Architecture:** Full teardown of the visual layer (globals.css, fonts, every component) while preserving the data layer (`src/data/*`), routing (`src/app/*/page.tsx`), server actions (`contact/action.ts`), and utility functions (`src/lib/utils.ts`). Components are rebuilt in-place — same file paths, new markup/styles.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4 (inline @theme in globals.css), Framer Motion (scaled back), Embla Carousel, Lucide React icons, shadcn/ui primitives.

**Reference:** https://finox.webflow.io/ — screenshot archive in project root (finox-*.png)

---

## Phase 1: Foundation (Theme, Fonts, Cleanup)

### Task 1: Rewrite globals.css theme tokens

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Replace the entire @theme block (lines 7-118) with the new light color palette**

Replace the `@theme inline` block with:

```css
@theme inline {
  --font-sans: var(--font-manrope), "Manrope", sans-serif;
  --font-headline: var(--font-manrope), "Manrope", sans-serif;
  --font-body: var(--font-manrope), "Manrope", sans-serif;
  --font-label: var(--font-manrope), "Manrope", sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;

  --color-background: #ffffff;
  --color-foreground: #1a1a1a;
  --color-card: #ffffff;
  --color-card-foreground: #1a1a1a;
  --color-popover: #ffffff;
  --color-popover-foreground: #1a1a1a;
  --color-primary: #1a1a1a;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f5f5f5;
  --color-secondary-foreground: #1a1a1a;
  --color-muted: #f5f5f5;
  --color-muted-foreground: #6b6b6b;
  --color-accent: #f5f5f5;
  --color-accent-foreground: #1a1a1a;
  --color-destructive: #ef4444;
  --color-border: #e5e5e5;
  --color-input: #e5e5e5;
  --color-ring: #1a1a1a;

  --color-surface: #f5f5f5;
  --color-on-surface: #1a1a1a;
  --color-on-surface-variant: #6b6b6b;

  --color-footer-bg: #0a0a0a;
  --color-footer-fg: #ffffff;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;

  --color-chart-1: #1a1a1a;
  --color-chart-2: #6b6b6b;
  --color-chart-3: #a3a3a3;
  --color-chart-4: #d4d4d4;
  --color-chart-5: #f5f5f5;
}
```

**Step 2: Replace custom utility classes after the @theme block**

Remove `.glass-card`, `.hero-gradient`, `.mesh-accent`, `.btn-primary`, `.btn-secondary`, `.btn-ghost` and replace with:

```css
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-border);
  }
  body {
    font-family: var(--font-body);
    color: var(--color-foreground);
    background-color: var(--color-background);
  }
}

/* Section pill badge (e.g., "● Portfolio") */
.section-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--color-foreground);
}
.section-pill::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: var(--color-foreground);
}

/* Marquee animation for footer */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* View transitions */
::view-transition-old(root) {
  animation: fade-out 0.2s ease-in-out;
}
::view-transition-new(root) {
  animation: fade-in 0.2s ease-in-out;
}
@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}
```

**Step 3: Verify the dev server starts without errors**

Run: `pnpm dev`
Expected: compiles successfully, page renders with white background

**Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "redesign: replace dark theme with light minimal color system"
```

---

### Task 2: Update layout.tsx — remove Newsreader, clean up fonts

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Remove the Newsreader font import and config**

Remove the `Newsreader` import and its configuration object. Keep only `Manrope`. Remove `newsreader.variable` from the `<html>` className.

The font section should become:

```typescript
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
```

And the `<html>` tag should use:

```tsx
className={`${manrope.variable} antialiased`}
```

**Step 2: Verify the page renders with Manrope only**

Run: `pnpm dev`
Expected: all text renders in Manrope, no Newsreader serif visible

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "redesign: remove Newsreader serif font, use Manrope only"
```

---

### Task 3: Remove Galaxy.tsx and uninstall OGL

**Files:**
- Delete: `src/components/Galaxy.tsx`
- Modify: `package.json` (via pnpm remove)

**Step 1: Delete the Galaxy component**

```bash
rm src/components/Galaxy.tsx
```

**Step 2: Uninstall OGL**

```bash
pnpm remove ogl
```

**Step 3: Verify no remaining imports of Galaxy or ogl**

Search the codebase for `Galaxy` and `ogl` imports. Fix any broken references (likely in `src/components/sections/hero.tsx` — this will be fully rewritten in Task 7, so just comment out or stub the import for now).

**Step 4: Commit**

```bash
git add -A
git commit -m "redesign: remove Galaxy WebGL component and ogl dependency"
```

---

### Task 4: Simplify motion.tsx — remove heavy animations, keep essentials

**Files:**
- Modify: `src/components/shared/motion.tsx`

**Step 1: Rewrite motion.tsx to keep only FadeIn, StaggerChildren, StaggerItem, CountUp**

Remove `ParallaxLayer`, `ScaleIn`, `TextReveal`, and the `cinematicSpring` config. Replace with a simpler, Finox-appropriate transition:

```typescript
"use client";

import {
  motion,
  useReducedMotion as useReducedMotionHook,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export { motion };

export function useReducedMotion() {
  return useReducedMotionHook();
}

const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

// --- FadeIn: scroll-triggered fade + directional slide ---
type FadeDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: FadeDirection;
  delay?: number;
  className?: string;
  duration?: number;
}

const directionOffset: Record<FadeDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
  duration,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ ...defaultTransition, delay, duration: duration ?? defaultTransition.duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- StaggerChildren + StaggerItem ---
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerChildren({ children, className, staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: defaultTransition },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- CountUp: animated number counter ---
interface CountUpProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({ target, suffix = "", className, duration = 2 }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{target}{suffix}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : undefined}
    >
      {isInView ? (
        <CountUpInner target={target} suffix={suffix} duration={duration} />
      ) : (
        <>0{suffix}</>
      )}
    </motion.span>
  );
}

function CountUpInner({ target, suffix, duration }: { target: number; suffix: string; duration: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (node) node.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [target, suffix, duration]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

import React from "react";
```

**Step 2: Verify no compile errors**

Run: `pnpm dev`
Expected: compiles successfully (some sections may look broken until they're rewritten — that's expected)

**Step 3: Commit**

```bash
git add src/components/shared/motion.tsx
git commit -m "redesign: simplify motion library to FadeIn, Stagger, CountUp only"
```

---

### Task 5: Remove unused shared components

**Files:**
- Delete: `src/components/shared/glass-card.tsx`
- Delete: `src/components/shared/magnetic-button.tsx`
- Modify: any files importing them (stub/remove imports)

**Step 1: Delete the files**

```bash
rm src/components/shared/glass-card.tsx
rm src/components/shared/magnetic-button.tsx
```

**Step 2: Search for and fix broken imports**

Search for `glass-card` and `magnetic-button` across the codebase. Remove or replace their usage. The hero.tsx will be fully rewritten in Task 7, so if it's the only consumer, just note it.

**Step 3: Commit**

```bash
git add -A
git commit -m "redesign: remove glass-card and magnetic-button components"
```

---

### Task 6: Create SectionPill shared component

**Files:**
- Create: `src/components/shared/section-pill.tsx`

**Step 1: Create the component**

```tsx
export function SectionPill({ label }: { label: string }) {
  return <span className="section-pill">{label}</span>;
}
```

This uses the `.section-pill` CSS class defined in globals.css (Task 1).

**Step 2: Commit**

```bash
git add src/components/shared/section-pill.tsx
git commit -m "redesign: add SectionPill component for Finox-style section labels"
```

---

## Phase 2: Layout Components (Navbar + Footer)

### Task 7: Rewrite Navbar

**Files:**
- Modify: `src/components/layout/navbar.tsx`

**Step 1: Rewrite the navbar component**

Read the current `navbar.tsx` (181 lines) to understand the navigation links and mobile menu logic. Rewrite it with:

- White background, no border by default
- On scroll: add `border-b border-border` and `backdrop-blur-sm`
- Logo: your name in bold sans-serif (left)
- Nav links: About Me, Portfolio, Services, Blog (center-left area)
- CTA: "Book A Call ↗" outline button (right, links to `/contact`)
- Mobile: hamburger icon → full-screen overlay with links
- Keep the existing `usePathname()` active link detection
- Keep the resume button logic if it exists

Style guide:
- Nav links: `text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`
- CTA button: `border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors`
- Sticky: `fixed top-0 w-full z-50`

**Step 2: Verify navbar renders correctly**

Run: `pnpm dev`
Expected: white navbar, links visible, CTA button, scroll behavior works

**Step 3: Commit**

```bash
git add src/components/layout/navbar.tsx
git commit -m "redesign: rewrite navbar with light minimal Finox style"
```

---

### Task 8: Rewrite Footer

**Files:**
- Modify: `src/components/layout/footer.tsx`

**Step 1: Rewrite the footer**

Read current `footer.tsx` (97 lines) to preserve social links and navigation. Rebuild with Finox structure:

- Black background (`bg-[#0a0a0a]`) with rounded top corners (`rounded-t-3xl`)
- **Top row**: Logo/name (left), nav links (center), "Book A Call ↗" outline button (right, white border)
- **Middle row**: Social links left (LinkedIn, GitHub), phone + email center, more links right
- **Marquee row**: Large semi-transparent name text scrolling horizontally (`text-[8rem] font-bold text-white/10 whitespace-nowrap`)
- **Bottom row**: `© Ramon Vallejera` + year

All text white, links with `hover:text-white/80` transition.

**Step 2: Verify footer renders at bottom of pages**

Run: `pnpm dev`
Expected: dark footer with rounded top corners, marquee text, proper layout

**Step 3: Commit**

```bash
git add src/components/layout/footer.tsx
git commit -m "redesign: rewrite footer with dark Finox style and name marquee"
```

---

## Phase 3: Homepage Sections

### Task 9: Rewrite Hero section (split layout)

**Files:**
- Modify: `src/components/sections/hero.tsx`

**Step 1: Rewrite hero.tsx**

Read current `hero.tsx` (229 lines). Remove Galaxy background, AI Console widget, complex animations. Rebuild as Finox split layout:

- **Full viewport height** (`min-h-screen`)
- **Left side** (~55% width):
  - Vertical text "Web Developer" rotated 90deg along left edge (`writing-mode: vertical-rl`, `text-sm tracking-widest text-muted-foreground`)
  - Stat counters: "50+" Projects completed, "10+" Clients served — use `CountUp` from motion.tsx
  - Massive "Hello" heading (`text-[clamp(4rem,10vw,8rem)] font-bold leading-none`)
  - Subtitle: "— I'm Ramon, a web development wizard" (`text-lg text-muted-foreground`)
  - "Scroll down ↓" at bottom (`text-sm text-muted-foreground`)
- **Right side** (~45% width):
  - Large professional photo, cropped to fill the container
  - Use the existing photo from PersonalIntro or a new one at `/public/`
- **Animation**: `FadeIn direction="right"` on text, `FadeIn direction="left"` on photo

**Step 2: Verify hero renders**

Run: `pnpm dev`
Expected: split layout hero with text left, photo right, full viewport height

**Step 3: Commit**

```bash
git add src/components/sections/hero.tsx
git commit -m "redesign: rewrite hero as Finox-style split layout with stats"
```

---

### Task 10: Rewrite PersonalIntro section

**Files:**
- Modify: `src/components/sections/personal-intro.tsx`

**Step 1: Rewrite as Finox "About Me" preview**

Read current `personal-intro.tsx` (77 lines). Rebuild with:

- **Section padding**: `py-32`
- **Left column**: "About Me" heading (`text-4xl font-semibold`), paragraph about your approach (`text-muted-foreground text-lg leading-relaxed`), decorative arrow graphic (optional)
- **Right column**: Asymmetric layout with:
  - Stat callout card (rounded, surface bg): icon + "320%" large number + "Average increase in client engagement" label
  - Photo (smaller, within card)
  - Two bullet points with icons describing your strengths
- Wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/components/sections/personal-intro.tsx
git commit -m "redesign: rewrite personal intro as Finox about preview"
```

---

### Task 11: Rewrite LogoCloud section

**Files:**
- Modify: `src/components/sections/logo-cloud.tsx`

**Step 1: Restyle on white background**

Read current `logo-cloud.tsx` (55 lines). Keep the existing logos/icons, but restyle:

- White background, `py-20`
- Logos in a horizontal flex row, centered, `gap-12`
- Each logo: `grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300`
- Wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/components/sections/logo-cloud.tsx
git commit -m "redesign: restyle logo cloud for light minimal aesthetic"
```

---

### Task 12: Rewrite BentoFeatures → Services grid

**Files:**
- Modify: `src/components/sections/bento-features.tsx`

**Step 1: Rebuild as 3x2 (or 2x2) Finox-style service cards**

Read current `bento-features.tsx` (125 lines) to get the existing service data (Scalable Systems, AI & Automation, Full-Stack Development, Workflow Integration). Rebuild:

- Surface background section (`bg-muted py-32`)
- `SectionPill` with "Services"
- Heading: "What I Do Best" (`text-4xl font-semibold text-center`)
- Subtitle: brief description (`text-muted-foreground text-center`)
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (if you have 6 services) or `lg:grid-cols-2` (if 4)
- Each card: white bg, `rounded-2xl p-8`, description text at top (`text-sm text-muted-foreground`), large icon in center (use Lucide icons, sized `w-16 h-16`), service name at bottom (`text-xl font-semibold`)
- Cards wrapped in `StaggerChildren` + `StaggerItem`

**Step 2: Commit**

```bash
git add src/components/sections/bento-features.tsx
git commit -m "redesign: rebuild services as Finox-style card grid"
```

---

### Task 13: Restyle FeaturedProjects carousel

**Files:**
- Modify: `src/components/sections/featured-projects.tsx`

**Step 1: Restyle the carousel**

Read current `featured-projects.tsx` (141 lines). Keep Embla carousel logic, restyle:

- White background, `py-32`
- `SectionPill` with "Portfolio"
- Heading: "Selected Work" (`text-4xl font-semibold`)
- Carousel slides: large project image (`rounded-xl overflow-hidden aspect-[16/10]`), project name below (`text-2xl font-semibold mt-4`), category label (`text-sm text-muted-foreground`)
- Brand/logo icon next to category if available
- Navigation arrows: circular buttons with `border border-border`, arrow icon inside
- Wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/components/sections/featured-projects.tsx
git commit -m "redesign: restyle project carousel with Finox aesthetic"
```

---

### Task 14: Rewrite ProcessTimeline → Experiences-style rows

**Files:**
- Modify: `src/components/sections/process-timeline.tsx`

**Step 1: Rewrite as horizontal rows**

Read current `process-timeline.tsx` (272 lines) to get the 4 phases (Discovery, Architecture, Build, Ship & Support). Remove scroll-pinned animation. Rebuild as Finox Experiences layout:

- White background, `py-32`
- `SectionPill` with "Process"
- Each phase is a horizontal row with `border-b border-border py-8`:
  - Left: phase name (`text-2xl font-semibold`) + phase number or subtitle (`text-sm text-muted-foreground`)
  - Center: brief description (`text-muted-foreground`)
  - Right: skill/tech tags as pills (`bg-muted rounded-full px-4 py-1.5 text-sm`)
- Rows wrapped in `StaggerChildren` + `StaggerItem`

**Step 2: Commit**

```bash
git add src/components/sections/process-timeline.tsx
git commit -m "redesign: rebuild process timeline as Finox-style horizontal rows"
```

---

### Task 15: Restyle About section

**Files:**
- Modify: `src/components/sections/about.tsx`

**Step 1: Restyle with light minimal look**

Read current `about.tsx` (72 lines). Restyle:

- Surface background (`bg-muted py-32`)
- Stat numbers: large `text-5xl font-bold` with `CountUp`, labels below in `text-sm text-muted-foreground`
- Bio text alongside stats
- Clean grid layout, wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/components/sections/about.tsx
git commit -m "redesign: restyle about section with light minimal design"
```

---

### Task 16: Rewrite Testimonial (single) section

**Files:**
- Modify: `src/components/sections/testimonial.tsx`

**Step 1: Restyle as light card**

Read current `testimonial.tsx` (63 lines). Restyle:

- White background, `py-32`
- `SectionPill` with "Why Work With Me"
- 3 value prop cards in a row: white bg, `border border-border rounded-2xl p-8`
- Keep existing content (shipped fast, full-stack, details)
- Wrapped in `StaggerChildren` + `StaggerItem`

**Step 2: Commit**

```bash
git add src/components/sections/testimonial.tsx
git commit -m "redesign: restyle testimonial value props with light cards"
```

---

### Task 17: Rewrite Testimonials (multi) section

**Files:**
- Modify: `src/components/sections/testimonials.tsx`

**Step 1: Rebuild as static grid**

Read current `testimonials.tsx` (173 lines) to get testimonial data. Remove auto-scrolling marquee. Rebuild:

- Surface background (`bg-muted py-32`)
- `SectionPill` with "Testimonials"
- Heading: "What Clients Say" (`text-4xl font-semibold text-center`)
- Static 3-column grid of testimonial cards:
  - White bg, `rounded-2xl p-8 border border-border`
  - Quote text, name, role
  - Avatar initials circle (keep existing color scheme)
- Wrapped in `StaggerChildren`

**Step 2: Commit**

```bash
git add src/components/sections/testimonials.tsx
git commit -m "redesign: rebuild testimonials as static grid, remove auto-scroll"
```

---

### Task 18: Rewrite MidCTA and FinalCTA

**Files:**
- Modify: `src/components/sections/mid-cta.tsx`
- Modify: `src/components/sections/final-cta.tsx`

**Step 1: Rebuild MidCTA as dark banner**

Read current `mid-cta.tsx` (107 lines). Rebuild as Finox consultation banner:

- Dark background image overlay (`bg-[#0a0a0a] rounded-3xl mx-4 lg:mx-8 overflow-hidden relative`)
- Centered text: subtitle in smaller text, heading (`text-3xl md:text-5xl font-semibold text-white text-center`), paragraph (`text-white/70 text-center`)
- "Let's talk ↗" button (white outline, `rounded-full border-white text-white`)
- `py-24` internal padding
- Wrapped in `FadeIn`

**Step 2: Rebuild FinalCTA with same style**

Read current `final-cta.tsx` (51 lines). Apply same dark banner pattern, different copy.

**Step 3: Commit**

```bash
git add src/components/sections/mid-cta.tsx src/components/sections/final-cta.tsx
git commit -m "redesign: rebuild CTA sections as dark overlay banners"
```

---

### Task 19: Add Blog preview section to homepage (if not already present)

**Files:**
- Check: `src/app/page.tsx` — does it already include a blog section?
- Create if needed: `src/components/sections/blog-preview.tsx`

**Step 1: Check if homepage includes blog**

Read `src/app/page.tsx`. If there's no blog section, create one. If one exists in the section composition, restyle it.

**Step 2: Build blog preview**

- Surface background (`bg-muted py-32`)
- `SectionPill` with "Blog"
- Heading: "Dev Insights & Trends" (`text-4xl font-semibold text-center`)
- 2x2 grid of blog cards using data from `src/data/posts.ts`:
  - White bg, `rounded-2xl overflow-hidden border border-border`
  - Placeholder image area (`bg-muted-foreground/10 aspect-[16/10]`)
  - Category tag pill, read time, title
  - Link to `/blog`
- Wrapped in `StaggerChildren`

**Step 3: Add to page.tsx if new**

Insert between FinalCTA and Footer.

**Step 4: Commit**

```bash
git add src/components/sections/blog-preview.tsx src/app/page.tsx
git commit -m "redesign: add Finox-style blog preview section to homepage"
```

---

## Phase 4: Subpages

### Task 20: Rewrite PageHeader shared component

**Files:**
- Modify: `src/components/shared/page-header.tsx`

**Step 1: Restyle with Finox pattern**

Read current `page-header.tsx` (57 lines). Rebuild:

- `SectionPill` with the eyebrow text
- Large heading (`text-4xl md:text-5xl font-semibold`)
- Description (`text-lg text-muted-foreground max-w-2xl`)
- Centered layout, `py-20`
- Wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/components/shared/page-header.tsx
git commit -m "redesign: restyle page header with section pill and minimal type"
```

---

### Task 21: Rewrite /about page

**Files:**
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/about/content.tsx`

**Step 1: Rebuild about page**

Read both files. Rebuild with Finox About page layout:

- Top section: "Hello I'm" small text + large name heading ("Ramon Vallejera" `text-5xl md:text-7xl font-bold`), bio paragraph, "Let's talk ↗" primary button
- Full-width professional photo section (B&W or color, `rounded-2xl overflow-hidden`)
- Experience/skills content below with clean typography
- All wrapped in `FadeIn` animations

**Step 2: Commit**

```bash
git add src/app/about/page.tsx src/app/about/content.tsx
git commit -m "redesign: rebuild about page with Finox large-name layout"
```

---

### Task 22: Rewrite /work page with filter tabs

**Files:**
- Modify: `src/app/work/page.tsx`
- Modify: `src/app/work/grid.tsx`

**Step 1: Add filter tabs and restyle grid**

Read both files and `src/data/projects.ts` to understand categories. Rebuild:

- `PageHeader` with "Portfolio" pill and "Exploring My Portfolio Creative Solutions" heading
- Filter tabs: extract unique categories from projects data, render as horizontal tab bar (`flex gap-2`), each tab is a pill button (`rounded-full px-5 py-2 text-sm`, active: `bg-foreground text-background`, inactive: `border border-border`)
- Project grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Each card: image (`rounded-xl overflow-hidden aspect-[4/3]`), hover overlay with arrow button, category + URL below
- Use client-side state for filter (`useState`)
- "Book A Call ↗" CTA button at bottom

**Step 2: Commit**

```bash
git add src/app/work/page.tsx src/app/work/grid.tsx
git commit -m "redesign: rebuild work page with filter tabs and Finox grid"
```

---

### Task 23: Restyle /work/[slug] project detail

**Files:**
- Modify: `src/app/work/[slug]/page.tsx`
- Modify: `src/app/work/[slug]/content.tsx`

**Step 1: Restyle project detail**

Read both files. Restyle with Finox project detail pattern:

- `SectionPill` with project category
- Project title (`text-4xl md:text-5xl font-semibold`)
- Description paragraph
- Full-width hero image (`rounded-2xl overflow-hidden`)
- Content sections with clean typography on white bg
- "More Projects" section at bottom: 2-column grid of other project thumbnails + titles
- All wrapped in `FadeIn`

**Step 2: Commit**

```bash
git add src/app/work/[slug]/page.tsx src/app/work/[slug]/content.tsx
git commit -m "redesign: restyle project detail page with Finox layout"
```

---

### Task 24: Restyle /services page

**Files:**
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/services/content.tsx`

**Step 1: Restyle services page**

Read both files. Apply Finox services page style:

- `PageHeader` with "Services" pill and "What I Do Best" heading
- 3x2 card grid (same style as homepage services section from Task 12)
- May expand with more detail per service card

**Step 2: Commit**

```bash
git add src/app/services/page.tsx src/app/services/content.tsx
git commit -m "redesign: restyle services page with Finox card grid"
```

---

### Task 25: Restyle /blog page

**Files:**
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/content.tsx`

**Step 1: Restyle blog page**

Read both files and `src/data/posts.ts`. Rebuild with Finox blog layout:

- `PageHeader` with "Latest Insights" pill and "Latest Insights & Trends" heading
- Filter tabs by category (extract from posts data) + "Sort by: Newest" dropdown (optional, can be static)
- Featured posts layout: large post left, two stacked right
- 3-column grid of remaining blog cards below
- Each card: image placeholder, category pill, read time, title

**Step 2: Commit**

```bash
git add src/app/blog/page.tsx src/app/blog/content.tsx
git commit -m "redesign: restyle blog page with Finox featured + grid layout"
```

---

### Task 26: Rewrite /contact page

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/contact/form.tsx`

**Step 1: Rebuild contact page layout**

Read both files. Keep the `sendContactEmail` server action and `useActionState` logic in `form.tsx`. Restyle the layout:

- Split layout: two columns on desktop
- **Left column**: `SectionPill` "Contact", "Contact Me" heading (`text-4xl md:text-5xl font-semibold`), subtitle paragraph, then contact info blocks (Email, Phone, Location — each with label in `text-sm text-muted-foreground` and value in `text-lg font-semibold`)
- **Right column**: Form with clean inputs:
  - Two-column row: First name + Last name
  - Full-width: Email, Phone number, Message (textarea)
  - Privacy checkbox
  - Full-width "Submit ↗" button (`bg-foreground text-background rounded-full py-3 text-sm font-medium`)
  - Input styles: `border border-border rounded-xl px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground`

**Step 2: Simplify form.tsx if needed**

The current form has project type selector and budget range — you can keep these or simplify to match Finox's simpler form. Keeping them is fine if restyled.

**Step 3: Commit**

```bash
git add src/app/contact/page.tsx src/app/contact/form.tsx
git commit -m "redesign: rebuild contact page with Finox split layout"
```

---

## Phase 5: Cleanup & Polish

### Task 27: Clean up unused components and files

**Files:**
- Review: `src/components/blocks/` — check if gallery6.tsx and testimonials-columns-1.tsx are still used
- Review: `src/components/sections/unified-layer.tsx` — check if used
- Review: `src/components/sections/tech-stack-grid.tsx` — check if used
- Review: `src/components/sections/faq.tsx` — check if used
- Delete any unused files

**Step 1: Search for imports of each file**

```bash
grep -r "gallery6\|testimonials-columns-1\|unified-layer\|tech-stack-grid\|faq" src/app/
```

**Step 2: Delete unused files**

**Step 3: Commit**

```bash
git add -A
git commit -m "redesign: remove unused components"
```

---

### Task 28: Update BackToTop component

**Files:**
- Modify: `src/components/shared/back-to-top.tsx`

**Step 1: Restyle the back-to-top button**

Read current file (33 lines). Restyle to match minimal aesthetic:

- Circular button: `bg-foreground text-background rounded-full w-10 h-10 flex items-center justify-center`
- Arrow up icon from Lucide
- Fixed bottom-right position
- Show/hide based on scroll position

**Step 2: Commit**

```bash
git add src/components/shared/back-to-top.tsx
git commit -m "redesign: restyle back-to-top button for minimal theme"
```

---

### Task 29: Update OG image generation

**Files:**
- Modify: `src/app/opengraph-image.tsx`
- Modify: `src/app/work/[slug]/opengraph-image.tsx`

**Step 1: Update OG images to match new brand**

Read both files. Update colors and fonts to match the new light theme:

- White background, dark text
- Use Manrope font (or system sans-serif for Satori compatibility)
- Remove any orange/dark theme colors

**Step 2: Commit**

```bash
git add src/app/opengraph-image.tsx src/app/work/[slug]/opengraph-image.tsx
git commit -m "redesign: update OG images for light minimal branding"
```

---

### Task 30: Final verification

**Step 1: Run build**

```bash
pnpm build
```

Expected: clean build with no errors

**Step 2: Visual check all pages**

Navigate through every page in the browser:
- `/` — all sections render, light theme, no dark artifacts
- `/about` — large name, photo, bio
- `/work` — filter tabs, project grid
- `/work/[slug]` — project detail
- `/services` — card grid
- `/blog` — featured + grid layout
- `/contact` — split form

**Step 3: Check mobile responsiveness**

Resize browser to mobile width, verify all pages look correct.

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "redesign: final polish and fixes"
```
