'use client'

import { useState } from 'react'
import Link from 'next/link'

// Generate all 100 NFTs - all start at 0.5 ETH with 5 available
const mockNFTs = Array.from({ length: 100 }, (_, i) => {
  const imgNum = i < 10 ? String(i).padStart(4, '0') : String(i).padStart(5, '0')
  return {
    id: i,
    name: `Nut Cransky #${i}`,
    price: 0.5,
    available: 5,
    image: imgNum
  }
})

export default function Marketplace() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = () => {
    setWalletConnected(true)
    setWalletAddress('0x742d...5e2f')
  }

  const buyNFT = (nftName: string, nftPrice: number) => {
    if (!walletConnected) {
      alert('Please connect your wallet first!')
      return
    }
    alert(`Purchasing ${nftName} for ${nftPrice} ETH - Coming soon!`)
  }

  return (
    <main className="min-h-screen bg-black">
      
      <div className="bg-gradient-to-b from-red-900 to-black py-8 border-b-4 border-yellow-500 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg">
                ← Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-white mt-2">
                🎟️ Nut Cransky Marketplace
              </h1>
            </div>
            
            <div>
              {walletConnected ? (
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg border-2 border-green-400">
                  <p className="text-sm">Connected</p>
                  <p className="font-mono text-xs">{walletAddress}</p>
                </div>
              ) : (
                <button 
                  onClick={connectWallet}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-red-900 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">100 Unique Characters • 5 Editions Each • 500 Total Supply</h2>
          <p className="text-xl">Each NFT is a hand-drawn piece of theatrical history</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNFTs.map((nft) => (
            <div 
              key={nft.id}
              className="bg-gradient-to-br from-red-900 to-red-950 rounded-lg overflow-hidden border-4 border-yellow-600 hover:border-yellow-400 transition-all transform hover:scale-105 shadow-2xl"
            >
              <div className="relative aspect-square bg-black">
                <img
                  src={`/images/characters/nut-cranksy-${nft.image}.png`}
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {nft.available} Available
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{nft.name}</h3>
                <p className="text-gray-300 mb-4">Nut Cransky #{nft.id}</p>
                
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <p className="text-gray-400 text-sm">Price</p>
                  <p className="text-3xl font-bold text-white">{nft.price} ETH</p>
                </div>

                <button
                  onClick={() => buyNFT(nft.name, nft.price)}
                  disabled={nft.available === 0}
                  className={`w-full py-3 rounded-lg font-bold text-xl transition-all ${
                    nft.available === 0
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-yellow-500 hover:bg-yellow-400 text-black transform hover:scale-105'
                  }`}
                >
                  {nft.available === 0 ? 'SOLD OUT' : 'BUY NOW'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to See the Full Collection?
          </h2>
          <Link href="/gallery">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-bold py-6 px-16 rounded-lg transition-all transform hover:scale-105 shadow-2xl">
              🎭 View All 100 Characters
            </button>
          </Link>
        </div>
      </div>

    </main>
  )
}