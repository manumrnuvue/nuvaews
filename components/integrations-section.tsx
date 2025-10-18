"use client"

import Image from "next/image"
import { Zap, Users, Settings } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function IntegrationsSection() {
  const features = [
    {
      icon: Zap,
      title: "Supports Leading EHRs",
      description: "Epic, Cerner, Meditech, and more",
      accent: "from-[#4C8CFF]/10 to-[#4C8CFF]/5",
    },
    {
      icon: Users,
      title: "Fast, guided onboarding",
      description: "Dedicated implementation support",
      accent: "from-[#10B981]/10 to-[#10B981]/5",
    },
    {
      icon: Settings,
      title: "Customizable workflows",
      description: "Tailored to your hospital's needs",
      accent: "from-[#B794F6]/10 to-[#B794F6]/5",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <Image
          src="/modern-hospital-it-workstation-with-multiple-monit.jpg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/it-expert-helping-hospital-staff-setup-ehr-system-c.jpg"
                    alt="IT expert helping hospital staff with system implementation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2430]/50 via-[#4C8CFF]/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-[clamp(1rem,2vw,2rem)]">
                  <h2
                    className="text-[clamp(2.25rem,1.5rem+2.5vw,3rem)] font-bold text-[#1E2430] tracking-[-0.015em] leading-[1.15]"
                    style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
                  >
                    Seamless Implementation
                  </h2>
                  <p className="text-[1.125rem] text-gray-700 opacity-85 leading-[1.65]" style={{ textWrap: "pretty" }}>
                    Built for US hospital providers. We integrate with your hospital systems through FHIR, HL7, APIs,
                    and secure file flows.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="group relative p-8 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300/80 h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="relative space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200/60 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>

                      <div className="space-y-2">
                        <h3
                          className="text-xl font-semibold text-[#1E2430] tracking-[-0.01em] leading-tight"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-[1.0625rem] text-gray-600 opacity-80 leading-[1.6]">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
