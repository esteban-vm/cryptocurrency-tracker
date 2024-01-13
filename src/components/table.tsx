import type { FC, ReactNode } from 'react'

interface TableProps {
  children: ReactNode
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <table>
      <caption>Top 10 cryptocurrencies</caption>
      <thead>
        <tr>
          {['#', 'Assets', 'Price', '24H', 'Market cap'].map((heading) => (
            <th key={crypto.randomUUID()} scope='col'>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default Table
