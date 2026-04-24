import { useState } from 'react'
import type { TechnicalData } from '../../lib/technical'
import { trendBgClass } from '../../lib/technical'
import { SignalBadge, TrendBadge } from '../ui/Badge'
import { MiniBar } from '../ui/MiniBar'
import { MiniChart } from '../ui/MiniChart'
import { STOCK_MASTER } from '../../lib/stockMaster'
import { useScreener } from '../../hooks/useScreener'

interface StockRowProps {
  stock: TechnicalData
}

export function StockRow({ stock }: StockRowProps) {
  const [expanded, setExpanded] = useState(false)
  const { watchlist, toggleWatch } = useScreener()
  const info = STOCK_MASTER[stock.ticker]
  const isWatched = watchlist.has(stock.ticker)

  const changeColor = stock.change >= 0 ? 'text-[#69f0ae]' : 'text-[#ff7043]'
  const changePrefix = stock.change >= 0 ? '+' : ''

  return (
    <>
      <tr
        className={`border-b border-navy-300/20 hover:bg-navy-500/30 transition-colors cursor-pointer ${trendBgClass(stock.trend)}`}
        onClick={() => setExpanded((v) => !v)}
      >
        {/* ★ ウォッチリスト */}
        <td className="px-2 py-2 text-center w-8">
          <button
            onClick={(e) => { e.stopPropagation(); toggleWatch(stock.ticker) }}
            className={`text-lg transition-colors ${isWatched ? 'text-gold' : 'text-navy-100 hover:text-gold'}`}
          >
            {isWatched ? '★' : '☆'}
          </button>
        </td>

        {/* 銘柄 */}
        <td className="px-3 py-2 min-w-[120px]">
          <div className="font-semibold text-white text-sm">{info?.name ?? stock.ticker}</div>
          <div className="text-xs text-navy-50">{stock.ticker}</div>
        </td>

        {/* 株価 */}
        <td className="px-3 py-2 text-right font-mono text-sm text-white whitespace-nowrap">
          ¥{stock.price.toLocaleString()}
        </td>

        {/* 騰落率 */}
        <td className={`px-3 py-2 text-right font-mono text-sm whitespace-nowrap ${changeColor}`}>
          {changePrefix}{stock.change}%
        </td>

        {/* スパークライン */}
        <td className="px-3 py-2 hidden sm:table-cell">
          <MiniChart data={stock.sparkline} />
        </td>

        {/* トレンド (PC only) */}
        <td className="px-3 py-2 hidden md:table-cell">
          <TrendBadge trend={stock.trend} />
        </td>

        {/* MA5 / MA25 / MA75 (PC only) */}
        <td className="px-3 py-2 hidden lg:table-cell text-xs text-navy-50 font-mono whitespace-nowrap">
          <div>{stock.ma5.toLocaleString()}</div>
          <div>{stock.ma25.toLocaleString()}</div>
          <div>{stock.ma75.toLocaleString()}</div>
        </td>

        {/* RSI (PC only) */}
        <td className="px-3 py-2 hidden md:table-cell w-28">
          <MiniBar value={stock.rsi} />
        </td>

        {/* MACD hist (PC only) */}
        <td className={`px-3 py-2 hidden md:table-cell text-right font-mono text-xs whitespace-nowrap ${stock.macdHist >= 0 ? 'text-[#69f0ae]' : 'text-[#ff7043]'}`}>
          {stock.macdHist >= 0 ? '+' : ''}{stock.macdHist}
        </td>

        {/* 出来高比 (PC only) */}
        <td className="px-3 py-2 hidden md:table-cell text-right text-xs font-mono text-white">
          {stock.volRatio}x
        </td>

        {/* シグナル */}
        <td className="px-3 py-2 whitespace-nowrap">
          <SignalBadge signal={stock.signal} />
        </td>

        {/* 強度 */}
        <td className="px-3 py-2 hidden sm:table-cell w-28">
          <MiniBar value={stock.strength} color="#d4af37" />
        </td>
      </tr>

      {/* モバイル展開ドロワー */}
      {expanded && (
        <tr className="md:hidden bg-navy-600/50">
          <td colSpan={10} className="px-4 py-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-navy-50">トレンド</span>
                <TrendBadge trend={stock.trend} />
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">セクター</span>
                <span className="text-white">{info?.sector ?? '-'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">MA5</span>
                <span className="text-white font-mono">¥{stock.ma5.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">MA25</span>
                <span className="text-white font-mono">¥{stock.ma25.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">MA75</span>
                <span className="text-white font-mono">¥{stock.ma75.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-navy-50">RSI</span>
                <div className="w-24"><MiniBar value={stock.rsi} /></div>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">MACD</span>
                <span className={`font-mono ${stock.macdHist >= 0 ? 'text-[#69f0ae]' : 'text-[#ff7043]'}`}>
                  {stock.macdHist >= 0 ? '+' : ''}{stock.macdHist}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-50">出来高比</span>
                <span className="text-white font-mono">{stock.volRatio}x</span>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
