import type { CoinMarkets } from '@crypto-coffee/coingecko-api/dist/types'
import type { FC } from 'react'
import * as Utils from '@/utils'

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
  const formattedPrice = Utils.formatCurrency(price)
  const formattedCap = Utils.formatCurrency(cap)
  const [formattedChange, className] = Utils.formatPercent(change)

  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>
        <img src={image} alt={name} /> {name} ({symbol})
      </td>
      <td>{formattedPrice}</td>
      <td className={className}>{formattedChange}</td>
      <td>{formattedCap}</td>
    </tr>
  )
}

export default Row
