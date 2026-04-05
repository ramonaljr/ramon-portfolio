# SEO & Copywriting Overhaul — Landing Page

**Date:** 2026-04-05
**Approach:** A — Copy Overhaul + SEO Foundation
**Status:** Approved

## Goals

1. Rewrite all landing page copy from enterprise/corporate tone to casual & approachable
2. Add comprehensive SEO infrastructure (metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots)
3. Replace fictional testimonial with authentic value proposition section
4. Tighten CTA hierarchy — every section funnels toward contact
5. Target keyword clusters: full-stack developer, AI developer/engineer, freelance developer for hire

## Audience

Dual-purpose: hiring managers/recruiters AND freelance/contract clients.

## Primary Conversion

Contact (email/form).

## Section-by-Section Changes

### 1. Metadata & SEO Infrastructure (layout.tsx + new files)

- Expand metadata to full SEO object with template titles, OG, Twitter cards
- Add `src/app/sitemap.ts` (dynamic, covers all pages + project slugs)
- Add `src/app/robots.ts` (allow all, point to sitemap)
- Add JSON-LD `Person` + `WebSite` structured data in layout

### 2. Hero (hero.tsx)

- Badge: "Available for Projects" → "Open to new projects"
- H1: "I architect AI-powered systems that transform enterprises" → "I build smart software that actually works"
- Subtext: rewrite to hit "full-stack", "AI integrations", "automation" naturally
- CTAs: "View My Work" → "See what I've built", "Let's Talk" → "Get in touch"
- Keep AI Console widget as visual flair (unchanged)

### 3. Logo Cloud (logo-cloud.tsx)

- "Technologies & Platforms I Work With" → "Tools I use every day"

### 4. Bento Features (bento-features.tsx)

- Eyebrow: "Services" → "What I do"
- H2: "What I Build" → "Things I'm good at"
- Rewrite all 4 card titles and descriptions to casual tone
- "Intelligent Workflows" CTA: "See My Process" → "How I work"

### 5. Featured Projects (featured-projects.tsx)

- Eyebrow: "Portfolio" → "Recent work"
- H2: "Selected Work" → "Projects I've shipped"
- Subtitle: rewrite to casual

### 6. Mid CTA (mid-cta.tsx)

- H3 and body: rewrite to casual tone
- CTA: "Let's Talk" → "Let's chat"

### 7. Unified Layer / Process (unified-layer.tsx)

- H2: simplify to "How I work"
- Body: rewrite to casual, problem-first framing
- Process steps: rename and rewrite descriptions
- Decision log: rewrite entries to match casual tone

### 8. About (about.tsx)

- H2: "Building at the intersection..." → "A bit about me"
- Rewrite all 3 bio paragraphs — grounded, specific, referencing real projects
- Keep stats (8+ years, 40+ projects, 15+ AI integrations)

### 9. Testimonial → "Why work with me" (testimonial.tsx → why-work-with-me)

- Remove fictional testimonial entirely
- Replace with 3-card value proposition:
  1. "I ship fast"
  2. "Full-stack means full-stack"
  3. "I care about the details"

### 10. Final CTA (final-cta.tsx)

- H2: "Let's build something extraordinary" → "Let's build something together"
- Body: rewrite for dual audience (hiring + freelance)
- CTAs: "Start a Conversation" → "Send me a message", "View My Process" → "See my work"

### 11. Footer (footer.tsx)

- Tagline: rewrite to casual, mention location

### 12. JSON-LD Structured Data

- Person schema: name, jobTitle, url, sameAs (LinkedIn, GitHub)
- WebSite schema: name, url

## Files Modified

- `src/app/layout.tsx` — metadata expansion + JSON-LD
- `src/app/sitemap.ts` — new
- `src/app/robots.ts` — new
- `src/components/sections/hero.tsx` — copy rewrite
- `src/components/sections/logo-cloud.tsx` — copy rewrite
- `src/components/sections/bento-features.tsx` — copy rewrite
- `src/components/sections/featured-projects.tsx` — copy rewrite
- `src/components/sections/mid-cta.tsx` — copy rewrite
- `src/components/sections/unified-layer.tsx` — copy rewrite
- `src/components/sections/about.tsx` — copy rewrite
- `src/components/sections/testimonial.tsx` — full section replacement
- `src/components/sections/final-cta.tsx` — copy rewrite
- `src/components/layout/footer.tsx` — copy rewrite
