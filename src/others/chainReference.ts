import { ChainId } from "@usedapp/core"

export enum ChainReference {
  Mainnet = ChainId.Mainnet,
  Rinkeby = ChainId.Rinkeby,
  Goerli = ChainId.Goerli,
  Kovan = ChainId.Kovan,

  Polygon = ChainId.Polygon,
  Mumbai = ChainId.Mumbai,

  Avalanche = ChainId.Avalanche,
  Fuji = ChainId.AvalancheTestnet,

  Optimism = ChainId.Optimism,
  OptimismKovan = ChainId.OptimismKovan,
  OptimismGoerli = ChainId.OptimismGoerli,

  Arbitrum = ChainId.Arbitrum,
  ArbitrumRinkeby = ChainId.ArbitrumRinkeby,
  ArbitrumGoerli = ChainId.ArbitrumGoerli,

  Binance = ChainId.BSC,
  BinanceTestnet = ChainId.BSCTestnet,

  Gnosis = ChainId.Gnosis,

  Moonbeam = ChainId.Moonbeam,
  Sepolia = ChainId.Sepolia,
}
