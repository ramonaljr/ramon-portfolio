import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { PageHeader } from "@/components/shared/page-header";
import { ServicesContent } from "./content";

export const metadata = {
  title: "Services — Ramon",
  description:
    "Full-stack development, AI automation, scalable systems, and intelligent workflows — bespoke solutions for modern enterprises.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Services"
          title="What I Build"
          description="Bespoke technology solutions — from AI-powered platforms to cross-platform mobile applications."
        />
        <ServicesContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
