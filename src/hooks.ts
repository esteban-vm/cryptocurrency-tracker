import { useQuery } from '@tanstack/react-query'
import { getCoinMarkets } from '@/api'

export const useGetCoinMarkets = () => {
  return useQuery({
    queryKey: ['markets'],
    queryFn: getCoinMarkets,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval({ state }) {
      return state.status !== 'error' ? 30_000 : false
    },
  })
}
