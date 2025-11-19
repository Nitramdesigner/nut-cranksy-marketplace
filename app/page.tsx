import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Stage-Background-01.png"
            alt="Theater Stage"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="relative z-20 text-center px-4">
          <Image 
            src="/images/The_Nut_Cransky.png"
            alt="The Nut Cransky"
            width={680}
            height={255}
            className="mx-auto mb-8 drop-shadow-2xl"
          />
          <p className="text-yellow-300 text-3xl md:text-4xl font-serif italic drop-shadow-lg">
            &quot;When the lights go down, the transformation begins...&quot;
          </p>
          
          <div className="mt-16 animate-bounce">
            <p className="text-white text-xl">↓ Discover the Collection ↓</p>
          </div>
        </div>
      </div>

      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Backgrounds-banner-All-Cranksy.png"
            alt="All Nut Cransky Characters"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              🎭 THE METAMORPHOSIS 🎭
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
              <p>
                From <span className="font-bold">The Phantom of the Opera</span> to <span className="font-bold">The Lion King</span>, 
                from <span className="font-bold">Cats</span> to maintenance workers, police officers, and even <span className="font-bold">Bored Apes</span>...
              </p>
              
              <p className="text-3xl font-bold">
                Nut Cransky becomes them all.
              </p>
              
              <p>
                Every night, when the theater goes dark, this nutcracker prop transforms into whatever character graced the stage that evening.
              </p>
              
              <p className="text-2xl font-semibold mt-8">
                <span className="text-yellow-300">100 hand-drawn characters. Pre-AI. Pure artistry.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-b from-black to-red-950">
        <div className="container mx-auto px-4">
          
          <div className="mb-16 text-center">
            <Image 
              src="/images/The_Nut_Cranksy_Banner_Logo.png"
              alt="The Nut Cransky Theater Marquee"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-12 rounded-lg shadow-2xl border-4 border-yellow-800">
              <h2 className="text-5xl font-serif text-center mb-8 text-red-900">
                THE ORIGIN STORY
              </h2>
              
              <div className="space-y-6 text-xl text-gray-900 leading-relaxed">
                <p>
                  It started with a client request: <em>&quot;Combine a nutcracker with Hairspray the Musical.&quot;</em>
                </p>
                
                <p>
                  What emerged was <strong>Nut Cransky</strong> — a rogue nutcracker prop living in theater storage. 
                  After the Christmas season ends, he&apos;s put away on the side of the stage, forgotten... 
                  <strong className="text-red-700">until the next show begins.</strong>
                </p>
                
                <p>
                  Little did the stagehands know, <strong>when the lights go down and a new act takes the stage, 
                  Nut Cransky morphs into that character.</strong> A maintenance man. A police officer. 
                  The Phantom. A Lion King mask. Even emojis and apes.
                </p>
                
                <p className="text-2xl font-bold text-center text-red-900 mt-8 pt-8 border-t-2 border-red-900">
                  One nutcracker. 100 transformations.<br/>
                  Each one hand-drawn. Each one a story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-red-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg text-center border-4 border-yellow-700 shadow-xl transform hover:scale-105 transition-all">
              <h3 className="text-5xl font-bold text-black mb-2">100</h3>
              <p className="text-black text-xl font-semibold">Unique Characters</p>
              <p className="text-black/80 mt-2">Hand-drawn Pre-AI</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg text-center border-4 border-yellow-700 shadow-xl transform hover:scale-105 transition-all">
              <h3 className="text-5xl font-bold text-black mb-2">5</h3>
              <p className="text-black text-xl font-semibold">Editions Each</p>
              <p className="text-black/80 mt-2">Limited Supply</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg text-center border-4 border-yellow-700 shadow-xl transform hover:scale-105 transition-all">
              <h3 className="text-5xl font-bold text-black mb-2">500</h3>
              <p className="text-black text-xl font-semibold">Total Collection</p>
              <p className="text-black/80 mt-2">Forever</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Ready to Enter the Theater?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/gallery">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-bold py-6 px-16 rounded-lg transition-all transform hover:scale-105 shadow-2xl">
                🎭 View Full Gallery
              </button>
            </Link>
            
            <button className="bg-red-700 hover:bg-red-600 text-white text-2xl font-bold py-6 px-16 rounded-lg transition-all transform hover:scale-105 shadow-2xl border-4 border-yellow-500">
              🎟️ Enter Marketplace
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 via-red-900 to-purple-900 p-12 rounded-lg border-4 border-yellow-500 shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-6">
                ✨ BURN FOR CUSTOM ART ✨
              </h3>
              <p className="text-white text-xl md:text-2xl text-center leading-relaxed">
                Burn your NFT and receive a <strong className="text-yellow-300">hand-drawn custom piece</strong> by the original artist, 
                shipped directly to your door.
              </p>
              <p className="text-yellow-300 text-2xl text-center mt-6 font-semibold">
                Turn digital into physical legacy.
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}