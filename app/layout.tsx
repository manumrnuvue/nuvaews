import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import TawkTo from "@components/tawk";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nuvae.ai - AI Infrastructure for Revenue Cycle Transformation",
  description: "AI-powered healthcare RCM platform for hospitals. Break the silos. Bring RCM together.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        
        {children}
        <Analytics />
        <TawkTo></TawkTo>
      </body>
    </html>
  )
}
