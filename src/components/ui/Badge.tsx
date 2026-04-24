import type { Signal, Trend } from '../../lib/technical'

interface SignalBadgeProps {
  signal: Signal
}

export function SignalBadge({ signal }: SignalBadgeProps) {
  const colors: Record<Signal, string> = {
    '強い買い': 'bg-[#00e676]/20 text-[#00e676] border border-[#00e676]/40',
    '買い':    'bg-[#69f0ae]/20 text-[#69f0ae] border border-[#69f0ae]/40',
    '中立':   'bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/40',
    '売り':    'bg-[#ff7043]/20 text-[#ff7043] border border-[#ff7043]/40',
    '強い売り': 'bg-[#ff5252]/20 text-[#ff5252] border border-[#ff5252]/40',
  }
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${colors[signal]}`}>
      {signal}
    </span>
  )
}

interface TrendBadgeProps {
  trend: Trend
}

export function TrendBadge({ trend }: TrendBadgeProps) {
  const colors: Record<Trend, string> = {
    '上昇': 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
    '下降': 'bg-red-500/20 text-red-400 border border-red-500/40',
    '横ばい': 'bg-gray-500/20 text-gray-400 border border-gray-500/40',
  }
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${colors[trend]}`}>
      {trend}
    </span>
  )
}
