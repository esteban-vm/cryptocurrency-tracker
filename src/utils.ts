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
  const formattedValue = percentFormatter.format(Math.abs(fixedValue / 100))
  let className = ' before:mr-1 before:text-xs'

  if (fixedValue > 0) {
    className = 'text-green-500 before:content-["▲"]' + className
  } else if (fixedValue < 0) {
    className = 'text-red-500 before:content-["▼"]' + className
  } else {
    className = 'text-slate-300'
  }

  return <const>[formattedValue, className]
}
