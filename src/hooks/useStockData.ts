import { useEffect, useState } from 'react'
import type { TechnicalData } from '../lib/technical'

export interface StocksCache {
  updatedAt: string
  updatedAtJST: string
  stocks: TechnicalData[]
}

export function useStockData() {
  const [data, setData] = useState<StocksCache | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/technical-screener/data/stocks.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<StocksCache>
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((e: Error) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  return { data, loading, error }
}
