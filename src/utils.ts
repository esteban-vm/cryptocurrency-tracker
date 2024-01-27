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
  const fixed = +value.toFixed(percentFractionDigits)
  let formattedChange = percentFormatter.format(Math.abs(value / 100))
  let className: string

  if (fixed > 0) {
    formattedChange = '▲ ' + formattedChange
    className = 'text-green-500 first-letter:text-xs'
  } else if (fixed < 0) {
    formattedChange = '▼ ' + formattedChange
    className = 'text-red-500 first-letter:text-xs'
  } else {
    className = 'text-slate-300'
  }

  return <const>[formattedChange, className]
}
