import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { PageHeader } from "@/components/shared/page-header";
import { BlogContent } from "./content";

export const metadata = {
  title: "Blog — Ramon",
  description:
    "Thoughts on full-stack development, AI engineering, and building products that matter.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Blog"
          title="Thoughts & Insights"
          description="Writing about full-stack development, AI engineering, and lessons learned building real products."
        />
        <BlogContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
