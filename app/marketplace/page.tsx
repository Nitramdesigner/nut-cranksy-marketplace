'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Marketplace() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)

  const allCharacters = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    number: i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0'),
    name: `Character ${i}`,
    image: `/images/characters/nut-cranksy-${i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0')}.png`,
    price: 0.35,
    available: i < 95
  }))

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCharacters.map((char) => (
            <div key={char.id} className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition">
              <img src={char.image} alt={char.name} className="w-full rounded" />
              <p className="mt-2 font-bold">{char.name}</p>
              <p className="text-sm text-gray-500">#{char.number}</p>
              <p className="text-lg font-bold mt-2">{char.price} ETH</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded mt-2">View</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}