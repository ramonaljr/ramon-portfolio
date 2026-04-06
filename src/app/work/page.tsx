import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { PageHeader } from "@/components/shared/page-header";
import { WorkGrid } from "./grid";

export const metadata = {
  title: "Work — Ramon",
  description:
    "Selected projects showcasing full-stack development, AI automation, and cross-platform mobile applications.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Portfolio"
          title="Selected Work"
          description="Projects where design meets deep technical craft. Each one built from the ground up with intention."
        />
        <WorkGrid />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
