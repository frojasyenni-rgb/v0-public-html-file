import { HeroSection } from "@/components/hero-section"
import { WhyAdvisorSection } from "@/components/why-advisor-section"
import { RequirementsSection } from "@/components/requirements-section"
import { SuccessStorySection } from "@/components/success-story-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { RegistrationSection } from "@/components/registration-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyAdvisorSection />
        <RequirementsSection />
        <SuccessStorySection />
        <ContactFormSection />
        <FinalCtaSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  )
}
