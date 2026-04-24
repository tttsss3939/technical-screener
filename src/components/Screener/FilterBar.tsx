import { useScreener } from '../../hooks/useScreener'
import { ALL_SECTORS } from '../../lib/stockMaster'
import type { Trend, Signal } from '../../lib/technical'

const TRENDS: Trend[] = ['上昇', '下降', '横ばい']
const SIGNALS: Signal[] = ['強い買い', '買い', '中立', '売り', '強い売り']

export function FilterBar() {
  const { search, sector, trend, signal, setSearch, setSector, setTrend, setSignal } =
    useScreener()

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        type="text"
        placeholder="銘柄コード・名称で検索"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-navy-700 border border-navy-300/40 text-white text-sm rounded px-3 py-1.5 placeholder-navy-50 focus:outline-none focus:border-gold/60 w-44"
      />

      <select
        value={sector}
        onChange={(e) => setSector(e.target.value)}
        className="bg-navy-700 border border-navy-300/40 text-sm text-white rounded px-3 py-1.5 focus:outline-none focus:border-gold/60"
      >
        <option value="">全セクター</option>
        {ALL_SECTORS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select
        value={trend}
        onChange={(e) => setTrend(e.target.value as Trend | '')}
        className="bg-navy-700 border border-navy-300/40 text-sm text-white rounded px-3 py-1.5 focus:outline-none focus:border-gold/60"
      >
        <option value="">全トレンド</option>
        {TRENDS.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <select
        value={signal}
        onChange={(e) => setSignal(e.target.value as Signal | '')}
        className="bg-navy-700 border border-navy-300/40 text-sm text-white rounded px-3 py-1.5 focus:outline-none focus:border-gold/60"
      >
        <option value="">全シグナル</option>
        {SIGNALS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  )
}
