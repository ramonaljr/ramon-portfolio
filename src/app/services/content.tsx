"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";

const services = [
  {
    icon: "storage",
    title: "Scalable Systems",
    description:
      "I design back-end architectures built for global demand. From database schema to API design, every layer is built for performance, reliability, and growth.",
    includes: [
      "Custom API development (REST, GraphQL)",
      "Database design and optimization",
      "Authentication and authorization systems",
      "Real-time data synchronization",
      "Performance monitoring and optimization",
    ],
    idealFor: "Organizations scaling from thousands to millions of users.",
    projectRef: { slug: "payvio", title: "Payvio" },
  },
  {
    icon: "smart_toy",
    title: "AI Automation",
    description:
      "Custom AI agents and intelligent workflows that learn your business logic. I integrate LLMs, build reasoning engines, and create self-healing pipelines.",
    includes: [
      "LLM integration (OpenAI, Anthropic, Google Gemini)",
      "Custom AI agents and chatbots",
      "Autonomous workflow engines",
      "Document processing and analysis",
      "AI-powered decision support systems",
    ],
    idealFor: "Businesses looking to reduce manual work by 50-85%.",
    projectRef: { slug: "kanei", title: "Kanei" },
  },
  {
    icon: "developer_mode",
    title: "Full-Stack Development",
    description:
      "End-to-end builds from pixel-perfect interfaces to robust server-side logic. I work across web and mobile with modern frameworks and obsessive attention to craft.",
    includes: [
      "Next.js / React web applications",
      "React Native / Expo mobile apps",
      "Monorepo architecture with shared packages",
      "Design system implementation",
      "Cross-platform development (iOS, Android, Web)",
    ],
    idealFor: "Startups and enterprises that need a technical co-builder.",
    projectRef: { slug: "kalcio", title: "Kalcio" },
  },
  {
    icon: "hub",
    title: "Intelligent Workflows",
    description:
      "I build connective tissue between your systems — integrations that sync data across ERPs, CRMs, and custom platforms with AI-powered routing and decisioning.",
    includes: [
      "Third-party API integrations (Plaid, Stripe, etc.)",
      "Data pipeline design and automation",
      "Event-driven architectures",
      "Webhook processing and management",
      "Business logic automation",
    ],
    idealFor: "Companies with data trapped in disconnected systems.",
    projectRef: { slug: "husay", title: "Husay" },
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your domain, existing systems, and goals. I ask the questions others skip.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "I design the system before writing a line of code — data models, API contracts, deployment strategy, and technology choices.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Rapid, iterative development with continuous deployment. You see progress weekly, not quarterly.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. I don't disappear after launch.",
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Services Detail */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 space-y-20">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                      <MaterialIcon
                        name={service.icon}
                        className="text-primary text-xl"
                      />
                    </div>
                    <h2 className="text-3xl font-headline font-bold text-on-surface">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link
                    href={`/work/${service.projectRef.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    See {service.projectRef.title} case study
                    <MaterialIcon name="arrow_forward" className="text-lg" />
                  </Link>
                </div>

                {/* Details card */}
                <div
                  className={`bg-surface-container rounded-xl p-8 border border-outline-variant/20 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-on-surface-variant"
                      >
                        <MaterialIcon
                          name="check_circle"
                          className="text-primary-container text-lg shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-outline-variant/20">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      Ideal For
                    </h4>
                    <p className="text-on-surface font-medium">
                      {service.idealFor}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-on-background text-white">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16 text-center">
            <span className="text-primary-container font-bold uppercase tracking-widest text-xs">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">
              How I Work
            </h2>
          </FadeIn>

          <StaggerChildren
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 h-full">
                  <span className="text-3xl font-headline font-bold text-primary-container">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-headline font-bold mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">
              Ready to start?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10">
              Every project begins with a conversation. Tell me what
              you&apos;re building and I&apos;ll tell you how I can help.
            </p>
            <a
              href="/contact"
              className="inline-flex bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(250,112,37,0.3)] active:scale-[0.97] transition-all duration-500"
            >
              Let&apos;s Talk
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
