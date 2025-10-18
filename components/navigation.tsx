"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "What is Nuvae", href: "#what-is-nuvae" },
    { label: "Agents", href: "#agents" },
    { label: "Results", href: "#results" },
    { label: "Integrations", href: "#integrations" },
    { label: "Security", href: "#security" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1E2430]/95 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative w-28 h-7 transition-transform duration-300 group-hover:scale-105">
                <Image src="/images/nuvae-white-logo.svg" alt="Nuvae.ai" fill className="object-contain" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-[#FF5F5F] hover:bg-[#FF4545] text-white px-6 py-2 font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1E2430]/98 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Link href="/demo">
                <Button size="lg" className="w-full bg-[#FF5F5F] hover:bg-[#FF4545] text-white font-semibold shadow-lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20" />
    </>
  )
}
