import { create } from 'zustand'
import type { TechnicalData, Trend, Signal } from '../lib/technical'

type SortKey = keyof TechnicalData
type SortDir = 'asc' | 'desc'
type Tab = 'all' | 'watchlist'

interface ScreenerState {
  search: string
  sector: string
  trend: Trend | ''
  signal: Signal | ''
  sortKey: SortKey
  sortDir: SortDir
  tab: Tab
  watchlist: Set<string>
  setSearch: (v: string) => void
  setSector: (v: string) => void
  setTrend: (v: Trend | '') => void
  setSignal: (v: Signal | '') => void
  setSort: (key: SortKey) => void
  setTab: (v: Tab) => void
  toggleWatch: (ticker: string) => void
}

const loadWatchlist = (): Set<string> => {
  try {
    const raw = localStorage.getItem('watchlist')
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

const saveWatchlist = (set: Set<string>) => {
  localStorage.setItem('watchlist', JSON.stringify([...set]))
}

export const useScreener = create<ScreenerState>((set) => ({
  search: '',
  sector: '',
  trend: '',
  signal: '',
  sortKey: 'strength',
  sortDir: 'desc',
  tab: 'all',
  watchlist: loadWatchlist(),
  setSearch: (v) => set({ search: v }),
  setSector: (v) => set({ sector: v }),
  setTrend: (v) => set({ trend: v }),
  setSignal: (v) => set({ signal: v }),
  setSort: (key) =>
    set((s) => ({
      sortKey: key,
      sortDir: s.sortKey === key && s.sortDir === 'desc' ? 'asc' : 'desc',
    })),
  setTab: (v) => set({ tab: v }),
  toggleWatch: (ticker) =>
    set((s) => {
      const next = new Set(s.watchlist)
      next.has(ticker) ? next.delete(ticker) : next.add(ticker)
      saveWatchlist(next)
      return { watchlist: next }
    }),
}))

export function filterAndSort(
  stocks: TechnicalData[],
  state: ScreenerState,
  stockMaster: Record<string, { name: string; sector: string }>
): TechnicalData[] {
  let result = stocks

  if (state.tab === 'watchlist') {
    result = result.filter((s) => state.watchlist.has(s.ticker))
  }

  if (state.search) {
    const q = state.search.toLowerCase()
    result = result.filter(
      (s) =>
        s.ticker.includes(q) ||
        (stockMaster[s.ticker]?.name ?? '').toLowerCase().includes(q)
    )
  }

  if (state.sector) {
    result = result.filter((s) => stockMaster[s.ticker]?.sector === state.sector)
  }

  if (state.trend) {
    result = result.filter((s) => s.trend === state.trend)
  }

  if (state.signal) {
    result = result.filter((s) => s.signal === state.signal)
  }

  result = [...result].sort((a, b) => {
    const av = a[state.sortKey]
    const bv = b[state.sortKey]
    if (typeof av === 'number' && typeof bv === 'number') {
      return state.sortDir === 'asc' ? av - bv : bv - av
    }
    return state.sortDir === 'asc'
      ? String(av).localeCompare(String(bv))
      : String(bv).localeCompare(String(av))
  })

  return result
}
