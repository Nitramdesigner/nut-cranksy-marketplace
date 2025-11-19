import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  const characters = Array.from({ length: 100 }, (_, i) => {
    const num = i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0')
    return num
  })

  return (
    <main className="min-h-screen bg-black">
      
      <div className="bg-gradient-to-b from-red-900 to-black py-16 border-b-4 border-yellow-500">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold text-white text-center mb-4">
            🎭 The Full Collection 🎭
          </h1>
          <p className="text-2xl text-yellow-300 text-center">
            100 Hand-Drawn Characters • Pre-AI Artistry
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {characters.map((num) => (
            <div 
              key={num}
              className="bg-gradient-to-br from-red-900 to-red-950 rounded-lg overflow-hidden border-4 border-yellow-600 hover:border-yellow-400 transition-all transform hover:scale-105 cursor-pointer shadow-xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={`/images/characters/nut-cranksy-${num}.png`}
                  alt={`Nut Cransky Character ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-black/50 text-center">
                <p className="text-yellow-400 font-bold">#{parseInt(num)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Own a Piece of Theater History?
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-bold py-6 px-16 rounded-lg transition-all transform hover:scale-105 shadow-2xl">
            🎟️ Enter Marketplace
          </button>
        </div>
      </div>

    </main>
  )
}