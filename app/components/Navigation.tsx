'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const handleBurnClick = () => {
    window.location.href = '/#burn'
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="/">
            <img 
              src="/images/The_Nut_Cranksy.png"
              alt="The Nut Cransky"
              className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/gallery" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Collection
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Origin Story
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Marketplace
            </Link>
            <button 
              onClick={handleBurnClick}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
            >
              Burn for Art
            </button>
          </div>

          {/* Desktop Wallet Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-all">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                href="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                Collection
              </Link>
              <Link 
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                Origin Story
              </Link>
              <Link 
                href="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                Marketplace
              </Link>
              <button 
                onClick={handleBurnClick}
                className="text-gray-700 hover:text-gray-900 font-medium py-2 text-left"
              >
                Burn for Art
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all w-full">
                Connect Wallet
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}