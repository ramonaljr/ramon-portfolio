"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/shared/motion";

const stats = [
  { value: "40+", label: "Projects Delivered" },
  { value: "15+", label: "AI Integrations" },
  { value: "85%", label: "Avg. Efficiency Gain" },
  { value: "24h", label: "Response Time" },
];

const services = [
  {
    icon: "storage",
    number: "01",
    title: "Scalable Systems",
    headline: "Architectures that grow with you",
    description:
      "I design back-end systems built for global demand. From database schema to API design, every layer is engineered for performance, reliability, and growth — so your infrastructure never becomes the bottleneck.",
    includes: [
      "Custom API development (REST, GraphQL)",
      "Database design and optimization",
      "Authentication and authorization systems",
      "Real-time data synchronization",
      "Performance monitoring and optimization",
    ],
    idealFor: "Organizations scaling from thousands to millions of users.",
    projectRef: { slug: "payvio", title: "Payvio" },
    accent: "bg-primary-container",
    accentText: "text-on-primary-container",
  },
  {
    icon: "smart_toy",
    number: "02",
    title: "AI Automation",
    headline: "Intelligence that works while you sleep",
    description:
      "Custom AI agents and intelligent workflows that learn your business logic. I integrate LLMs, build reasoning engines, and create autonomous pipelines that reduce manual work by 50-85%.",
    includes: [
      "LLM integration (OpenAI, Anthropic, Google Gemini)",
      "Custom AI agents and chatbots",
      "Autonomous workflow engines",
      "Document processing and analysis",
      "AI-powered decision support systems",
    ],
    idealFor: "Businesses drowning in repetitive manual processes.",
    projectRef: { slug: "kanei", title: "Kanei" },
    accent: "bg-secondary-container",
    accentText: "text-on-secondary-container",
  },
  {
    icon: "developer_mode",
    number: "03",
    title: "Full-Stack Development",
    headline: "From pixel to production, every layer",
    description:
      "End-to-end builds across web and mobile with modern frameworks and obsessive attention to craft. I ship monorepo architectures with shared packages, design systems, and cross-platform native apps.",
    includes: [
      "Next.js / React web applications",
      "React Native / Expo mobile apps",
      "Monorepo architecture with shared packages",
      "Design system implementation",
      "Cross-platform (iOS, Android, Web)",
    ],
    idealFor: "Startups and enterprises that need a technical co-builder.",
    projectRef: { slug: "kalcio", title: "Kalcio" },
    accent: "bg-tertiary-container",
    accentText: "text-on-tertiary-container",
  },
  {
    icon: "hub",
    number: "04",
    title: "Intelligent Workflows",
    headline: "The connective tissue your stack is missing",
    description:
      "I build integrations that sync data across ERPs, CRMs, and custom platforms with AI-powered routing and decisioning. No more data silos, no more manual transfers.",
    includes: [
      "Third-party API integrations (Plaid, Stripe, etc.)",
      "Data pipeline design and automation",
      "Event-driven architectures",
      "Webhook processing and management",
      "Business logic automation",
    ],
    idealFor: "Companies with data trapped in disconnected systems.",
    projectRef: { slug: "husay", title: "Husay" },
    accent: "bg-primary-fixed",
    accentText: "text-on-primary-fixed",
  },
];

