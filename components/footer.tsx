import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0F1419] text-gray-400 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Logo and tagline */}
          <div className="mb-12">
            <Image
              src="/images/nuvae-white-logo.svg"
              alt="Nuvae.ai"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-500">AI infrastructure for revenue cycle transformation. Built for hospitals.</p>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">© 2025 Nuvae.ai. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="terms.html" className="text-gray-400 hover:text-[#4C8CFF] transition-colors" target="_blank">
                Privacy Policy
              </a>
              <a href="privacy.html" className="text-gray-400 hover:text-[#4C8CFF] transition-colors" target="_blank">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
