import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-[clamp(4rem,6vw,8rem)] bg-gradient-to-br from-[#1E2430] via-[#2A3142] to-[#1E2430] relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(76,140,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,140,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Elegant gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4C8CFF] rounded-full blur-[120px] opacity-10 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5F5F] rounded-full blur-[120px] opacity-10 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-[#FF5F5F] via-[#8B5FD9] to-[#4C8CFF] rounded-full" />
          </div>

          <h2
            className="text-[clamp(2.25rem,1.25rem+3.5vw,4rem)] font-bold text-white tracking-[-0.015em] leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)", textWrap: "balance" }}
          >
            Ready when you are.
            <br />
            <span className="bg-gradient-to-r from-[#FF5F5F] via-[#8B5FD9] to-[#4C8CFF] bg-clip-text text-transparent">
              Let's ride together.
            </span>
          </h2>

          <p
            className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-gray-300 opacity-85 mb-12 max-w-[60ch] mx-auto leading-[1.55]"
            style={{ textWrap: "pretty" }}
          >
            From pilot to scale, we partner with your teams - step by step. Join the hospitals already automating
            claims, contracts, and denials with Nuvae's intelligent RCM platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-[#FF5F5F] hover:bg-[#FF4545] text-white px-6 py-3.5 rounded-2xl text-lg font-semibold shadow-2xl hover:-translate-y-0.5 transition-all duration-250 group"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-6 py-3.5 rounded-2xl text-lg font-semibold hover:-translate-y-0.5 transition-all duration-250 bg-white/5 backdrop-blur-sm"
              >
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
