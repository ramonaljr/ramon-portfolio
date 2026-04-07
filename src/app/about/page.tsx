import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { AboutHero } from "./hero";
import { AboutContent } from "./content";

export const metadata = {
  title: "About",
  description:
    "Full-stack developer and AI specialist building at the intersection of design and intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
