import { Navigation } from "@/components/navigation"
import { EnterpriseHeroSection } from "@/components/enterprise-hero-section"
import { EnterpriseFeaturesSection } from "@/components/enterprise-features-section"
import { EnterpriseContactSection } from "@/components/enterprise-contact-section"
import { Footer } from "@/components/footer"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <EnterpriseHeroSection />
      <EnterpriseFeaturesSection />
      <EnterpriseContactSection />
      <Footer />
    </main>
  )
}
