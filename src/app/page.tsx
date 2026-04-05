import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { BentoFeatures } from "@/components/sections/bento-features";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { MidCTA } from "@/components/sections/mid-cta";
import { UnifiedLayer } from "@/components/sections/unified-layer";
import { About } from "@/components/sections/about";
import { Testimonial } from "@/components/sections/testimonial";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <BentoFeatures />
        <FeaturedProjects />
        <MidCTA />
        <UnifiedLayer />
        <About />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
