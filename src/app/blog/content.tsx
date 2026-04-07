"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion";

export function BlogContent() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-6xl mx-auto px-8">
        <StaggerChildren
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href="#"
                className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-1 mt-6 text-foreground font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4" />
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
