import type { CoinMarkets } from '@crypto-coffee/coingecko-api/dist/types'

/** Función para pruebas */
export const getCoinMarkets = async () => <CoinMarkets[]>(await import('@/mocks/data.json')).default

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10
