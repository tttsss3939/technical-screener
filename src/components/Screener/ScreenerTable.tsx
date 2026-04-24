import type { TechnicalData } from '../../lib/technical'
import { useScreener, filterAndSort } from '../../hooks/useScreener'
import { STOCK_MASTER } from '../../lib/stockMaster'
import { StockRow } from './StockRow'

interface ScreenerTableProps {
  stocks: TechnicalData[]
}

type ColDef = { label: string; key: keyof TechnicalData; className?: string }

const COLS: ColDef[] = [
  { label: '銘柄',   key: 'ticker' },
  { label: '株価',   key: 'price',    className: 'text-right' },
  { label: '騰落率', key: 'change',   className: 'text-right' },
  { label: '推移',   key: 'sparkline' },
  { label: 'トレンド', key: 'trend',  className: 'hidden md:table-cell' },
  { label: 'MA5/25/75', key: 'ma25', className: 'hidden lg:table-cell' },
  { label: 'RSI',    key: 'rsi',      className: 'hidden md:table-cell' },
  { label: 'MACD',   key: 'macdHist', className: 'hidden md:table-cell text-right' },
  { label: '出来高比', key: 'volRatio', className: 'hidden md:table-cell text-right' },
  { label: 'シグナル', key: 'signal' },
  { label: '強度',   key: 'strength', className: 'hidden sm:table-cell' },
]

export function ScreenerTable({ stocks }: ScreenerTableProps) {
  const screener = useScreener()
  const { setSort, sortKey, sortDir } = screener
  const filtered = filterAndSort(stocks, screener, STOCK_MASTER)

  const arrow = (key: keyof TechnicalData) => {
    if (sortKey !== key) return ''
    return sortDir === 'desc' ? ' ↓' : ' ↑'
  }

  return (
    <div className="overflow-x-auto scrollbar-thin rounded-lg border border-navy-300/30">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-navy-700 text-navy-50 text-xs uppercase tracking-wide">
            <th className="px-2 py-2 w-8" />
            {COLS.map((c) => (
              <th
                key={c.key}
                className={`px-3 py-2 font-semibold select-none cursor-pointer hover:text-gold transition-colors ${c.className ?? ''}`}
                onClick={() => setSort(c.key)}
              >
                {c.label}{arrow(c.key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={COLS.length + 1} className="text-center py-12 text-navy-50">
                該当する銘柄がありません
              </td>
            </tr>
          ) : (
            filtered.map((s) => <StockRow key={s.ticker} stock={s} />)
          )}
        </tbody>
      </table>
    </div>
  )
}
