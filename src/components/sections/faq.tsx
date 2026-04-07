"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";
import { SectionPill } from "@/components/shared/section-pill";

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Most projects ship in 4-8 weeks depending on complexity. I break work into weekly sprints with demos, so you see progress from week one — not a big reveal at the end.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Absolutely. About half my projects involve improving or extending existing systems. I'll audit the codebase first, identify quick wins, and propose a roadmap before writing any code.",
  },
  {
    question: "How do you handle communication?",
    answer:
      "Async-first with Slack or email, plus weekly sync calls. I send daily progress updates with screenshots and deploy previews. You'll never wonder what I'm working on.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I provide 30 days of post-launch support included in every project. After that, I offer ongoing maintenance retainers or ad-hoc support as needed. I also hand over full documentation and knowledge transfer.",
  },
  {
    question: "What's your tech stack preference?",
    answer:
      "I specialize in Next.js, React, Node.js, Supabase, and Python for AI work. But I adapt to your existing stack — the best technology is whatever solves your problem without creating new ones.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-foreground/70 transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 100, mass: 1.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 100, mass: 1.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <SectionPill label="FAQ" />
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-foreground">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren stagger={0.1}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
