import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      
      <Navigation />

      {/* Hero - The Artist */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-red-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/Stage_Background_01.png"
            alt="Theater"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
          <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight break-words">
                The Artist Behind the Magic
              </h1>
              <p className="text-2xl text-gray-300 mb-4">Martin Casado</p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Graphic designer. Singer/songwriter. App maker. Storyteller.
              </p>
              <p className="text-lg text-yellow-400 mt-6 font-medium">
                100 days. 100 characters. One nutcracker&apos;s journey.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="/images/cranksy_about_1_martin.png"
                alt="Martin Casado"
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl border-4 border-yellow-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* The Origin - Where It Started */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          
          <h2 className="text-5xl font-serif text-center text-gray-900 mb-16">
            Where It All Started
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <img 
                src="/images/cranksy_about_2.png"
                alt="Original Ballerina School Cover"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-3xl font-bold text-purple-900">
                16 years ago...
              </p>
              
              <p>
                I designed this cheesy cover for a kids&apos; ballerina school. Looking back, this little nutcracker character had something special—a spark that would wait over a decade to ignite.
              </p>
              
              <p>
                Who knew that this simple illustration would become the foundation for something much bigger?
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* The Experimentation */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8 max-w-6xl">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed order-2 md:order-1">
              <h2 className="text-4xl font-bold text-red-700">
                The Experimentation Phase
              </h2>
              
              <p>
                I started playing with the concept—drawing nutcrackers from the torso up, experimenting with different characters, different expressions, different personalities.
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                Each one was unique. Each one told a story.
              </p>
              
              <p>
                The more I drew, the more the character came alive. This wasn&apos;t just a nutcracker anymore—it was becoming something theatrical, something magical.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <img 
                src="/images/cranksy_about_3.png"
                alt="Torso Experiments"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* The 100-Day Journey */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-8 max-w-5xl text-center">
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-900 mb-8">
            100 Days of Creation
          </h2>

          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            We were about to launch in the Bored Ape era. I committed to creating one Nut Cransky character every single day.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-2xl mb-12">
            <img 
              src="/images/cranksy_about_4.jpg"
              alt="100 Days Progression"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl font-bold text-red-600 mb-4">Day 1</p>
              <p className="text-gray-700">Learning the style</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl font-bold text-purple-700 mb-4">Day 50</p>
              <p className="text-gray-700">Finding the groove</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-5xl font-bold text-yellow-600 mb-4">Day 100</p>
              <p className="text-gray-700">Mastering the craft</p>
            </div>
          </div>

          <p className="text-2xl font-serif font-bold text-gray-900 italic">
            &quot;The deeper we go, the bigger the number, the better I got.&quot;
          </p>

        </div>
      </section>

      {/* The Name - Banksy Connection */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          
          <h2 className="text-5xl font-bold text-yellow-400 mb-8">
            The Name
          </h2>

          <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
            <p>
              <span className="text-3xl font-bold text-white">Nut Cransky</span> is a play on <span className="text-yellow-400 font-semibold">Banksy</span>—the anonymous graffiti artist.
            </p>
            
            <p>
              It seemed fitting for an anonymous nutcracker going into &quot;Nut Cransky mode,&quot; transforming into every character that graced the stage.
            </p>
            
            <p className="text-2xl font-bold text-yellow-400 pt-8 border-t-2 border-gray-700">
              Anonymous artist. Endless transformations. Theatrical magic.
            </p>
          </div>

        </div>
      </section>

      {/* Series 1 & The Future */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-8 max-w-5xl">
          
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
            This Is Just Series 1
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            <div className="bg-gradient-to-br from-red-600 to-purple-900 p-8 rounded-2xl shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">🎭 Series 1</h3>
              <p className="text-lg mb-4">The Foundation</p>
              <ul className="space-y-2 text-lg">
                <li>✅ 100 hand-drawn characters</li>
                <li>✅ 5 editions each</li>
                <li>✅ 500 total NFTs</li>
                <li>✅ Pre-AI pure artistry</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-red-500 p-8 rounded-2xl shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">🚀 Coming Next</h3>
              <p className="text-lg mb-4">The Evolution</p>
              <ul className="space-y-2 text-lg">
                <li>🔥 Digital-only collections</li>
                <li>🔥 5,000+ character variations</li>
                <li>🔥 New character types</li>
                <li>🔥 Expanded universe</li>
              </ul>
            </div>

          </div>

          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-red-700 mb-12">
              One nutcracker. Infinite transformations.<br/>
              The stage is just the beginning.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/gallery">
                <button className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-black text-white text-xl font-bold py-5 px-14 rounded-xl transition-all transform hover:scale-105 shadow-2xl">
                  🎭 View The Collection
                </button>
              </Link>
              
              <Link href="/marketplace">
                <button className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white text-xl font-bold py-5 px-14 rounded-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white">
                  🎟️ Enter Marketplace
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}