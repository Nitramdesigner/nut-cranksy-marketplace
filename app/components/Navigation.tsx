import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <img 
              src="/images/The_Nut_Cranksy.png"
              alt="The Nut Cransky"
              className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Navigation Links */}
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
            <Link href="/#burn" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Burn for Art
            </Link>

          {/* Wallet Button Placeholder */}
          <div className="flex items-center gap-4">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-all">
              Connect Wallet
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}