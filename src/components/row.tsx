import type { CoinMarkets } from '@crypto-coffee/coingecko-api/dist/types'
import type { FC } from 'react'
import { formatCurrency, formatPercentage } from '@/utils'

interface RowProps extends CoinMarkets {
  index: number
}

const Row: FC<RowProps> = ({
  index,
  image,
  name,
  symbol,
  current_price: price,
  price_change_percentage_24h: change,
  market_cap: cap,
}) => {
  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>
        <img src={image} alt={name} /> {name} ({symbol})
      </td>
      <td>{formatCurrency(price)}</td>
      <td className={change > 0 ? 'text-green-500' : change === 0 ? 'text-slate-300' : 'text-red-500'}>
        <span>{change > 0 ? '▲ ' : change === 0 ? '' : '▼ '}</span>
        {formatPercentage(change)}
      </td>
      <td>{formatCurrency(cap)}</td>
    </tr>
  )
}

export default Row
