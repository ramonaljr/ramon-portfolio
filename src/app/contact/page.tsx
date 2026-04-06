import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "./form";

export const metadata = {
  title: "Contact — Ramon",
  description:
    "Have a project in mind? Let's talk about AI automation, full-stack development, or strategic technology partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Contact"
          title="Let's talk"
          description="Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly."
        />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
