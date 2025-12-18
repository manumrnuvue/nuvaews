import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src="https://embed.tawk.to/6938fda08465ad197f9bc106/1jc39tfla";
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      
      <body className={`font-sans antialiased`}>
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}
