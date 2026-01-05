'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/The_Nut_Cranksy.png" alt="The Nut Cranksy" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-600 transition">Home</Link>
            <Link href="/about" className="hover:text-gray-600 transition">About</Link>
            <Link href="/gallery" className="hover:text-gray-600 transition">Gallery</Link>
            <a 
              href="https://opensea.io/collection/the-nut-cranksy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Buy on OpenSea
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-gray-600 transition">Home</Link>
            <Link href="/about" className="block hover:text-gray-600 transition">About</Link>
            <Link href="/gallery" className="block hover:text-gray-600 transition">Gallery</Link>
            <a 
              href="https://opensea.io/collection/the-nut-cranksy"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Buy on OpenSea
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}