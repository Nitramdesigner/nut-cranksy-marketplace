import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, base, arbitrum } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Nut Cransky Marketplace',
  projectId: '9a79307314134b5474365bff9f2d6fad',
  chains: [mainnet, polygon, base, arbitrum],
  ssr: true,
})