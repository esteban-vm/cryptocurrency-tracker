import CoinGeckoApi from '@crypto-coffee/coingecko-api'

const coinGeckoApi = new CoinGeckoApi()
export const getCoinMarkets = async () => await coinGeckoApi.coinMarkets({ vs_currency: 'usd', per_page: 10 })
