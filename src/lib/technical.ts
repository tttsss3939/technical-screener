export type Trend = '上昇' | '下降' | '横ばい'
export type Signal = '強い買い' | '買い' | '中立' | '売り' | '強い売り'

export interface TechnicalData {
  ticker: string
  price: number
  change: number
  ma5: number
  ma25: number
  ma75: number
  trend: Trend
  rsi: number
  macd: number
  macdSignal: number
  macdHist: number
  volume: number
  volAvg: number
  volRatio: number
  signal: Signal
  strength: number
  sparkline: number[]
}

export function signalColor(signal: Signal): string {
  switch (signal) {
    case '強い買い': return '#00e676'
    case '買い':    return '#69f0ae'
    case '中立':   return '#c9a84c'
    case '売り':    return '#ff7043'
    case '強い売り': return '#ff5252'
  }
}

export function trendBgClass(trend: Trend): string {
  switch (trend) {
    case '上昇': return 'bg-emerald-900/20'
    case '下降': return 'bg-red-900/20'
    case '横ばい': return ''
  }
}
