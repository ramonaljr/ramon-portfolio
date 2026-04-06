# Portfolio Cinematic Upgrade + Content Expansion — Design

**Date:** 2026-04-06
**Approach:** B — Cinematic upgrades + content expansion on existing foundation
**Goal:** Make the portfolio more cinematic, fill content gaps, add new sections, fix accessibility/quality issues

## Decisions

| Question | Answer |
|---|---|
| Scope | Cinematic motion upgrades + new sections + quality fixes (not a full rebuild) |
| Audience | Potential clients evaluating whether to hire Ramon |
| Success criteria | Every section has cinematic entrance choreography, content gaps filled, accessibility compliant |

---

## Tier 1: Cinematic Motion Upgrades

### 1.1 — Page Transitions
Smooth cross-page transitions using Next.js view transitions. Current page fades/slides out, new page fades/slides in. Makes the site feel like one continuous cinematic experience.

### 1.2 — Scroll-Driven Section Entrances (site-wide)
Every section gets a scroll-triggered entrance using motion.tsx components (FadeIn, ScaleIn, StaggerChildren). No section should "just appear." Stagger delay between elements within each section.

### 1.3 — Parallax Depth Layers
Add ParallaxLayer to background elements across sections — gradient overlays, decorative shapes, section dividers. Currently only MidCTA uses parallax.

### 1.4 — Hero Entrance Polish
- Increase initial blur to 15px (from 10px)
- Brief 0.3s blackout → fade-in for Galaxy background
- Scroll indicator: add gentle pulse glow

### 1.5 — Magnetic CTA Buttons
Subtle magnetic pull toward cursor on hover (2-3px max) using motion.div with onMouseMove. Applied to primary CTA buttons only.

### 1.6 — prefers-reduced-motion (HARD GATE)
Implement across all motion components per cinematic-frontend skill. Disable parallax, auto-playing animations. Keep opacity transitions. Galaxy: disableAnimation or hide. CountUp: show final value.

---

## Tier 2: New Sections & Pages

### 2.1 — Case Study Enhancement
Upgrade `/work/[slug]` pages:
- Challenge / Solution / Result narrative structure
- Screenshot gallery with lightbox
- Key metrics block (e.g., "40% faster processing")
- Tech architecture diagram (simple, styled)
- "What I learned" closing paragraph

### 2.2 — Process Section Upgrade (Homepage)
Replace UnifiedLayer with a cinematic horizontal scroll-triggered timeline:
- Pinned section, scrub through 4 phases
- Each phase reveals with dramatic entrance
- Transforms the static 3-value-prop list into a journey

### 2.3 — Blog/Insights Page (stub)
Add `/blog` route:
- Clean grid layout for article cards
- 2-3 placeholder articles
- Category tags
- Signals thought leadership

### 2.4 — Testimonials Authenticity Pass
- Replace DiceBear AI avatars with initial-based avatars (colored circles with initials)
- Add company name and role to each testimonial
- Optionally link to LinkedIn profiles

### 2.5 — Skills/Tech Stack Visual
Add interactive tech stack visualization to About page — grid or orbital layout grouped by category with hover details. More engaging than current pill list.

### 2.6 — FAQ Section
Collapsible FAQ on Services page:
- "What's your typical timeline?"
- "Do you work with existing codebases?"
- "How do you handle communication?"
- "What happens after launch?"

### 2.7 — Resume/CV Download
Prominent PDF download button in 3 locations:
- About page — near bio
- Navbar — subtle icon/link (desktop)
- Contact page sidebar — alongside email/location
Glass-card style with hover glow, download icon animation (arrow slides down on hover).

---

## Tier 3: Quality & Completeness Fixes

### 3.1 — Focus Indicators
Visible focus rings on all interactive elements (buttons, links, form fields).

### 3.2 — Footer Completion
- Remove or create Privacy Policy / Terms of Service pages
- Fix Twitter/X link (real profile or remove)
- Fix Website icon link

### 3.3 — Design Consistency Pass
- Standardize buttons: primary (orange), secondary (glass), ghost (text)
- Standardize section spacing: `py-24 md:py-32`
- Standardize card borders and hover states

### 3.4 — OG Images
Generate Open Graph images for each page for social media link previews.

### 3.5 — Skip-to-Content Link
Hidden-until-focused "Skip to main content" link for screen reader users.

---

## Implementation Priority

1. prefers-reduced-motion (accessibility, small, blocks nothing)
2. Scroll-driven section entrances (cinematic, high visual impact)
3. Page transitions (cinematic, transforms navigation)
4. Design consistency pass (cleanup foundation)
5. Case study enhancement (content, conversion impact)
6. Process section upgrade (cinematic + content)
7. Parallax depth layers (cinematic polish)
8. Hero entrance polish (cinematic refinement)
9. Focus indicators + skip link (accessibility)
10. Footer completion (cleanup)
11. Resume/CV download (small, conversion value)
12. Testimonials authenticity (content honesty)
13. FAQ section (services page content)
14. Blog stub (future growth)
15. Skills/tech stack visual (about page)
16. Magnetic CTA buttons (micro-interaction polish)
17. OG images (social sharing)

## Excluded (YAGNI)

- Dark/light mode toggle (dark theme IS the brand)
- Newsletter signup (no content engine yet)
- Pricing page (custom quotes model)
- Search (not enough content)
- Analytics integration (separate concern)
