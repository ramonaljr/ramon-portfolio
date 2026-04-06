# Cinematic Frontend Skill — Design

**Date:** 2026-04-06
**Type:** Claude Code skill (`~/.claude/skills/cinematic-frontend/SKILL.md`)
**Trigger:** Any task involving motion, animation, scroll effects, WebGL, or interactive transitions in the portfolio
**Boundary:** Owns everything that moves. `frontend-design` owns static aesthetics (typography, color, layout).

## Decisions

| Question | Answer | Rationale |
|---|---|---|
| Portfolio-tuned or general? | **Portfolio-tuned** | Encodes Ramon's stack: OGL, Framer Motion, Embla, Tailwind |
| Relationship to frontend-design? | **Companion — owns motion** | Clean split: frontend-design = static, cinematic = everything that moves |
| Prescriptive or descriptive? | **C: Prescriptive for a11y, descriptive for rest** | `prefers-reduced-motion` is a hard gate; performance items are advisory |
| Spring profiles? | **B: Defaults with deviation** | 4 named profiles cover 90% of cases; deviation requires justification |
| Skill structure? | **Component Catalog + Decision Router** | Matches codebase structure (motion.tsx library) |

## Skill Structure

### Section 1: Scope & Handoff
Defines clean split with `frontend-design`. This skill activates for: scroll animations, entrance choreography, parallax, WebGL/shaders, carousels, hover/press micro-interactions, page transitions, CSS/JS animation. Pure layout/typography/color → defer to `frontend-design`.

### Section 2: Decision Router

| Building... | Use... |
|---|---|
| Scroll-triggered content reveal | `FadeIn` (directional) or `ScaleIn` (dramatic) |
| Text appearing with blur | `TextReveal` |
| Sequential grid/list items | `StaggerChildren` + `StaggerItem` |
| Depth effect on scroll | `ParallaxLayer` with speed tuning |
| Full-section pinned scroll | `StickyImage` + `OverlayCopy` composition |
| Hero background with atmosphere | `Galaxy` (OGL shader) via `dynamic(..., { ssr: false })` |
| Animated number/stat | `CountUp` with spring config |
| Horizontal content browser | Embla carousel with motion controls |
| Hero page-load sequence | Staggered `motion.div` chain with incremental delays |
| Button/link feedback | Tailwind `active:scale-[0.97]` + `transition-all duration-500` |
| Infinite scrolling band | CSS `@keyframes marquee` with hover pause |

### Section 3: Spring Physics Profiles

| Name | Config | When to use |
|---|---|---|
| `cinematic` | `damping: 30, stiffness: 100, mass: 1.2` | Default. Scroll reveals, content entrances |
| `countup` | `damping: 40, stiffness: 80, mass: 1` | Number animations — slow settle, no overshoot |
| `snappy` | `damping: 25, stiffness: 200` | UI chrome (back-to-top, navbar) — fast, responsive |
| `menu` | `damping: 25-30, stiffness: 150-200` | Drawers, panels — smooth slide with soft land |

Rule: Start from named profiles. Deviation requires stating which profile is closest and why.
Easing fallback: `ease: [0.25, 0.1, 0.25, 1]` when `duration` is used instead of spring.

### Section 4: Scroll Reveal Components
Documents `src/components/shared/motion.tsx`:

- **FadeIn** — direction (up/down/left/right/none), distance (60px), delay, once, amount
- **ScaleIn** — initialScale (0.9), delay, once, amount
- **TextReveal** — blur 10→0px + y:30→0, delay
- **StaggerChildren/StaggerItem** — stagger (0.15s), direction, distance
- **ParallaxLayer** — speed (0.2), direction, offset `["start end", "end start"]`
- **CountUp** — target, suffix, prefix, decimals, duration

API rule: New motion components must accept `children`, `className`. If scroll-triggered, also `delay`, `once`, `amount`. Export from `motion.tsx`.

### Section 5: Parallax & Sticky Scroll
Codifies `StickyImage` + `OverlayCopy` from `text-parallax-content-scroll.tsx`:

- Sticky: scroll-driven `scale` (1→0.85) + `opacity` (1→0)
- Overlay: `y` (250→-250), bell-curve opacity at [0.25, 0.5, 0.75] → [0, 1, 0]
- Container: `150vh` for scroll runway
- Offsets: `["end end", "end start"]` for sticky, `["start end", "end start"]` for overlay

### Section 6: WebGL/Shader Patterns
Codifies Galaxy OGL pattern:

- Renderer: `new Renderer({ alpha, premultipliedAlpha: false })`
- Uniform naming: `u` prefix, camelCase (`uStarSpeed`, `uGlowIntensity`)
- Mouse: normalized coords, lerp 0.05, active/inactive smooth transition
- Resize: `window.addEventListener('resize', resize, false)`
- RAF: `requestAnimationFrame(update)` with cleanup via `cancelAnimationFrame`
- Teardown: remove canvas, remove listeners, `WEBGL_lose_context`
- Props: all uniforms as component props with defaults
- SSR: always `dynamic(() => import(...), { ssr: false })`

### Section 7: Carousel
- Embla headless API
- `canScrollPrev`/`canScrollNext` for button states
- Responsive breakpoints, drag-free on mobile
- Keyboard: Arrow Left/Right

### Section 8: Micro-interactions (Tailwind patterns)
- Press: `active:scale-[0.97]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(250,112,37,0.3)]`
- Border reveal: `hover:border-white/30`
- Icon nudge: `group-hover:translate-x-1`
- Image zoom: `group-hover:scale-105 transition-transform duration-1000`
- Duration ladder: 300ms (quick), 500ms (standard), 1000ms (dramatic)

### Section 9: Entrance Choreography
Hero staggered entrance pattern:

- Sequential 0.2s delay increments (first: 0.2s, last: ~1.2s)
- Each uses `cinematicSpring` + delay
- Text: `filter: "blur(10px)"` initial
- Containers: `scale: 0.95` initial
- Scroll indicator: last (delay 2s, simple duration fade)

### Section 10: Accessibility (HARD GATE)
Required — Claude must not ship motion components without:

- `prefers-reduced-motion: reduce` media query
- Disable parallax, auto-playing animations
- Keep opacity transitions (no vestibular issue)
- CountUp: show final value immediately
- Galaxy: `disableAnimation={true}` or hide
- Framer Motion: `useReducedMotion()` hook

### Section 11: Performance (Advisory)
- DPR clamping: `Math.min(devicePixelRatio, 2)` for WebGL
- `will-change`: apply just before animation, remove after
- Passive listeners: `{ passive: true }` for scroll
- Dynamic imports: `ssr: false` for WebGL/heavy animation
- RAF cleanup: always cancel + remove listeners in useEffect
- `transform`/`opacity` only: no layout property animation
- Viewport gating: `once: true` on scroll reveals

### Section 12: Anti-patterns

| Don't | Do instead |
|---|---|
| Animate `width`/`height`/`top`/`left` | Use `transform` and `opacity` |
| Invent spring values | Start from a named profile |
| Skip RAF cleanup | Always `cancelAnimationFrame` in return |
| Use `scroll-snap` for cinematic scroll | Use `useScroll` + `useTransform` |
| Animate every element | Animate focal points only |
| Scroll-jack | Layer effects on natural scroll |
| Ship without `prefers-reduced-motion` | Always include reduced-motion handling |
| Duplicate spring config | Import from `motion.tsx` |
