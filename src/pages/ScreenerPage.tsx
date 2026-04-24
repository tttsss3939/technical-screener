import { useStockData } from '../hooks/useStockData'
import { useScreener } from '../hooks/useScreener'
import { FilterBar } from '../components/Screener/FilterBar'
import { SummaryCards } from '../components/Screener/SummaryCards'
import { ScreenerTable } from '../components/Screener/ScreenerTable'

function exportCSV(stocks: ReturnType<typeof useStockData>['data']) {
  if (!stocks) return
  const headers = [
    'ticker','price','change','ma5','ma25','ma75','trend',
    'rsi','macd','macdSignal','macdHist','volume','volAvg','volRatio','signal','strength',
  ]
  const rows = stocks.stocks.map((s) =>
    headers.map((h) => String(s[h as keyof typeof s])).join(',')
  )
  const csv = [headers.join(','), ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const now = new Date()
  const ts = now.toISOString().replace(/[-:T]/g, '').slice(0, 12)
  a.href = url
  a.download = `screener_${ts}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function ScreenerPage() {
  const { data, loading, error } = useStockData()
  const { tab, setTab } = useScreener()

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* ヘッダー */}
      <header className="bg-navy-800 border-b border-navy-300/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gold rounded-full" />
          <div>
            <h1 className="text-lg font-bold text-gold tracking-wide">日本株テクニカルスクリーナー</h1>
            {data && (
              <p className="text-xs text-navy-50">最終更新: {data.updatedAtJST}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {data && (
            <button
              onClick={() => exportCSV(data)}
              className="text-xs px-3 py-1.5 bg-navy-600 hover:bg-navy-500 border border-navy-300/40 rounded text-gold transition-colors"
            >
              CSV出力
            </button>
          )}
        </div>
      </header>

      <main className="p-4 max-w-screen-xl mx-auto">
        {/* タブ */}
        <div className="flex gap-1 mb-4 border-b border-navy-300/30">
          {(['all', 'watchlist'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                tab === t
                  ? 'border-gold text-gold'
                  : 'border-transparent text-navy-50 hover:text-white'
              }`}
            >
              {t === 'all' ? '全銘柄' : 'ウォッチリスト ★'}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="text-gold text-sm animate-pulse">データ読み込み中...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-4 text-red-300 text-sm">
            データの取得に失敗しました: {error}
          </div>
        )}

        {data && (
          <>
            <SummaryCards stocks={data.stocks} />
            <FilterBar />
            <ScreenerTable stocks={data.stocks} />
          </>
        )}
      </main>
    </div>
  )
}
