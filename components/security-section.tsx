"use client"

import { Shield, Lock, FileCheck, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA-aligned architecture",
      description: "PHI minimization and secure handling throughout",
    },
    {
      icon: Lock,
      title: "SOC 2 in progress",
      description: "Independent audit of security controls underway",
    },
    {
      icon: FileCheck,
      title: "Audit trails",
      description: "Complete traceability of all system actions",
    },
    {
      icon: Eye,
      title: "Security artifacts",
      description: "Documentation available under NDA",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] bg-gradient-to-br from-[#1E2430] via-[#1a1f2e] to-[#151922] relative overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4C8CFF]/10 border border-[#4C8CFF]/30 rounded-full mb-2">
              <Shield className="h-4 w-4 text-[#4C8CFF]" />
              <span className="text-sm font-medium text-[#4C8CFF]">Enterprise Security</span>
            </div>
            <h2
              className="text-[clamp(1.875rem,1.2rem+2.2vw,3rem)] font-bold text-white tracking-[-0.012em] leading-[1.15]"
              style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
            >
              Built for compliance.{" "}
              <span className="bg-gradient-to-r from-[#FF5F5F] via-[#B857FF] to-[#B857FF] bg-clip-text text-transparent">
                Ready for enterprise.
              </span>
            </h2>
            <p
              className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-gray-300 opacity-85 max-w-[65ch] mx-auto leading-[1.55]"
              style={{ textWrap: "pretty" }}
            >
              HIPAA-aligned architecture with PHI minimization and traceability. SOC 2 audit in progress. Audit trails
              and security artifacts available under NDA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {securityFeatures.map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-[#1E2430]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#4C8CFF]/50 transition-all duration-250 h-full hover:bg-white/[0.06]">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#4C8CFF]/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-[#4C8CFF]" />
                    </div>
                  </div>
                  <h3
                    className="text-lg font-semibold text-white tracking-[-0.01em] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[0.9375rem] text-gray-400 opacity-80 leading-[1.6]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2430]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#4C8CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="h-7 w-7 text-[#4C8CFF]" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl md:text-2xl font-bold text-white tracking-[-0.01em] mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Designed for Healthcare Data Protection
                </h3>
                <p className="text-[1rem] text-gray-300 opacity-80 leading-[1.6] mb-4">
                  Our architecture follows healthcare industry best practices with end-to-end encryption, role-based
                  access controls, and comprehensive audit logging. Every interaction with patient data is tracked and
                  monitored.
                </p>
                <Button variant="link" className="text-[#4C8CFF] hover:text-[#6BA3FF] p-0 h-auto font-semibold">
                  Learn more about security →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
