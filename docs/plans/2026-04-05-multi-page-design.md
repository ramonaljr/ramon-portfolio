# Multi-Page Portfolio Design

## Pages
- `/about` — About Me (story, skills grid, timeline, values)
- `/contact` — Contact form via Resend API email
- `/work` — Project listing grid
- `/work/[slug]` — Case study pages (Kalcio, Payvio, Kanei, Husay)
- `/services` — Expanded service offerings

## Project Names
- Kalcio — AI Accounting SaaS
- Payvio — HR & Payroll Platform (was HR & Payroll v2)
- Kanei — AI Personal Finance (was WealthFlow)
- Husay — Tax Compliance Platform

## Landing Page Updates
- Replace placeholder projects (Copper Genesis, Circuit Authority) with real projects
- Update Featured Projects to show Kalcio, Payvio, Kanei, Husay
- Navbar links: Services/Work/Process/About stay as anchor links on homepage, become page links on subpages

## Technical
- Resend for contact form email (Server Action)
- Project data in `src/data/projects.ts`
- Dynamic routes via `generateStaticParams`
- Same motion system across all pages
