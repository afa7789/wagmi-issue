import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import {
  mainnet,
  polygon,
  goerli,
  polygonMumbai,
  avalanche,
  avalancheFuji,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  bsc,
  bscTestnet,
  sepolia,
  moonbeam,
} from "wagmi/chains"
import invariant from "tiny-invariant"

import { ChainReference } from "./chainReference"

const RPCS = {
  mainnet: process.env.NEXT_PUBLIC_ETH_RPC,
  polygon: process.env.NEXT_PUBLIC_MATIC_RPC,
  goerli: process.env.NEXT_PUBLIC_GOR_RPC,
  mumbai: process.env.NEXT_PUBLIC_MUMBAI_RPC,
  avalanche: process.env.NEXT_PUBLIC_AVAX_RPC,
  fuji: process.env.NEXT_PUBLIC_FUJI_RPC,
  optimism: process.env.NEXT_PUBLIC_OPT_ETH_RPC,
  optimismGoerli: process.env.NEXT_PUBLIC_OPT_GOR_RPC,
  arbitrum: process.env.NEXT_PUBLIC_ARB_ETH_RPC,
  arbitrumGoerli: process.env.NEXT_PUBLIC_ARB_GOR_RPC,
  binance: process.env.NEXT_PUBLIC_BNB_RPC,
  binanceTestnet: process.env.NEXT_PUBLIC_BNB_TESTNET_RPC,
  gnosis: process.env.NEXT_PUBLIC_GNO_RPC,
  moonbeam: process.env.NEXT_PUBLIC_MOONBEAM_RPC,
  sepolia: process.env.NEXT_PUBLIC_SEP_RPC,
}

export const WAGMI_CHAINS = [
  mainnet,
  polygon,
  goerli,
  polygonMumbai,
  avalanche,
  avalancheFuji,
  optimism,
  optimismGoerli,
  arbitrum,
  arbitrumGoerli,
  bsc,
  bscTestnet,
  sepolia,
  moonbeam,
]

invariant(typeof RPCS.mainnet === "string", '"RPCS.mainnet" should be defined')
invariant(typeof RPCS.polygon === "string", '"RPCS.polygon" should be defined')
invariant(typeof RPCS.goerli === "string", '"RPCS.goerli" should be defined')
invariant(typeof RPCS.mumbai === "string", '"RPCS.mumbai" should be defined')
invariant(
  typeof RPCS.avalanche === "string",
  '"RPCS.avalanche" should be defined',
)
invariant(typeof RPCS.fuji === "string", '"RPCS.fuji" should be defined')
invariant(
  typeof RPCS.optimism === "string",
  '"RPCS.optimism" should be defined',
)
invariant(
  typeof RPCS.optimismGoerli === "string",
  '"RPCS.optimismGoerli" should be defined',
)
invariant(
  typeof RPCS.arbitrum === "string",
  '"RPCS.arbitrum" should be defined',
)
invariant(
  typeof RPCS.arbitrumGoerli === "string",
  '"RPCS.arbitrumGoerli" should be defined',
)
invariant(typeof RPCS.binance === "string", '"RPCS.binance" should be defined')
invariant(
  typeof RPCS.binanceTestnet === "string",
  '"RPCS.binanceTestnet" should be defined',
)
invariant(
  typeof RPCS.moonbeam === "string",
  '"RPCS.moonbeam" should be defined',
)
invariant(typeof RPCS.sepolia === "string", '"RPCS.sepolia" should be defined')

export const WAGMI_PROVIDERS = [
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.id === ChainReference.Mainnet) {
        return { http: RPCS.mainnet }
      }

      if (chain.id === ChainReference.Polygon) {
        return { http: RPCS.polygon }
      }

      if (chain.id === ChainReference.Goerli) {
        return { http: RPCS.goerli }
      }

      if (chain.id === ChainReference.Mumbai) {
        return { http: RPCS.mumbai }
      }

      if (chain.id === ChainReference.Avalanche) {
        return { http: RPCS.avalanche }
      }

      if (chain.id === ChainReference.Fuji) {
        return { http: RPCS.fuji }
      }

      if (chain.id === ChainReference.Optimism) {
        return { http: RPCS.optimism }
      }

      if (chain.id === ChainReference.OptimismGoerli) {
        return { http: RPCS.optimismGoerli }
      }

      if (chain.id === ChainReference.Arbitrum) {
        return { http: RPCS.arbitrum }
      }

      if (chain.id === ChainReference.ArbitrumGoerli) {
        return { http: RPCS.arbitrumGoerli }
      }

      if (chain.id === ChainReference.Binance) {
        return { http: RPCS.binance }
      }

      if (chain.id === ChainReference.BinanceTestnet) {
        return { http: RPCS.binanceTestnet }
      }

      if (chain.id === ChainReference.Moonbeam) {
        return { http: RPCS.moonbeam }
      }

      if (chain.id === ChainReference.Sepolia) {
        return { http: RPCS.sepolia }
      }

      return { http: RPCS.mainnet }
    },
  }),
]
