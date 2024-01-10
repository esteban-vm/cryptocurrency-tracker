import type { FC } from 'react'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Loading, Report, type ILoadingOptions } from 'notiflix'
import { Button, Row, Table } from '@/components'
import { getCoinMarkets } from '@/api'

const App: FC = () => {
  const { data, error, isLoading, isRefetching, isSuccess, isError, refetch } = useQuery({
    queryKey: ['markets'],
    queryFn: getCoinMarkets,
    refetchInterval: ({ state }) => (state.status !== 'error' ? 30_000 : false),
    refetchOnWindowFocus: false,
    retry: false,
  })

  useEffect(() => {
    const messageColor = 'rgb(34 197 94)'
    const options: ILoadingOptions = { messageColor, svgColor: messageColor, svgSize: '100px' }
    if (isLoading) Loading.hourglass('Loading...', options)
    if (isRefetching) Loading.pulse('Updating...', options)
    if (isSuccess || isError) Loading.remove()
    if (isError && !isRefetching) Report.failure('Something went wrong', error.message, 'OK')
  }, [isRefetching, isLoading, isSuccess, isError, error?.message])

  return (
    <main className='app'>
      {isSuccess && (
        <Table>
          {data.map((market, index) => (
            <Row key={market.id} index={index + 1} {...market} />
          ))}
        </Table>
      )}
      {isError && <Button disabled={isRefetching} onClick={() => refetch()} />}
    </main>
  )
}

export default App
