"use client";

import Link from "next/link";
import { SectionPill } from "@/components/shared/section-pill";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/shared/motion";
import { posts } from "@/data/posts";

export function BlogPreview() {
  return (
    <section className="py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-8">
        <FadeIn className="text-center mb-16">
          <SectionPill label="Blog" />
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">
            Dev Insights &amp; Trends
          </h2>
        </FadeIn>

        <StaggerChildren
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Placeholder image */}
                  <div className="aspect-[16/10] bg-muted" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium bg-foreground text-background px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
