"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E2430] pt-20">
      {/* Background image with duotone treatment */}
      <div className="absolute inset-0">
        <Image
          src="/modern-hospital-revenue-cycle-office-workspace-wit.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Duotone overlay with navy base and coral/blue highlights */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2430]/95 via-[#1E2430]/90 to-[#1E2430]/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5F5F]/10 via-transparent to-[#4C8CFF]/10" />
        {/* Vignette for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E2430]/80" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF5F5F] rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#4C8CFF] rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="container relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-[clamp(1rem,2vw,2rem)] mb-16">
            <h1
              className="text-[clamp(3rem,2rem+4vw,4rem)] font-bold text-white leading-[1.1] tracking-[-0.02em] text-balance drop-shadow-2xl"
              style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
            >
              AI agents that unify
              <br />
              <span className="bg-gradient-to-r from-[#FF5F5F] to-[#4C8CFF] bg-clip-text text-transparent drop-shadow-lg">
                hospital revenue cycle
              </span>
            </h1>

            <p
              className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-gray-200 opacity-85 max-w-[60ch] mx-auto leading-[1.65]"
              style={{ textWrap: "pretty" }}
            >
              Nuvae connects Business Office, Case Management, and Admitting with intelligent agents - so your hospital
              submits cleaner claims, reduces rejections, and accelerates payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-[#FF5F5F] hover:bg-[#FF4545] text-white px-6 py-3.5 rounded-2xl text-lg font-semibold shadow-lg shadow-[#FF5F5F]/30 hover:shadow-[#FF5F5F]/50 hover:-translate-y-0.5 transition-all duration-250"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#4C8CFF] text-white hover:bg-[#4C8CFF]/20 px-6 py-3.5 rounded-2xl text-lg font-semibold hover:-translate-y-0.5 transition-all duration-250 bg-[#1E2430]/60 backdrop-blur-sm"
                >
                  Get Early Access
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-[0.875rem] text-gray-300 opacity-80 leading-[1.5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#4C8CFF]" />
                <span>Built for US hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#4C8CFF]" />
                <span>Works with Epic / Cerner / Meditech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#4C8CFF]" />
                <span>HIPAA-aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#4C8CFF]" />
                <span>SOC 2 (in progress)</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="relative max-w-4xl mx-auto">
              {/* Department cards */}
              <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap mb-8">
                {["Business Office", "Case Management", "Admitting"].map((dept, idx) => (
                  <div key={dept} className="relative group" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F5F] to-[#4C8CFF] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative bg-[#1E2430]/90 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 hover:border-[#4C8CFF]/50 transition-all duration-300 shadow-xl">
                      <div className="text-white font-semibold text-sm md:text-base">{dept}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection indicator */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#4C8CFF] to-transparent" />
                  <div className="w-2 h-2 bg-[#4C8CFF] rounded-full animate-pulse" />
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#4C8CFF] to-transparent" />
                </div>
                <p className="text-[#4C8CFF] text-sm font-semibold tracking-wide">Unified by Nuvae Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
