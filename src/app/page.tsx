import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AppDock } from "@/components/app-dock"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AppDock />
      <FeaturesSection />
    </main>
  )
}
