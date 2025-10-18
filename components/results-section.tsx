"use client"

import { TrendingUp, Shield, Clock, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const results = [
    {
      icon: Clock,
      value: "70%",
      label: "less time spent on appeals",
      color: "from-[#FF5F5F] to-[#FF8F8F]",
    },
    {
      icon: TrendingUp,
      value: "28%",
      label: "higher first-pass claim submission success",
      color: "from-[#4C8CFF] to-[#7CA8FF]",
    },
    {
      icon: Zap,
      value: "90%",
      label: "faster access to contract terms",
      color: "from-[#FF5F5F] to-[#4C8CFF]",
    },
    {
      icon: Shield,
      value: "30+",
      label: "specialized agents deployed in pilots",
      color: "from-[#7CA8FF] to-[#FF8F8F]",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] bg-gradient-to-br from-[#1E2430] via-[#1a1f2e] to-[#151922] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/successful-hospital-revenue-cycle-team-celebrating.jpg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2430]/90 via-[#1E2430]/80 to-[#1E2430]/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF5F5F] rounded-full blur-[150px] opacity-20 animate-pulse-glow" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#4C8CFF] rounded-full blur-[150px] opacity-20 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-[clamp(1rem,2vw,2rem)]">
            <h2
              className="text-[clamp(1.875rem,1.2rem+2.2vw,3rem)] font-bold text-white tracking-[-0.012em] leading-[1.15]"
              style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
            >
              Measurable impact across early deployments
            </h2>
            <p
              className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-gray-300 opacity-85 max-w-[60ch] mx-auto leading-[1.55]"
              style={{ textWrap: "pretty" }}
            >
              Even in limited pilots, Nuvae's agents have demonstrated faster turnaround times, cleaner claims, and
              higher reimbursement accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${result.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-[#1E2430]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#4C8CFF]/50 transition-all duration-250 text-center hover:bg-white/[0.06] hover:-translate-y-0.5">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <result.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div
                    className={`text-[clamp(3.5rem,3rem+2vw,4rem)] font-semibold tracking-[-0.02em] bg-gradient-to-br ${result.color} bg-clip-text text-transparent mb-3`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {result.value}
                  </div>
                  <div className="text-[1.0625rem] text-gray-300 opacity-75 leading-[1.5]">{result.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[0.875rem] text-gray-500 opacity-65 italic leading-[1.5]">
              * Indicative from early pilots and internal evaluations; results vary by hospital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
