import type { FC } from 'react'
import type { ILoadingOptions } from 'notiflix'
import { useEffect } from 'react'
import { Loading, Report } from 'notiflix'
import { Button, Row, Table } from '@/components'
import { useGetCoinMarkets } from '@/hooks'

const App: FC = () => {
  const {
    data: markets,
    error,
    isLoading: loading,
    isRefetching: refetching,
    isSuccess: successful,
    isError: failed,
    refetch: retry,
  } = useGetCoinMarkets()

  useEffect(() => {
    const color = 'rgb(34 197 94)'

    const options: ILoadingOptions = {
      messageColor: color,
      svgColor: color,
      svgSize: '70px',
    }

    if (loading) {
      Loading.hourglass('Loading...', options)
    } else if (refetching) {
      Loading.pulse('Updating...', options)
    } else if (failed) {
      Report.failure('Something went wrong', error.message, 'OK')
    }

    if (successful || failed) Loading.remove()
  }, [error?.message, failed, loading, refetching, successful])

  return (
    <main>
      {successful && (
        <Table>
          {markets.map((market, index) => (
            <Row key={market.id} index={index + 1} {...market} />
          ))}
        </Table>
      )}
      {failed && <Button disabled={refetching} onClick={() => retry()} />}
    </main>
  )
}

export default App
