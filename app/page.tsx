import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhatIsNuvae } from "@/components/what-is-nuvae"
import { AgentsDiagram } from "@/components/agents-diagram"
import { StoryTiles } from "@/components/story-tiles"
import { ResultsSection } from "@/components/results-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { SecuritySection } from "@/components/security-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="what-is-nuvae">
        <WhatIsNuvae />
      </div>
      <div id="agents">
        <AgentsDiagram />
      </div>
      <StoryTiles />
      <div id="results">
        <ResultsSection />
      </div>
      <div id="integrations">
        <IntegrationsSection />
      </div>
      <div id="security">
        <SecuritySection />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  )
}
