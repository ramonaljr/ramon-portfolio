import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { PersonalIntro } from "@/components/sections/personal-intro";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { BentoFeatures } from "@/components/sections/bento-features";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { MidCTA } from "@/components/sections/mid-cta";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { About } from "@/components/sections/about";
import { Testimonial } from "@/components/sections/testimonial";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PersonalIntro />
        <LogoCloud />
        <BentoFeatures />
        <FeaturedProjects />
        <MidCTA />
        <ProcessTimeline />
        <About />
        <Testimonial />
        <Testimonials />
        <FinalCTA />
        <BlogPreview />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