const processSteps = [
  {
    number: "01",
    icon: "search",
    title: "Discovery",
    description:
      "Deep dive into your domain, existing systems, and goals. I ask the questions others skip.",
  },
  {
    number: "02",
    icon: "architecture",
    title: "Architecture",
    description:
      "System design before code — data models, API contracts, deployment strategy, and technology choices.",
  },
  {
    number: "03",
    icon: "rocket_launch",
    title: "Build",
    description:
      "Rapid, iterative development with continuous deployment. You see progress weekly, not quarterly.",
  },
  {
    number: "04",
    icon: "support",
    title: "Ship & Support",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. I don't disappear after launch.",
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Stats Bar */}
      <section className="py-16 bg-surface-container border-b border-outline-variant/20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <StaggerChildren
            stagger={0.1}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-headline font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Services — Each with distinct visual treatment */}
      {services.map((service, i) => {
        const isDark = i % 2 === 1;

        return (
          <section
            key={service.title}
            className={`py-24 md:py-32 overflow-hidden ${
              isDark ? "bg-surface-container-high text-white" : "bg-surface"
            }`}
          >
            <div className="max-w-screen-2xl mx-auto px-8">
              {/* Service Number + Title Row */}
              <FadeIn>
                <div className="flex items-baseline gap-6 mb-6">
                  <span
                    className={`text-7xl md:text-9xl font-headline font-bold leading-none ${
                      isDark ? "text-white/10" : "text-on-surface/8"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-full ${service.accent} flex items-center justify-center`}
                      >
                        <MaterialIcon
                          name={service.icon}
                          className={`text-lg ${service.accentText}`}
                        />
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          isDark ? "text-white/40" : "text-on-surface-variant"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <h2
                      className={`text-3xl md:text-5xl font-headline font-bold leading-tight ${
                        isDark ? "text-white" : "text-on-surface"
                      }`}
                    >
                      {service.headline}
                    </h2>
                  </div>
                </div>
              </FadeIn>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                {/* Description + CTA */}
                <FadeIn delay={0.15} className="lg:col-span-5">
                  <p
                    className={`text-lg leading-relaxed mb-8 ${
                      isDark ? "text-white/70" : "text-on-surface-variant"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`inline-block px-4 py-2 rounded-lg mb-8 ${
                      isDark ? "bg-white/5" : "bg-surface-container"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isDark
                          ? "text-primary-container"
                          : "text-primary"
                      }`}
                    >
                      Ideal for:
                    </span>{" "}
                    <span
                      className={`text-sm ${
                        isDark ? "text-white/80" : "text-on-surface"
                      }`}
                    >
                      {service.idealFor}
                    </span>
                  </div>

                  <div>
                    <Link
                      href={`/work/${service.projectRef.slug}`}
                      className={`inline-flex items-center gap-2 font-bold hover:gap-3 transition-all duration-300 ${
                        isDark
                          ? "text-primary-container"
                          : "text-primary"
                      }`}
                    >
                      See {service.projectRef.title} case study
                      <MaterialIcon
                        name="arrow_forward"
                        className="text-lg"
                      />
                    </Link>
                  </div>
                </FadeIn>

                {/* Includes Grid */}
                <FadeIn delay={0.3} className="lg:col-span-7">
                  <div
                    className={`rounded-2xl p-8 md:p-10 ${
                      isDark
                        ? "bg-white/5 border border-white/10"
                        : "bg-surface-container border border-outline-variant/20"
                    }`}
                  >
                    <h3
                      className={`font-bold text-xs uppercase tracking-widest mb-6 ${
                        isDark ? "text-primary-container" : "text-primary"
                      }`}
                    >
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.includes.map((item, j) => (
                        <div
                          key={item}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                            isDark
                              ? "hover:bg-white/5"
                              : "hover:bg-surface-container-high"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${service.accent}`}
                          >
                            <span
                              className={`text-xs font-bold ${service.accentText}`}
                            >
                              {j + 1}
                            </span>
                          </div>
                          <span
                            className={`text-sm leading-relaxed ${
                              isDark
                                ? "text-white/80"
                                : "text-on-surface-variant"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="py-24 md:py-32 bg-surface-container">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="mb-16 text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
              How I Work
            </h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-xl mx-auto">
              Every engagement follows a proven four-phase approach — designed
              for clarity, speed, and quality.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connection line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-outline-variant/30" />

            <StaggerChildren
              stagger={0.12}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative text-center lg:text-left">
                    {/* Step circle */}
                    <div className="w-24 h-24 rounded-full bg-surface border-2 border-outline-variant/30 flex items-center justify-center mx-auto lg:mx-0 mb-6 relative z-10">
                      <MaterialIcon
                        name={step.icon}
                        className="text-primary text-3xl"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Phase {step.number}
                    </span>
                    <h3 className="text-xl font-headline font-bold mt-2 mb-3 text-on-surface">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface">
        <ScaleIn initialScale={0.95}>
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="relative rounded-2xl overflow-hidden bg-primary p-16 md:p-20 text-center">
              <div className="absolute inset-0 hero-gradient opacity-70" />
              <div className="absolute inset-0 mesh-accent opacity-20" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-6">
                  Ready to start?
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                  Every project begins with a conversation. Tell me what
                  you&apos;re building and I&apos;ll tell you how I can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-[0.97] transition-all duration-500"
                  >
                    Start a Conversation
                  </a>
                  <a
                    href="/work"
                    className="bg-transparent text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 active:scale-[0.97] transition-all duration-500"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </section>
    </>
  );
}
