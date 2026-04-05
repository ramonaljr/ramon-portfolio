import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { PageHeader } from "@/components/shared/page-header";
import { AboutContent } from "./content";

export const metadata = {
  title: "About — Ramon",
  description:
    "Full-stack developer and AI specialist building at the intersection of design and intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Me"
          title="Building at the intersection of design & intelligence"
          description="I believe technology should feel invisible — powerful systems that just work, wrapped in interfaces that feel effortless."
        />
        <AboutContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
