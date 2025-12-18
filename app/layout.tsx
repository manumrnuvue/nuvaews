"use client"
import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { useEffect } from "react";

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
  useEffect(() => {
    // Prevent loading the script multiple times
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6938fda08465ad197f9bc106/1jc39tfla";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Optional cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // runs once on initial load
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}
