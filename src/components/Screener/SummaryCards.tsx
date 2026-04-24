import type { TechnicalData } from '../../lib/technical'

interface SummaryCardsProps {
  stocks: TechnicalData[]
}

export function SummaryCards({ stocks }: SummaryCardsProps) {
  const bullish = stocks.filter((s) => s.signal === '強い買い' || s.signal === '買い').length
  const bearish = stocks.filter((s) => s.signal === '強い売り' || s.signal === '売り').length
  const neutral = stocks.length - bullish - bearish
  const avgStrength = stocks.length
    ? Math.round(stocks.reduce((a, s) => a + s.strength, 0) / stocks.length)
    : 0

  const cards = [
    { label: '銘柄数', value: stocks.length, color: 'text-gold' },
    { label: '買いシグナル', value: bullish, color: 'text-[#69f0ae]' },
    { label: '中立', value: neutral, color: 'text-[#c9a84c]' },
    { label: '売りシグナル', value: bearish, color: 'text-[#ff7043]' },
    { label: '平均強度', value: avgStrength, color: 'text-white' },
  ]

  return (
    <div className="grid grid-cols-5 gap-3 mb-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-navy-700 border border-navy-300/30 rounded-lg p-3 text-center">
          <div className={`text-2xl font-bold ${c.color}`}>{c.value}</div>
          <div className="text-xs text-navy-50 mt-0.5">{c.label}</div>
        </div>
      ))}
    </div>
  )
}
