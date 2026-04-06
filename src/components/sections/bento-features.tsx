"use client";

import Image from "next/image";
import { MaterialIcon } from "@/components/shared/material-icon";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/motion";

export function BentoFeatures() {
  return (
    <section id="services" className="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
      {/* Section Header */}
      <FadeIn className="mb-20">
        <span className="text-primary font-bold uppercase tracking-widest text-xs">
          What I do
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 text-on-surface">
          Things I&apos;m good at
        </h2>
      </FadeIn>

      {/* Bento Grid */}
      <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Feature 1: Scalable Systems — wide */}
        <StaggerItem className="md:col-span-8">
          <div className="group relative overflow-hidden bg-surface-container-high rounded-xl aspect-[16/10] md:aspect-auto min-h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHbKCnBu1CAGl_4FE0N1ttU8mxkV_qnGeJizzCFyJRJ358w27JTh_6OktJcE0qe3_SlKpFDzuMyy8tGjfKq7Bd0UDjss2VjnRvP1U95EjUSHCujRjYqiZkAc165O_X9By4Izr7gRSWt4_LcBq3tIxUJnf1EqKr_KmXIcGJMTcuaddddrhjvYqtNar9gmg2ohV96Qv6sCFR6a1YSuNK2dhIAmYIFaIbeD9YDkeaSUa1iiZE2T7wq3SqdJ7S7PCGvYPQymag1A4qWz0"
              alt="High-tech server hardware with glowing orange fiber optic cables"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-10">
              <h3 className="text-3xl font-headline text-white font-bold mb-4">
                Systems that scale
              </h3>
              <p className="text-white/70 max-w-md font-body leading-relaxed">
                I design backends that hold up under real traffic — clean APIs,
                solid databases, and infrastructure that doesn&apos;t fall over at 2 AM.
              </p>
            </div>
          </div>
        </StaggerItem>

        {/* Feature 2: AI Automation — tall */}
        <StaggerItem className="md:col-span-4">
          <div className="group relative overflow-hidden bg-surface-container-high rounded-xl min-h-[400px] h-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRMaG2Bni5mOsSx7TYZMQIGZcb2rRMiofNGwafgTBC7ybOkSEhUooCBpyScMLCj-8mtFRO_86fBfjUcZkDgBD0sYzWDoYCjQmQPgCqcfUNIDpP7uxR4okE5di6TbeIpH-37FHwQwQEkA7g4YOIFuZEtmDXXc8WwtfU9sNbKCIlsJcj35zMATeRk4EMKVtdXkKT3A8vLxuC-RN4vp5IfYtHDjcPxz3OYq6RptO7jjshuHVYIC3DDF00qqkC1ZuqdVAEm9bpmVo3tU"
              alt="Neural network visualization with glowing orange nodes on dark background"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60" />
            <div className="absolute bottom-0 p-10">
              <h3 className="text-2xl font-headline text-white font-bold mb-2">
                AI that does the boring stuff
              </h3>
              <p className="text-white/80 text-sm font-body">
                Custom AI agents that handle the repetitive work your team
                shouldn&apos;t be doing manually.
              </p>
            </div>
          </div>
        </StaggerItem>

        {/* Feature 3: Full-stack Development — solid card */}
        <StaggerItem className="md:col-span-4">
          <div className="group relative overflow-hidden bg-surface-container-high rounded-xl min-h-[400px] h-full">
            <div className="p-10 h-full flex flex-col justify-between bg-surface-container-highest text-white">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <MaterialIcon
                  name="developer_mode"
                  className="text-primary-fixed"
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-white/60 text-sm">
                  End-to-end builds — from the UI your users see to the servers
                  running behind it.
                </p>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Feature 4: Intelligent Workflows — wide accent */}
        <StaggerItem className="md:col-span-8">
          <div className="group relative overflow-hidden bg-primary-container rounded-xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-10 md:w-1/2">
                <h3 className="text-3xl font-headline text-on-primary-container font-bold mb-4">
                  Workflow automation
                </h3>
                <p className="text-on-primary-container/80 font-body mb-8">
                  I connect the tools you already use and automate the steps in
                  between — less copy-paste, more getting things done.
                </p>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 font-bold text-on-primary-container group/link"
                >
                  How I work
                  <MaterialIcon
                    name="arrow_forward"
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
              <div className="md:w-1/2 relative min-h-[250px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMTKjNzkCoGGw_k2iJ_pLm5fUV1e1jHXkecRVuAJ7__OguO41_L1P-La13LvZzHdb8hZwNOxiCmQ45hFD9z2vRHJHRyHR-1lFtW1OXyiI5vUMUcdYqQT8rzhcF64aZIN5b4zn6OVqv06Aaoh428GUQYToe1z7s55uH7Ra7GsJDcNRYkiLfkHofBCd_adG_cbwMym15MBtg-wea0-ijHEA1z1scgHqAKYdLh_BTs-i8dfXrOYRmNGf7pvkcIrPcWygYfHZ3mI6nAAU"
                  alt="Sleek titanium chassis with glowing internal components in warm orange"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerChildren>
    </section>
  );
}
