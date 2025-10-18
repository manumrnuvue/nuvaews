"use client"

import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function StoryTiles() {
  const stories = [
    {
      icon: CheckCircle2,
      tag: "Admitting",
      before: "Admissions that staff dread",
      after: "From friction to a guided, calm start",
      description:
        "Guided checklists, pre-auth handoffs, and fewer rework loops make admissions smooth and stress-free.",
      color: "from-[#FF5F5F] to-[#FF8F8F]",
      image: "/hospital-admitting-desk-staff-helping-patient-with.jpg",
    },
    {
      icon: Clock,
      tag: "Case Management",
      before: "Missed payer notifications",
      after: "Notifications sent on time, every time",
      description:
        "Automated detection and timely notifications sent and tracked - no more compliance-related denials.",
      color: "from-[#4C8CFF] to-[#7CA8FF]",
      image: "/hospital-case-manager-reviewing-patient-files-and-.jpg",
    },
    {
      icon: FileText,
      tag: "Appeals",
      before: "Stacks of PDFs",
      after: "From piles of PDFs to ready-to-review drafts",
      description: "AI-drafted appeals with contract and policy citations for faster review and higher overturn rates.",
      color: "from-[#FF5F5F] to-[#4C8CFF]",
      image: "/hospital-billing-specialist-reviewing-appeals-docu.jpg",
    },
  ]

  return (
    <section className="py-[clamp(4rem,6vw,8rem)] bg-[#F5F6F7]">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20 space-y-[clamp(1rem,2vw,2rem)]">
              <h2
                className="text-[clamp(1.875rem,1.2rem+2.2vw,3rem)] font-bold text-[#1E2430] tracking-[-0.012em] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
              >
                Real work, real stories
              </h2>
              <p
                className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-gray-700 opacity-85 max-w-[60ch] mx-auto leading-[1.55]"
                style={{ textWrap: "pretty" }}
              >
                See how Nuvae transforms daily workflows across revenue cycle teams
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {stories.map((story, idx) => {
              const isImageLeft = idx % 2 === 0
              const isFirst = idx === 0

              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className={isFirst ? "md:scale-105" : ""}>
                    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isFirst ? "md:gap-16" : ""}`}>
                      <div
                        className={`relative aspect-[4/3] overflow-hidden rounded-2xl group ${isImageLeft ? "md:order-1" : "md:order-2"}`}
                      >
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.tag}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Duotone overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-20 mix-blend-multiply`}
                        />
                        {/* Grain texture */}
                        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
                        </div>
                        {/* Tag overlay */}
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${story.color} rounded-lg flex items-center justify-center`}
                            >
                              <story.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-[#4C8CFF]">{story.tag}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`flex flex-col justify-center ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
                        {/* Before/After */}
                        <div className="space-y-4 mb-6">
                          <div>
                            <div className="text-[0.875rem] text-gray-500 opacity-65 uppercase tracking-wide mb-1 leading-[1.5]">
                              Before
                            </div>
                            <div className="text-[1.0625rem] text-gray-600 opacity-80 line-through leading-[1.6]">
                              {story.before}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-[#4C8CFF]" />
                          <div>
                            <div className="text-[0.875rem] text-[#4C8CFF] opacity-65 uppercase tracking-wide mb-1 leading-[1.5]">
                              After
                            </div>
                            <div
                              className={`font-semibold text-[#1E2430] tracking-[-0.01em] leading-tight ${
                                isFirst ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                              }`}
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {story.after}
                            </div>
                          </div>
                        </div>

                        <p
                          className={`text-gray-600 opacity-80 leading-[1.6] ${isFirst ? "text-[1.125rem]" : "text-[1.0625rem]"}`}
                        >
                          {story.description}
                        </p>
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
