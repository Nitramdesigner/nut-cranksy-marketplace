'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('number')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [showAvailable, setShowAvailable] = useState(true)
  const [showSoldOut, setShowSoldOut] = useState(true)
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  // Generate all 100 characters with mock data
  const allCharacters = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    number: i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0'),
    name: `Character ${i}`,
    image: `/images/characters/nut-cranksy-${i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0')}.png`,
    price: Math.floor(Math.random() * 500) + 50, // Random price 50-550 XRP
    available: i < 95, // First 95 available, last 5 "sold out" for scarcity
    rarity: i < 10 ? 'Legendary' : i < 30 ? 'Epic' : i < 60 ? 'Rare' : 'Common',
    editions: {
      total: 5,
      remaining: i < 95 ? Math.floor(Math.random() * 5) + 1 : 0
    }
  }))

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  // Filter and sort
  const filteredCharacters = allCharacters
    .filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           char.number.includes(searchTerm)
      const matchesPrice = char.price >= priceRange[0] && char.price <= priceRange[1]
      const matchesAvailability = (showAvailable && char.available) || (showSoldOut && !char.available)
      return matchesSearch && matchesPrice && matchesAvailability
    })
    .sort((a, b) => {
      if (sortBy === 'number') return a.id - b.id
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <main className="min-h-screen bg-gray-50">
      
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-[1800px]">
        
        <div className="flex gap-8">
          
          {/* Left Sidebar - Filters */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
              
              {/* Search */}
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Name or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none bg-white cursor-pointer"
                >
                  <option value="number">Number</option>
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-2 block">
                  Price range (XRP)
                </label>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                    placeholder="Min"
                  />
                  <span className="text-gray-400">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-3 block">
                  Availability
                </label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAvailable}
                      onChange={(e) => setShowAvailable(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                    />
                    <span className="ml-2 text-gray-700">Available</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showSoldOut}
                      onChange={(e) => setShowSoldOut(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                    />
                    <span className="ml-2 text-gray-700">Sold Out</span>
                  </label>
                </div>
              </div>

              {/* Coming Soon Banner */}
              <div className="pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-200">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    🎭 Coming Soon
                  </p>
                  <p className="text-xs text-gray-600">
                    Marketplace launches soon. Join the waitlist to be notified!
                  </p>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content - NFT Grid */}
          <div className="flex-1">
            
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Marketplace
              </h1>
              <p className="text-gray-600">
                {filteredCharacters.length} characters available
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  {/* Image */}
                  <div 
                    onClick={() => setSelectedCharacter(char.id)}
                    className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Favorite Heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(char.id)
                      }}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <span className={`text-xl ${favorites.has(char.id) ? 'text-red-500' : 'text-gray-400'}`}>
                        {favorites.has(char.id) ? '❤️' : '🤍'}
                      </span>
                    </button>

                    {/* Sold Out Badge */}
                    {!char.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold">
                          SOLD OUT
                        </span>
                      </div>
                    )}

                    {/* Rarity Badge */}
                    {char.available && (
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          char.rarity === 'Legendary' ? 'bg-yellow-400 text-gray-900' :
                          char.rarity === 'Epic' ? 'bg-purple-500 text-white' :
                          char.rarity === 'Rare' ? 'bg-blue-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {char.rarity}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">#{char.number}</p>
                        <p className="font-semibold text-gray-900">{char.name}</p>
                      </div>
                    </div>

                    {char.available && (
                      <>
                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="text-2xl font-bold text-gray-900">{char.price}</span>
                          <span className="text-sm text-gray-500">XRP</span>
                        </div>

                        <div className="text-xs text-gray-500 mb-3">
                          {char.editions.remaining} of {char.editions.total} editions available
                        </div>

                        <button 
                          onClick={() => setSelectedCharacter(char.id)}
                          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                          View Details
                        </button>
                      </>
                    )}

                    {!char.available && (
                      <button 
                        disabled
                        className="w-full bg-gray-200 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed"
                      >
                        Sold Out
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredCharacters.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <p className="text-2xl text-gray-400 mb-4">No characters found</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setPriceRange([0, 1000])
                    setShowAvailable(true)
                    setShowSoldOut(true)
                  }}
                  className="text-gray-900 underline font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Modal - Character Detail with Buy Now */}
      {selectedCharacter !== null && (
        <div
          onClick={() => setSelectedCharacter(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative"
          >
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors flex items-center justify-center text-2xl z-10"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                <img
                  src={allCharacters[selectedCharacter].image}
                  alt={allCharacters[selectedCharacter].name}
                  className="w-full h-auto max-w-md"
                />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    #{allCharacters[selectedCharacter].number}
                  </p>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {allCharacters[selectedCharacter].name}
                  </h2>
                  
                  {allCharacters[selectedCharacter].available && (
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {allCharacters[selectedCharacter].price}
                      </span>
                      <span className="text-xl text-gray-500">XRP</span>
                    </div>
                  )}

                  <p className="text-lg text-gray-600 leading-relaxed">
                    One of 100 hand-drawn transformations from the original Nut Cransky collection. Each character represents a unique theatrical performance captured in time.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rarity:</span>
                    <span className="font-semibold">{allCharacters[selectedCharacter].rarity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Editions:</span>
                    <span className="font-semibold">
                      {allCharacters[selectedCharacter].editions.remaining} of {allCharacters[selectedCharacter].editions.total} available
                    </span>
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

                {allCharacters[selectedCharacter].available ? (
                  <div className="space-y-3 pt-4">
                    <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg">
                      🎟️ Buy Now - {allCharacters[selectedCharacter].price} XRP
                    </button>
                    <p className="text-xs text-center text-gray-500">
                      Coming Soon - Join waitlist to be notified at launch
                    </p>
                  </div>
                ) : (
                  <button 
                    disabled
                    className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl cursor-not-allowed"
                  >
                    Sold Out
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  )
}