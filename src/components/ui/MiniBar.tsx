interface MiniBarProps {
  value: number
  max?: number
  color?: string
}

export function MiniBar({ value, max = 100, color }: MiniBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  const barColor = color ?? (value >= 70 ? '#ff5252' : value <= 30 ? '#00e676' : '#c9a84c')
  return (
    <div className="flex items-center gap-1.5 w-full">
      <span className="text-xs w-7 text-right" style={{ color: barColor }}>
        {value}
      </span>
      <div className="flex-1 h-1.5 bg-navy-300 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  )
}
