"use client"

import { Brain, Workflow, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function WhatIsNuvae() {
  const features = [
    {
      icon: Brain,
      title: "Understands RCM end-to-end",
      description: "From pre-auth to payment, our AI comprehends every stage of the revenue cycle.",
    },
    {
      icon: Workflow,
      title: "Works with your EHR & data flows",
      description: "Secure API, FHIR, or file-based integrations with your existing systems.",
    },
    {
      icon: Users,
      title: "Designed to enhance people - not replace them",
      description: "AI assistants that amplify your team's capabilities and efficiency.",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] md:py-32 bg-[#F5F6F7] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/modern-hospital-revenue-cycle-office-with-diverse-.jpg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-[clamp(1rem,2vw,2rem)]">
              <h2
                className="text-[clamp(2.25rem,1.5rem+2.5vw,3rem)] font-bold text-[#1E2430] tracking-[-0.015em] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
              >
                Why Nuvae works for healthcare providers
              </h2>
              <p
                className="text-[1.125rem] text-gray-700 opacity-85 max-w-[60ch] mx-auto leading-[1.65]"
                style={{ textWrap: "pretty" }}
              >
                Built specifically for US healthcare providers, Nuvae integrates with your existing systems and enhances
                your team's capabilities across the entire revenue cycle.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center mb-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/hospital-revenue-cycle-office-professionals-working.jpg"
                    alt="Hospital revenue cycle professionals working"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Duotone overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2430]/40 via-transparent to-[#4C8CFF]/30 mix-blend-multiply" />
                  {/* Grain texture */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:space-y-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF5F5F] to-[#4C8CFF] rounded-lg flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-semibold text-[#1E2430] tracking-[-0.01em] mb-2 leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-[1.0625rem] text-gray-600 opacity-80 leading-[1.6]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#4C8CFF] hover:bg-[#3A7AEF] text-white px-6 py-3.5 rounded-2xl text-lg font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-250"
            >
              Explore the Agents
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
