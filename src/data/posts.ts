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
    excerpt:
      "Most AI agents fail because they try to do too much. Here's how I build focused agents that reliably solve one problem well.",
    category: "AI Engineering",
    date: "2026-03-15",
    readTime: "8 min read",
  },
  {
    slug: "why-i-chose-supabase-over-firebase",
    title: "Why I Chose Supabase Over Firebase",
    excerpt:
      "After building 10+ apps on both platforms, here's why Supabase wins for serious projects — and where Firebase still has the edge.",
    category: "Architecture",
    date: "2026-02-28",
    readTime: "6 min read",
  },
  {
    slug: "the-monorepo-playbook",
    title: "The Monorepo Playbook for Full-Stack Apps",
    excerpt:
      "How I structure Turborepo projects with shared packages to ship web + mobile from a single codebase without losing my mind.",
    category: "Full-Stack",
    date: "2026-02-10",
    readTime: "10 min read",
  },
];
