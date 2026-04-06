"use client";

import Link from "next/link";
import { posts } from "@/data/posts";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";
import { MaterialIcon } from "@/components/shared/material-icon";

export function BlogContent() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href="#"
                className="group block rounded-2xl border border-outline-variant/20 bg-surface-container p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(250,112,37,0.08)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-headline font-bold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center gap-1 mt-6 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read article
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
