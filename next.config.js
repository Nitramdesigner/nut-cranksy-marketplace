/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
          crypto: false,
        }
      }
      config.externals.push('pino-pretty', 'lokijs', 'encoding', 'bufferutil', 'utf-8-validate')
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native-sqlite-storage': false,
      }
      return config
    },
    transpilePackages: ['@rainbow-me/rainbowkit', 'wagmi', 'viem'],
  }
  
  module.exports = nextConfig