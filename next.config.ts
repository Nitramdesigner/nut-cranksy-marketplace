import type { NextConfig } from 'next'

const config: NextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'encoding')
    return config
  },
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream']
}

export default config
