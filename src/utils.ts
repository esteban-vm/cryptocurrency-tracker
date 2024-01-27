const languageLocale = 'en-US'
const minimumFractionDigits = 0
const percentFractionDigits = 2

const currencyFormatter = Intl.NumberFormat(languageLocale, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits,
  maximumFractionDigits: 20, // <--- Removes all trailing zeros
})

const percentFormatter = Intl.NumberFormat(languageLocale, {
  style: 'percent',
  minimumFractionDigits,
  maximumFractionDigits: percentFractionDigits,
})

export const formatCurrency = (value: number) => currencyFormatter.format(value)

export const formatPercent = (value: number) => {
  const fixedValue = +value.toFixed(percentFractionDigits)
  let formattedChange = percentFormatter.format(Math.abs(value / 100))
  let className = ' first-letter:text-xs'

  if (fixedValue > 0) {
    formattedChange = '▲ ' + formattedChange
    className = 'text-green-500' + className
  } else if (fixedValue < 0) {
    formattedChange = '▼ ' + formattedChange
    className = 'text-red-500' + className
  } else {
    className = 'text-slate-300'
  }

  return <const>[formattedChange, className]
}
