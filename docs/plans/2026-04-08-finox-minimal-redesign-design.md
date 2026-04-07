# Portfolio Redesign: Finox-Inspired Light & Minimal

**Date:** 2026-04-08
**Reference:** https://finox.webflow.io/
**Approach:** Full teardown & rebuild of visual layer

## Summary

Complete visual redesign of the portfolio from a dark, animation-heavy aesthetic to a light, minimal, whitespace-driven design inspired by Finox. All existing pages and sections are retained — only the visual presentation changes.

## Decisions

- **All pages retained:** Home, Services, Work, About, Blog, Contact
- **All homepage sections retained:** reskinned, not removed
- **Color direction:** White background, black text, no colored accent
- **Typography:** Pure sans-serif (Manrope), drop Newsreader serif
- **Motion level:** Finox-level — subtle counters, card hovers, scroll fade-ins
- **Hero style:** Split layout (text left, photo right)
- **Portfolio:** Carousel on homepage, filterable grid on /work
- **Execution:** Full teardown of visual layer, keep data/routing/logic

## Global Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| background | `#ffffff` | Page background |
| surface | `#f5f5f5` | Card backgrounds, alternating sections |
| foreground | `#1a1a1a` | Primary text |
| muted | `#6b6b6b` | Secondary text |
| accent | `#1a1a1a` | Buttons, icons (black as accent) |
| border | `#e5e5e5` | Dividers, card borders |
| footer-bg | `#0a0a0a` | Footer background |
| footer-fg | `#ffffff` | Footer text |

### Typography
- **Font family:** Manrope (sans-serif only)
- **Hero heading:** 80-120px, bold
- **Section headings:** 40-48px, semibold
- **Body:** 16-18px, regular
- **Monospace:** Geist Mono (code snippets only)

### Spacing
- Section vertical padding: 120-160px
- Max content width: 1200px
- Card internal padding: 24-32px

### Buttons
- **Primary:** black bg, white text, rounded-full, arrow icon (↗)
- **Outline:** transparent bg, thin black border, rounded-full, arrow icon
- **Hover:** subtle scale or background shift, arrow shifts right

### Section Labels
- Small pill/badge: dot + text in rounded border (e.g., `● Portfolio`)

## Page-by-Page Design

### Navbar
- White bg, no border initially — border/blur on scroll
- Logo left (name in bold sans-serif)
- Nav links: About Me, Portfolio, Services, Blog
- "Book A Call ↗" outline button right
- Mobile: hamburger with slide-over

### Homepage Sections (in order)

**1. Hero (Split)**
- Left: vertical "Web Developer" text, stat counters, massive "Hello" (~120px), subtitle, scroll prompt
- Right: large professional photo, cropped at edges
- Animation: text from left, photo from right

**2. Personal Intro**
- Left: "About Me" heading + paragraph
- Right: stat card, photo, bullet points with icons

**3. Logo Cloud**
- Horizontal row, grayscale, opacity hover on white bg

**4. Services**
- 3x2 grid of rounded cards on #f5f5f5
- Each: description top, geometric icon center, service name bottom
- White card bg, subtle border/shadow

**5. Featured Projects (Carousel)**
- Full-width carousel with large project images
- Project name + category below each slide
- Left/right nav arrows

**6. Process Timeline**
- Horizontal rows (Finox Experiences style)
- Phase name left, description center, tags right
- Thin line separators, fade-in on scroll

**7. About / Stats**
- Large stat numbers + labels, bio text alongside
- Light background

**8. Testimonials**
- Light gray bg, white card grid
- Static layout (no auto-scroll marquee)
- Subtle fade-in entrance

**9. Mid CTA**
- Dark photo overlay banner, rounded corners
- Centered heading + subtitle + "Let's talk ↗"

**10. Blog Preview**
- Light gray bg, "● Blogs" pill
- 2x2 card grid: image, category, read time, title

**11. Final CTA**
- Same style as Mid CTA

**12. Footer**
- Black bg with rounded top corners
- Logo + nav + CTA top row
- Socials + contact info middle
- Large marquee name text (semi-transparent)
- Copyright bottom

### /about
- Large name heading + bio + "Let's talk" button
- Full-width professional photo
- Experience/skills content

### /work
- "● Portfolio" pill + heading
- Filter tabs by category
- Masonry/grid of project cards with images, arrow buttons, category, URL
- CTA at bottom

### /work/[slug]
- Category pill + project title + description
- Full-width hero image
- Content sections with images
- "More projects" at bottom

### /services
- "● Services" pill + "What I Do Best" heading
- 3x2 card grid (expanded from homepage)

### /blog
- "● Latest Insights" pill + heading
- Filter tabs + sort dropdown
- Featured post (large left, stacked right)
- 3-column card grid below

### /contact
- Split layout: info left (pill, heading, email, phone, location), form right
- Black "Submit ↗" button

## Motion & Animation

### Keep
- Framer Motion FadeIn on scroll (fade + slight up, 0.4-0.6s)
- CountUp for stat numbers on scroll
- Card hover: scale(1.02) + shadow
- Button hover: arrow shift right
- View transitions between pages (existing)

### Remove
- Galaxy.tsx (WebGL background)
- OGL dependency
- Newsreader font
- All dark theme tokens
- Glass-card effects
- Hero gradient / mesh accent
- AI Console widget
- Magnetic button component
- Complex spring configs
- ParallaxLayer
- Auto-scrolling testimonial marquee
- Scroll-pinned timeline animation

## Dependencies to Remove
- `ogl` (WebGL library for Galaxy)

## Dependencies to Keep
- `framer-motion` / `motion` (scaled-back usage)
- `embla-carousel-react` (project carousel)
- `lucide-react` (icons)
- `@radix-ui/*` (form primitives)
- `resend` (contact form)
- All shadcn/ui components
