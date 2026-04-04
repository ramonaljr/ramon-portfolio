import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { BentoFeatures } from "@/components/sections/bento-features";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { UnifiedLayer } from "@/components/sections/unified-layer";
import { About } from "@/components/sections/about";
import { Testimonial } from "@/components/sections/testimonial";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <BentoFeatures />
        <FeaturedProjects />
        <UnifiedLayer />
        <About />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
