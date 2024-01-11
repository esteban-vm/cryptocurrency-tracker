import type { FC, ReactNode } from 'react'

interface TableProps {
  children: ReactNode
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <table className='table'>
      <caption className='table_caption'>Top 10 cryptocurrencies</caption>
      <thead className='table_head'>
        <tr>
          {['#', 'Assets', 'Price', '24H', 'Market cap'].map((heading) => (
            <th key={crypto.randomUUID()} scope='col'>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='table_body'>{children}</tbody>
    </table>
  )
}

export default Table
