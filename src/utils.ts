const currencyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 20, // <--- This way, all trailing zeros will be removed
})

export const formatCurrency = (price: number) => currencyFormatter.format(price)

const percentageFormatter = Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatPercentage = (percentage: number) => percentageFormatter.format(Math.abs(percentage / 100))
