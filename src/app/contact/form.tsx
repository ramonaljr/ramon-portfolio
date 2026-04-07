"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Clock, Check } from "lucide-react";
import { ResumeButton } from "@/components/shared/resume-button";
import { FadeIn } from "@/components/shared/motion";
import { sendContactEmail } from "./action";

const projectTypes = [
  "AI Automation",
  "Full-Stack Development",
  "Mobile App",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "Under $5k",
  "$5k — $15k",
  "$15k — $50k",
  "$50k+",
  "Let's discuss",
];

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
    error: null,
  });

  return (
    <section className="bg-background py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — Contact Info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a full platform, an AI integration, or a
                  strategic technology partner — I&apos;m here to help.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:hello@ramon.dev"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                      hello@ramon.dev
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium text-foreground">
                      Philippines (Remote)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Response Time
                    </div>
                    <div className="font-medium text-foreground">
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {[
                    { name: "GitHub", url: "https://github.com/ramonaljr" },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/ramon-vallejera-jr-mba-6976a3115/",
                    },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:bg-muted transition-all"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Download my resume
                </p>
                <ResumeButton />
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-muted rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Message sent!
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form
                action={formAction}
                className="bg-muted rounded-2xl p-8 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all"
                    >
                      <option value="">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {state.error && (
                  <p className="text-red-600 text-sm">{state.error}</p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-foreground text-background py-4 rounded-full font-medium text-lg hover:bg-foreground/90 active:scale-[0.97] transition-all duration-300 disabled:opacity-50"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
