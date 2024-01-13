import type { CoinMarkets } from '@crypto-coffee/coingecko-api/dist/types'
import type { FC } from 'react'
import { formatPrice, formatPercentage } from '@/utils'

interface RowProps extends CoinMarkets {
  index: number
}

const Row: FC<RowProps> = ({ index, image, name, current_price, price_change_percentage_24h, market_cap }) => {
  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>
        <img src={image} alt={name} /> {name}
      </td>
      <td>{formatPrice(current_price)}</td>
      <td className={price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
        <span>{price_change_percentage_24h > 0 ? '▲' : '▼'}</span>&nbsp;
        {formatPercentage(price_change_percentage_24h)}
      </td>
      <td>{formatPrice(market_cap)}</td>
    </tr>
  )
}

export default Row
