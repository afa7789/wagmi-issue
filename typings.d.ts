declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production"
    NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID: string,
    NEXT_PUBLIC_HJID: string,
    NEXT_PUBLIC_HJSV: string,
    NEXT_PUBLIC_INTERCOM_APP_ID: string,
    NEXT_PUBLIC_MAVA_TOKEN: string,
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: string,
    NEXT_PUBLIC_SENTRY_DSN: string,
    NEXT_PUBLIC_TALLY_GRAPH_CMS: string,
    NEXT_PUBLIC_POAP_API_KEY: string,
    NEXT_PUBLIC_TALLY_API_URL: string,
    NEXT_PUBLIC_TALLY_SIWE_URI: string,
    NEXT_PUBLIC_TALLY_API_KEY: string,
    NEXT_PUBLIC_TALLY_API_KEY_CODE_GEN: string,
    NEXT_PUBLIC_ETHERSCAN_API_KEY: string,
    NEXT_PUBLIC_POLYGONSCAN_API_KEY: string,
    NEXT_PUBLIC_SNOWTRACE_API_KEY: string,
    NEXT_PUBLIC_COVALENT_API_KEY: string,
    NEXT_PUBLIC_ARBISCAN_API_KEY: string,
    NEXT_PUBLIC_OPT_ETHERSCAN_API_KEY: string,
    NEXT_PUBLIC_BSCSCAN_API_KEY: string,
    NEXT_PUBLIC_GNOSISSCAN_API_KEY: string,
    NEXT_PUBLIC_MOONBEAM_API_KEY: string
    NEXT_PUBLIC_ETH_RPC: string,
    NEXT_PUBLIC_GOR_RPC: string,
    NEXT_PUBLIC_MATIC_RPC: string,
    NEXT_PUBLIC_MUMBAI_RPC: string,
    NEXT_PUBLIC_AVAX_RPC: string,
    NEXT_PUBLIC_FUJI_RPC: string,
    NEXT_PUBLIC_OPT_ETH_RPC: string,
    NEXT_PUBLIC_OPT_GOR_RPC: string,
    NEXT_PUBLIC_ARB_ETH_RPC: string,
    NEXT_PUBLIC_ARB_GOR_RPC: string,
    NEXT_PUBLIC_BNB_RPC: string,
    NEXT_PUBLIC_BNB_TESTNET_RPC: string,
    NEXT_PUBLIC_GNO_RPC: string,
    NEXT_PUBLIC_MOONBEAM_RPC: string,
    NEXT_PUBLIC_SEP_RPC: string,
    NEXT_PUBLIC_ETH_RPC_KEY: string,
    NEXT_PUBLIC_GOR_RPC_KEY: string,
    NEXT_PUBLIC_MATIC_RPC_KEY: string,
    NEXT_PUBLIC_MUMBAI_RPC_KEY: string,
    NEXT_PUBLIC_AVAX_RPC_KEY: string,
    NEXT_PUBLIC_FUJI_RPC_KEY: string,
    NEXT_PUBLIC_OPT_ETH_RPC_KEY: string,
    NEXT_PUBLIC_OPT_GOR_RPC_KEY: string,
    NEXT_PUBLIC_ARB_ETH_RPC_KEY: string,
    NEXT_PUBLIC_ARB_GOR_RPC_KEY: string,
    NEXT_PUBLIC_BNB_RPC_KEY: string,
    NEXT_PUBLIC_BNB_TESTNET_RPC_KEY: string,
    NEXT_PUBLIC_GNO_RPC_KEY: string,
    NEXT_PUBLIC_ALCHEMY_ETH_API_KEY: string
  }
}

interface Window {
  ethereum: any
  isGaInitialized?: boolean
  Beacon?: any
}

window.ethereum = window.ethereum || {}

window.Beacon = window.Beacon || {}
