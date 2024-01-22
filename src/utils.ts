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

const attachValue = (change: number, ...options: [string, string, string]) => {
  const fixedChange = +change.toFixed(percentFractionDigits)
  let resultValue: string
  if (fixedChange > 0) resultValue = options[0]
  else if (fixedChange < 0) resultValue = options[1]
  else resultValue = options[2]
  return resultValue
}

export const formatCurrency = (currency: number) => currencyFormatter.format(currency)
export const formatPercent = (percentage: number) => percentFormatter.format(Math.abs(percentage / 100))
export const attachClass = (change: number) => attachValue(change, 'text-green-500', 'text-red-500', 'text-slate-300')
export const attachArrow = (change: number) => attachValue(change, '▲ ', '▼ ', '')
