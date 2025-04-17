"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]">
  Hack O Relay
</span>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-white hover:text-[#4285F4] transition-colors">
            About
          </a>
          <a href="#schedule" className="text-sm font-medium text-white hover:text-[#EA4335] transition-colors">
            Schedule
          </a>
          <a href="#sponsors" className="text-sm font-medium text-white hover:text-[#FBBC05] transition-colors">
            Sponsors
          </a>
          <a href="#faq" className="text-sm font-medium text-white hover:text-[#34A853] transition-colors">
            FAQ
          </a>
          <Button className="bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:opacity-90 text-white">
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 text-white">
            <a href="#about" className="text-sm font-medium py-2 hover:text-[#4285F4]" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#schedule" className="text-sm font-medium py-2 hover:text-[#EA4335]" onClick={() => setIsMenuOpen(false)}>
              Schedule
            </a>
            <a href="#sponsors" className="text-sm font-medium py-2 hover:text-[#FBBC05]" onClick={() => setIsMenuOpen(false)}>
              Sponsors
            </a>
            <a href="#faq" className="text-sm font-medium py-2 hover:text-[#34A853]" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <Button className="bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:opacity-90 w-full text-white">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
