import type { NextConfig } from 'next'

const config: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push('pino-pretty', 'encoding')
    }
    
    // Ignore test files and problematic packages
    config.module = config.module || {}
    config.module.rules = config.module.rules || []
    config.module.rules.push({
      test: /node_modules\/thread-stream\/(test|bench|LICENSE|README\.md)/,
      use: 'null-loader',
    })
    
    return config
  },
  experimental: {
    turbo: {
      rules: {
        '*.test.{js,ts,mjs}': {
          loaders: [],
          as: '*.js',
        },
      },
    },
  },
  transpilePackages: ['@walletconnect/ethereum-provider'],
}

export default config
