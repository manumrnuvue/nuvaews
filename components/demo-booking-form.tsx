"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitDemoRequest } from "@/app/actions/submit-demo"
import { Loader2, CheckCircle2 } from "lucide-react"

export function DemoBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitDemoRequest(formData)

      if (result.success) {
        setIsSuccess(true)
        // Reset form
        e.currentTarget.reset()
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Request received!</h3>
            <p className="text-gray-400 leading-relaxed">
              Thank you for your interest in Nuvae.ai. Our team will reach out within 24 hours to schedule your
              personalized demo.
            </p>
          </div>
          <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-white/10 hover:bg-white/5">
            Submit another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Book your demo</h2>
          <p className="text-sm text-gray-400">Fill out the form below and we'll be in touch shortly.</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <div className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-300">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Smith"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 h-12 rounded-xl"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-300">
              Work Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@hospital.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 h-12 rounded-xl"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-gray-300">
              Hospital / Organization *
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Memorial Hospital"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 h-12 rounded-xl"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 h-12 rounded-xl"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium text-gray-300">
              Your Role
            </Label>
            <Input
              id="role"
              name="role"
              type="text"
              placeholder="CFO, CIO, RCM Director, etc."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 h-12 rounded-xl"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-300">
              Tell us about your needs (optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="What challenges are you facing with your revenue cycle?"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4C8CFF] focus:ring-[#4C8CFF]/20 rounded-xl resize-none"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-[#FF5F5F] hover:bg-[#FF4545] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request Demo"
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}
