# Landing Page Redesign — Hybrid Portfolio with Cinematic Motion

## Context
The current site reads as a SaaS enterprise product ("AI Automation Studio" / "AI Core"). It needs to read as a personal portfolio / freelance studio site selling Ramon's services. The visual design system (M3 palette, typography, glass morphism) is strong and will be preserved. The narrative, copy, and motion layer need to be rebuilt.

## Decisions
- **Animation library:** Framer Motion (`motion` package) — React ecosystem standard, declarative, spring physics
- **Motion personality:** Cinematic & dramatic — slow deliberate reveals, parallax, Apple product page feel
- **Scope:** Full redesign pass — restructured narrative, rewritten copy, new About section, comprehensive motion layer

## Motion System

### Shared Primitives (`src/components/shared/motion.tsx`)
- `FadeIn` — scroll-triggered fade + rise (opacity 0→1, translateY 60→0), 0.8–1.2s spring
- `StaggerChildren` — sequential delays (150–200ms) for child FadeIn elements
- `ParallaxLayer` — subtle vertical parallax (speed 0.1–0.3)
- `CountUp` — animate number from 0 to target, 2s easeOut, scroll-triggered

### Cinematic Spring Config
```
{ damping: 30, stiffness: 100, mass: 1.2 }
```

### Scroll Behavior
- Trigger at `amount: 0.2` (20% visible)
- `once: true` — no reset on scroll back
- Viewport-based triggering via `whileInView`

## Section-by-Section Design

### 1. Navbar
- Fix logo to consistent personal brand across nav + footer
- Add mobile hamburger with animated slide-in drawer (motion AnimatePresence)
- Entrance: subtle fade-down on page load (opacity 0→1, y: -20→0)
- Keep scroll-aware glass blur behavior

### 2. Hero — Personal Introduction
- **Badge:** "Available for Projects" with animated pulse (replaces "v4.2 Enterprise Release")
- **Headline:** "I architect AI-powered systems that transform how enterprises operate"
- **CTAs:** "View My Work" (primary, anchor to #work) + "Let's Talk" (glass, anchor to CTA/contact)
- **Console widget:** Keep. Metrics animate with CountUp on viewport entry.
- **Motion:** Staggered entrance — badge (0ms) → headline (200ms) → CTAs (400ms) → console (600ms). Each uses FadeIn with cinematic spring. Parallax on hero-gradient and mesh-accent layers.

### 3. Logo Cloud — Tech Stack
- Reframe label: "Technologies & Platforms I Work With"
- Replace placeholder text logos with real tech/client logos or keep as styled text
- Add infinite horizontal marquee scroll animation (CSS or motion)
- Duplicate items for seamless loop

### 4. Services (was BentoFeatures)
- **Header:** "What I Build" / eyebrow "Services"
- **Copy rewrite to personal voice:**
  - Card 1: "Scalable Systems" — "I design back-end architectures built for global demand..."
  - Card 2: "AI Automation" — "Custom AI agents tailored to your unique business logic..."
  - Card 3: "Full-Stack Development" — "End-to-end builds from pixel-perfect interfaces to robust APIs..."
  - Card 4: "Intelligent Workflows" — "Reasoning engines that eliminate manual bottlenecks..."
- **Motion:** StaggerChildren wrapping FadeIn on each card (150ms stagger). Images scale from 1.1→1.0 on reveal. Hover scale transitions preserved.

### 5. Featured Work
- **Header:** "Selected Work" / eyebrow "Portfolio"
- **Subtext:** "Projects where design meets deep technical craft."
- **Motion:** Project cards use FadeIn with translateY(80px) and 1s spring. Images have subtle parallax. Arrow icon: scale 1→1.1 + bg fill on hover. Stagger between left/right cards (300ms).

### 6. Process (was UnifiedLayer)
- **Reframe:** "How I Work" / eyebrow "Process"
- **Left column:** Rewrite for personal process: "I believe in eliminating silos. My approach places a unified AI layer atop your existing stack..."
- **Feature cards → process steps:**
  - "Discovery & Strategy" — "I map your systems, identify automation opportunities..."
  - "Build & Iterate" — "Rapid prototyping with continuous feedback loops..."
- **Decision log widget:** Sequential animated reveal — entries appear one by one (400ms stagger) when widget scrolls into view. Typewriter-style effect on text.
- **Motion:** Left column FadeIn from left. Right widget FadeIn from right. Log entries stagger in.

### 7. About / Bio (NEW)
- **Position:** Between Process and Testimonial
- **Layout:** Centered or split — personal tagline + brief bio
- **Content:** 2-3 sentences of personal credibility. Key highlights (years of experience, specializations, notable outcomes).
- **Design:** Clean, minimal. Uses surface-container-low bg for visual separation. Subtle accent line or element.
- **Motion:** FadeIn on scroll, slow cinematic spring.

### 8. Testimonial
- Keep current design — it's strong
- **Motion:** Parallax on ambient glow blur (speed 0.15). Quote text FadeIn with 1.2s spring. Attribution staggers in 300ms after quote.

### 9. Final CTA
- **Headline:** "Let's Build Something Extraordinary"
- **Subtext:** "Have a project in mind? I'd love to hear about it."
- **CTAs:** "Start a Conversation" (primary) + "View My Process" (outline, anchors to #process)
- **Motion:** Scale 0.95→1 + FadeIn on scroll. Buttons stagger 200ms.

### 10. Footer
- Fix brand name to match navbar
- Update copyright to dynamic year (`new Date().getFullYear()`)
- Keep gradient design and column layout
- Clean up link structure for portfolio context

## Technical Notes
- All motion components are client components (`"use client"`)
- Page.tsx remains a server component — motion wrappers are leaf-level
- motion package supports React 19 and Next.js app router
- Parallax uses `useScroll` + `useTransform` from motion
- No layout shifts — all animated elements have explicit dimensions or are flow-independent
