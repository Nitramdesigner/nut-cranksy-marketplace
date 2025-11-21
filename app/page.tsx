import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  const carouselCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 15, 20, 25, 30, 35, 40, 45]

  return (
    <main className="min-h-screen bg-white">
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
        
        {/* Character Image - 25% smaller, still touching bottom */}
        <div className="absolute right-0 bottom-0 w-full md:w-3/5 lg:w-3/5 h-full flex items-end justify-end">
          <img 
            src="/images/Nut_Cranksy_Hero_01.png"
            alt="Nut Cransky"
            className="w-full h-auto object-contain"
            style={{ transform: 'scale(0.95)', transformOrigin: 'bottom right' }}
          />
        </div>

        {/* Content - CENTERED, positioned closer to character */}
        <div className="relative z-10 w-full px-8 py-20">
          <div className="max-w-xl mx-auto md:mr-auto md:ml-[15%] text-center">
            
            {/* Logo - 10% BIGGER */}
            <div className="mb-10 flex justify-center">
              <img 
                src="/images/The_Nut_Cranksy.png"
                alt="The Nut Cransky"
                className="h-20 md:h-24"
              />
            </div>

            {/* Hero Message - Exactly 3 lines with manual breaks */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900 mb-10 text-center">
              &quot;When the lights go<br/>
              down, the transformation<br/>
              begins...&quot;
            </h1>

            {/* Discover CTA - CENTERED with anchor */}
            <a 
              href="#carousel" 
              className="inline-block text-lg md:text-xl text-gray-600 hover:text-gray-900 transition-colors"
            >
              ↓ Discover the Collection ↓
            </a>

          </div>
        </div>

      </section>

      {/* Who is the Nut Cransky */}
      <section id="carousel" className="py-20 bg-gray-900">
        <div className="container mx-auto px-8">
          
          <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-8">
            Who is the Nut Cransky?
          </h2>

          {/* Paragraph - narrower, left-aligned */}
          <p className="text-lg text-gray-300 text-left max-w-4xl mx-auto leading-relaxed mb-8">
            Is more than just a decorative prop; it is a theatrical spirit undergoing THE METAMORPHOSIS every single night. Once the velvet curtains drop and the house lights dim, this unique nutcracker, which has silently witnessed the performance, magically transforms. Whether it was The Phantom of the Opera lurking in the shadows, the majestic cast of The Lion King, a nimble feline from Cats, or even the ordinary figures outside the theater like maintenance workers and police officers, the Nut Cransky becomes them all. Each of these 100 custom NFTs captures one of these fleeting, midnight transformations, embodying the entire, unforgettable spectacle of the stage.
          </p>

          {/* Tagline - bigger, bold */}
          <p className="text-2xl md:text-3xl font-serif font-bold text-yellow-400 text-center mb-12">
            100 hand-drawn characters. Pre-AI. Pure artistry.
          </p>

          <div className="relative -mx-8 overflow-hidden">
            <div className="flex gap-4 pb-4 animate-scroll">
              {[...carouselCharacters, ...carouselCharacters, ...carouselCharacters].map((num, index) => {
                const imgNum = num < 10 ? String(num).padStart(4, '0') : String(num).padStart(5, '0')
                return (
                  <div key={`${num}-${index}`} className="flex-shrink-0 w-40 bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={`/images/characters/nut-cranksy-${imgNum}.png`}
                      alt={`Character ${num}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-2 text-center">
                      <p className="text-xs text-gray-500">Name of Character</p>
                      <p className="text-sm font-semibold text-gray-900">#{imgNum}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left - Story and Stats */}
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-gray-900 mb-6">
                The Origin Story
              </h2>

              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  It started with a client request: <em>&quot;Combine a nutcracker with Hairspray the Musical.&quot;</em>
                </p>
                
                <p>
                  What emerged was Nut Cransky — a rogue nutcracker prop living in theater storage. After the Christmas season ends, he&apos;s put away on the side of the stage, forgotten...until the next show begins.
                </p>
                
                <p>
                  Little did the stagehands know, when the lights go down and a new act takes the stage, Nut Cransky morphs into that character. A maintenance man. A police officer. The Phantom. A Lion King mask. Even emojis and apes.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">100</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">Unique Characters</p>
                  <p className="text-xs text-gray-500">Hand-drawn Pre-AI</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">5</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">Editions Each</p>
                  <p className="text-xs text-gray-500">Limited Supply</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">500</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">Total Collection</p>
                  <p className="text-xs text-gray-500">Forever</p>
                </div>
              </div>
            </div>

            {/* Right - Image aligned with title */}
            <div className="flex items-start justify-center">
              <img 
                src="/images/Nut_Cranksy_Section_02.png"
                alt="The Nut Cransky Theater"
                className="w-full h-auto"
              />
            </div>

          </div>

          {/* Tagline - spans full width below both columns */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-2xl md:text-3xl font-serif font-bold text-gray-900 text-center leading-tight">
              One nutcracker. 100 transformations.<br/>
              Each one hand-drawn. Each one a story.
            </p>
          </div>

        </div>
      </section>

      {/* Ready to Enter */}
      <section className="relative py-40 md:py-56 min-h-[600px]">
        {/* Taller theater background - centered to show stage */}
        <div className="absolute inset-0">
          <img 
            src="/images/Stage_Background_01.png"
            alt="Theater Stage"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-16">
            Ready to Enter the Theater?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Marketplace Button - Premium style */}
            <Link href="/marketplace">
              <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold py-5 px-14 rounded-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-yellow-500 hover:border-yellow-400">
                <span className="flex items-center gap-3">
                  🎟️ Enter Marketplace
                </span>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </Link>
            
            {/* Gallery Button - Premium style */}
            <Link href="/gallery">
              <button className="group relative bg-white hover:bg-gray-50 text-gray-900 text-xl font-bold py-5 px-14 rounded-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white hover:border-yellow-400">
                <span className="flex items-center gap-3">
                  🎭 View Full Gallery
                </span>
                <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Burn for Custom Art */}
      <section id="burn" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">
            ✨ Burn For Custom Art ✨
          </h2>
          
          <img 
            src="/images/Nut_Cranksy_Burn_03.png"
            alt="Burn for Custom Art"
            className="mx-auto w-full max-w-sm mb-6 rounded-lg shadow-xl"
          />
          
          <p className="text-lg text-gray-700 mb-3">
            Burn your NFT and receive a <strong>hand-drawn custom piece</strong> by the original artist, shipped directly to your door.
          </p>
          
          <p className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
            Turn digital into physical legacy.
          </p>
          
        </div>
      </section>

    </main>
  )
}