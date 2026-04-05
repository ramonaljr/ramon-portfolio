export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string[];
  features: { icon: string; title: string; description: string }[];
  techStack: {
    frontend: string[];
    backend: string[];
    mobile?: string[];
    infrastructure: string[];
  };
  architecture: string;
  liveUrl?: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "kalcio",
    number: "01",
    title: "Kalcio",
    category: "AI Accounting SaaS",
    tagline:
      "An AI-powered accounting platform that automates financial operations across web and mobile.",
    description: [
      "Kalcio is a full-stack accounting SaaS built for businesses that need intelligent financial management. The platform handles everything from expense tracking and invoicing to payments and real-time analytics — powered by AI that learns your financial patterns.",
      "Built as a Turborepo monorepo with shared packages for accounting logic, API clients, and UI components, the system supports both web and mobile interfaces with real-time data synchronization.",
      "The accounting engine is modular — separated into receivable, payable, payments, expenses, and contacts packages — making the business logic testable and portable across platforms.",
    ],
    features: [
      {
        icon: "account_balance",
        title: "Smart Expense Tracking",
        description:
          "Automated categorization and approval workflows with receipt handling.",
      },
      {
        icon: "receipt_long",
        title: "Invoice Management",
        description:
          "Create, send, and track invoices with real-time status updates.",
      },
      {
        icon: "dashboard",
        title: "KPI Dashboard",
        description:
          "Revenue, expenses, receivables, and net income at a glance with trend analysis.",
      },
      {
        icon: "phone_iphone",
        title: "Cross-Platform",
        description:
          "Native mobile app via React Native/Expo with 5-tab navigation mirroring the web experience.",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "Framer Motion",
        "Recharts",
        "Radix UI",
        "Zustand",
      ],
      backend: [
        "Supabase",
        "PostgreSQL",
        "Edge Functions",
        "Supabase Auth",
      ],
      mobile: [
        "React Native",
        "Expo SDK",
        "NativeWind",
        "React Navigation",
      ],
      infrastructure: [
        "Turborepo",
        "pnpm Workspaces",
        "TypeScript 5",
        "Docker",
      ],
    },
    architecture:
      "Turborepo monorepo with 9 workspace packages: @kalcio/web, @kalcio/mobile, @kalcio/api, @kalcio/db, @kalcio/accounting (core, receivable, payable, payments, expenses, contacts), @kalcio/shared, @kalcio/email, and @kalcio/ai.",
    liveUrl: "https://kalcio-web-production.up.railway.app",
    githubUrl: "https://github.com/ramonaljr/kalcio",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHbKCnBu1CAGl_4FE0N1ttU8mxkV_qnGeJizzCFyJRJ358w27JTh_6OktJcE0qe3_SlKpFDzuMyy8tGjfKq7Bd0UDjss2VjnRvP1U95EjUSHCujRjYqiZkAc165O_X9By4Izr7gRSWt4_LcBq3tIxUJnf1EqKr_KmXIcGJMTcuaddddrhjvYqtNar9gmg2ohV96Qv6sCFR6a1YSuNK2dhIAmYIFaIbeD9YDkeaSUa1iiZE2T7wq3SqdJ7S7PCGvYPQymag1A4qWz0",
    imageAlt: "High-tech server hardware with glowing orange fiber optic cables",
  },
  {
    slug: "payvio",
    number: "02",
    title: "Payvio",
    category: "HR & Payroll Platform",
    tagline:
      "A dual-platform HR and payroll management system for modern businesses.",
    description: [
      "Payvio is a production-grade HR and payroll platform that enables companies to manage employees, run payroll, and handle HR operations across web and mobile interfaces.",
      "The architecture prioritizes deployment flexibility — containerized with Docker for Railway deployment, with Vercel as a secondary option. Environment-based configuration ensures secure handling of credentials across environments.",
      "Built as a monorepo with shared packages for maximum code reuse between the web dashboard and mobile companion app, with CI/CD pipelines for automated quality assurance.",
    ],
    features: [
      {
        icon: "groups",
        title: "Employee Management",
        description:
          "Comprehensive employee profiles, onboarding, and organizational structure.",
      },
      {
        icon: "payments",
        title: "Payroll Processing",
        description:
          "Automated payroll calculations, tax withholdings, and payment disbursement.",
      },
      {
        icon: "devices",
        title: "Dual-Platform",
        description:
          "Web dashboard for HR admins, mobile app for employees to view payslips and request leave.",
      },
      {
        icon: "deployed_code",
        title: "Production DevOps",
        description:
          "Docker containerization, Railway deployment, CI/CD with pre-push validation hooks.",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React 19", "Tailwind CSS", "shadcn/ui"],
      backend: ["Supabase", "PostgreSQL", "Supabase Auth"],
      mobile: ["React Native", "Expo SDK 55", "Expo Router"],
      infrastructure: [
        "Turborepo",
        "Docker",
        "Railway",
        "Vercel",
        "pnpm",
      ],
    },
    architecture:
      "Monorepo with /apps (web, mobile) and /packages (shared utilities). Docker multi-stage builds with runtime env injection. Railway.toml and vercel.json for dual deployment support.",
    liveUrl: "https://hr-and-payroll-v2-production.up.railway.app",
    githubUrl: "https://github.com/ramonaljr/hr-and-payroll-v2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrRMaG2Bni5mOsSx7TYZMQIGZcb2rRMiofNGwafgTBC7ybOkSEhUooCBpyScMLCj-8mtFRO_86fBfjUcZkDgBD0sYzWDoYCjQmQPgCqcfUNIDpP7uxR4okE5di6TbeIpH-37FHwQwQEkA7g4YOIFuZEtmDXXc8WwtfU9sNbKCIlsJcj35zMATeRk4EMKVtdXkKT3A8vLxuC-RN4vp5IfYtHDjcPxz3OYq6RptO7jjshuHVYIC3DDF00qqkC1ZuqdVAEm9bpmVo3tU",
    imageAlt:
      "Neural network visualization with glowing orange nodes on dark background",
  },
  {
    slug: "kanei",
    number: "03",
    title: "Kanei",
    category: "AI Personal Finance",
    tagline:
      "An AI-powered personal finance platform with conversational coaching across iOS, Android, and web.",
    description: [
      "Kanei is a comprehensive personal finance management platform that helps users track investments, manage budgets, and achieve savings goals — with an AI coach that provides contextual financial guidance.",
      "The AI Coach 2.0 integrates Google Gemini for conversational financial advice, with calculator blocks and markdown support for rich, actionable responses. Plaid integration connects real bank accounts for automatic transaction syncing.",
      "Premium features include smart budget suggestions, credit score estimation, cash flow projections, and a family tier with shared household management — all backed by real-time analytics and streak-based engagement mechanics.",
    ],
    features: [
      {
        icon: "smart_toy",
        title: "AI Financial Coach",
        description:
          "Conversational advisor powered by Google Gemini with calculator blocks and actionable insights.",
      },
      {
        icon: "account_balance_wallet",
        title: "Portfolio Tracking",
        description:
          "Real-time investment tracking with Yahoo Finance integration and net worth calculations.",
      },
      {
        icon: "link",
        title: "Bank Integration",
        description:
          "Plaid-powered bank connections for automatic transaction syncing and categorization.",
      },
      {
        icon: "family_restroom",
        title: "Family Finance",
        description:
          "Household management with shared savings goals and collaborative budgeting.",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
        "Radix UI",
      ],
      backend: [
        "Supabase",
        "PostgreSQL",
        "Google Gemini AI",
        "Plaid API",
        "Yahoo Finance",
        "Paddle",
      ],
      mobile: [
        "React Native",
        "Expo SDK 55",
        "Victory Native",
        "Biometric Auth",
        "Speech Recognition",
      ],
      infrastructure: [
        "Turborepo",
        "Playwright",
        "Vitest",
        "Sentry",
        "PostHog",
        "Docker",
      ],
    },
    architecture:
      "Monorepo with apps (web, mobile) and packages (api-client, shared, ui, seed). 17+ database migrations. Service-role operations for AI. Plaid webhooks for real-time transaction updates.",
    liveUrl: "https://web-production-e15a6.up.railway.app",
    githubUrl: "https://github.com/ramonaljr/wealthflow",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkmcAx7dORfN5pYSVnUsyYq83yeyoyOWFBRz26d2nIGUNY3wnkb1ANXxfXBouDDzk5--gmdzBe8eDbb1O6dFj4LFKfnnvGqSae_AmlT9_DTBlyD2xQDAsY0DM27qW3xTIkGTADQwwuJT33kloGgaJ43oEEags_S9WAwyS-mGaZO-d95npOy4IfYlkuq5ZepNI-Di9hQokLt5avwkDbH6_-JENwAFJwz6KD-Alhh01yG7SORY5KpfUaYiZKRFKZ_Wyz2Nl0mX-2BEY",
    imageAlt:
      "Dark moody 3D render of architectural geometric shapes with sharp golden light edges",
  },
  {
    slug: "husay",
    number: "04",
    title: "Husay",
    category: "Tax Compliance Platform",
    tagline:
      "AI-powered BIR filing and tax compliance for Filipino freelancers and businesses.",
    description: [
      "Husay streamlines Philippine tax compliance — from quarterly BIR filings to annual returns. Built specifically for Filipino freelancers and small businesses who struggle with the complexity of tax obligations.",
      "The platform features an intelligent dashboard with filing status tracking, tax calendar with priority-based timelines, document management, and an AI tax assistant that answers compliance questions in context.",
      "A CPA marketplace connects users with verified accountants for complex filing needs, while the tiered pricing model (Free, 8% Income Tax, Micro, SMB) scales with taxpayer complexity.",
    ],
    features: [
      {
        icon: "description",
        title: "BIR Filing Automation",
        description:
          "Guided filing for quarterly and annual BIR forms with status tracking and progress indicators.",
      },
      {
        icon: "calendar_month",
        title: "Tax Calendar",
        description:
          "Priority-based timeline of upcoming deadlines, payments, and filing requirements.",
      },
      {
        icon: "psychology",
        title: "AI Tax Assistant",
        description:
          "Context-aware AI that answers Philippine tax compliance questions and suggests deductions.",
      },
      {
        icon: "storefront",
        title: "CPA Marketplace",
        description:
          "Connect with verified CPAs for complex filings, audits, and tax planning.",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
        "Radix UI",
        "Recharts",
      ],
      backend: ["Supabase", "PostgreSQL", "AI Tax Engine"],
      infrastructure: [
        "Vercel",
        "Vercel Analytics",
        "Speed Insights",
        "TypeScript 5",
      ],
    },
    architecture:
      "Next.js App Router with 8 core dashboard pages. Three.js for premium landing page visuals. Tiered pricing engine supporting 4 taxpayer categories. Real-time filing status tracking with BIR form validation.",
    liveUrl: "https://husay-tax-compliance-production.up.railway.app",
    githubUrl: "https://github.com/ramonaljr/husay-tax-compliance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwhs0x8G6d4o-LIM-l4c2L9FnYH9xSvSo_hy4WWq0fNOoQVug0PcDe9tUNqcy_DPqt4aPllvp5oRNbLd0iGDZ5tcfphmXFMPCcQHP0Dt4o1HOLaVN57leD6ETMXtnpNnpn5aTSkVkjDg-bSH4vH1R7w3OLbnS7RncW91Zj8_ocWZonF-V_0B0VJD65pWpJ3XsHk6YeKm8GQ5tGRqCZTYkxgJpjxx3zAtI_ocXM65wzxdu02DKkDLSfXzANeyAv4Ji4_VjB459jvH4",
    imageAlt:
      "Cinematic 3D render of floating copper circuits glowing with intense orange light",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
