import type { Metadata } from "next"
import { DemoBookingForm } from "@/components/demo-booking-form"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Book a Demo with Nuvae.ai",
  description: "Schedule a personalized demo of Nuvae.ai's AI-powered revenue cycle management platform.",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(76,140,255,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,95,95,0.15),transparent_50%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to home</span>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="inline-block">
                <Image
                  src="/images/nuvae-white-logo.svg"
                  alt="Nuvae.ai"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  See Nuvae.ai in action
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                  Schedule a personalized demo and discover how our AI-powered platform can transform your revenue cycle
                  operations.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6 pt-4">
                <h2 className="text-xl font-semibold text-white/90">What you'll learn:</h2>
                <ul className="space-y-4">
                  {[
                    "How AI agents automate complex RCM workflows",
                    "Integration with your existing EHR systems",
                    "Real-world results from early deployments",
                    "Custom implementation roadmap for your hospital",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#4C8CFF] to-[#FF5F5F] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>HIPAA-aligned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>SOC 2 in progress</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Trusted by leading US hospital providers</p>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:sticky lg:top-8">
              <DemoBookingForm />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
