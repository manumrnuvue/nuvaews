"use client"

import { FileCheck, AlertCircle, FileText, Stethoscope, ClipboardCheck } from "lucide-react"
import { useState } from "react"

export function AgentsSection() {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)

  const agents = [
    {
      icon: FileCheck,
      name: "Claims Optimization Agent",
      description:
        "Reviews claims before submission - validates against payer contracts, coding rules, and policy updates to prevent avoidable rejections.",
      color: "from-[#FF5F5F] to-[#FF8F8F]",
    },
    {
      icon: AlertCircle,
      name: "Denials Management Agent",
      description:
        "Drafts appeal letters and PDRs automatically, flags denial trends, and learns from past overturn outcomes.",
      color: "from-[#4C8CFF] to-[#7CA8FF]",
    },
    {
      icon: FileText,
      name: "Contract Intelligence Agent",
      description:
        "Extracts rates, carve-outs, exclusions, and policy links - turning complex PDFs into a searchable knowledge base.",
      color: "from-[#FF5F5F] to-[#4C8CFF]",
    },
    {
      icon: Stethoscope,
      name: "CDI Assist Agent",
      description:
        "Detects missing CC/MCC, malnutrition, or sepsis indicators pre-bill to improve DRG accuracy and revenue integrity.",
      color: "from-[#4C8CFF] to-[#FF5F5F]",
    },
    {
      icon: ClipboardCheck,
      name: "Pre-Auth & Payer Notification Agents",
      description:
        "Automate pre-authorization requests and notification submissions, reducing compliance-related denials at the source.",
      color: "from-[#7CA8FF] to-[#FF8F8F]",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] bg-gradient-to-br from-[#1E2430] via-[#1a1f2e] to-[#151922] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/circuit-grid-pattern.jpg')] opacity-5" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-[clamp(1rem,2vw,2rem)]">
            <h2
              className="text-[clamp(2.25rem,1.5rem+2.5vw,3rem)] font-bold text-white tracking-[-0.015em] leading-[1.15]"
              style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
            >
              Meet the agents
            </h2>
            <p
              className="text-[1.125rem] text-gray-300 opacity-85 max-w-[60ch] mx-auto leading-[1.65]"
              style={{ textWrap: "pretty" }}
            >
              Role-aware assistants that collaborate across teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredAgent(idx)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${agent.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                />

                <div className="relative bg-[#1E2430]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#4C8CFF]/50 transition-all duration-250 h-full hover:bg-white/[0.06]">
                  <div className="mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${agent.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <agent.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white tracking-[-0.01em] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {agent.name}
                  </h3>
                  <p className="text-[1.0625rem] text-gray-400 opacity-80 leading-[1.6]">{agent.description}</p>

                  {/* Connection indicator */}
                  {hoveredAgent === idx && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4C8CFF] rounded-full animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Connection visualization */}
          <div className="relative h-20 mb-8">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5F5F" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#4C8CFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FF5F5F" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="text-center">
            <p className="text-[1.125rem] text-gray-400 opacity-80 leading-[1.65] max-w-[72ch] mx-auto">
              From cleaning claims to generating appeals, Nuvae agents work behind the scenes to handle repetitive work
              and highlight the insights that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
