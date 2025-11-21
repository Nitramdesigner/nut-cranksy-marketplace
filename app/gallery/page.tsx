'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('number') // 'number' or 'name'
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)

  // Generate all 100 characters
  const allCharacters = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    number: String(i).padStart(4, '0'),
    name: `Character ${i}`, // Placeholder - we'll add real names later
    image: `/images/characters/nut-cranksy-${i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0')}.png`
  }))

  // Filter and sort
  const filteredCharacters = allCharacters
    .filter(char => 
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.number.includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortBy === 'number') return a.id - b.id
      return a.name.localeCompare(b.name)
    })

  return (
    <main className="min-h-screen bg-white">
      
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            The Complete Collection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            100 hand-drawn characters. Each one a transformation.
          </p>
          
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            
            {/* Search */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search by name or number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-lg"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-lg bg-white cursor-pointer"
            >
              <option value="number">Sort by Number</option>
              <option value="name">Sort by Name</option>
            </select>

          </div>

          <p className="text-gray-500 mt-6">
            Showing {filteredCharacters.length} of 100 characters
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCharacters.map((char) => (
              <div
                key={char.id}
                onClick={() => setSelectedCharacter(char.id)}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">#{char.number}</p>
                  <p className="font-semibold text-gray-900">{char.name}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">No characters found</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-gray-900 underline"
              >
                Clear search
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Modal - Character Detail */}
      {selectedCharacter !== null && (
        <div
          onClick={() => setSelectedCharacter(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors flex items-center justify-center text-2xl z-10"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              
              {/* Image */}
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                <img
                  src={allCharacters[selectedCharacter].image}
                  alt={allCharacters[selectedCharacter].name}
                  className="w-full h-auto max-w-md"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    #{allCharacters[selectedCharacter].number}
                  </p>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    {allCharacters[selectedCharacter].name}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    One of 100 hand-drawn transformations from the original Nut Cransky collection. Each character represents a unique theatrical performance captured in time.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Edition:</span>
                      <span className="font-semibold">5 available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Series:</span>
                      <span className="font-semibold">Series 1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year:</span>
                      <span className="font-semibold">2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="/marketplace" className="flex-1">
                    <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                      View in Marketplace
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            Ready to Own a Piece of Theater History?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Each Nut Cransky NFT is a limited edition transformation, hand-drawn with intention and soul.
          </p>
          <Link href="/marketplace">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold py-5 px-14 rounded-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-yellow-500">
              🎟️ Enter Marketplace
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}