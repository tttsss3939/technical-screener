import fs from 'fs'
import path from 'path'

const TICKERS = [
  '7203', '6758', '9984', '8306', '6861',
  '4063', '9432', '7974', '6367', '8035',
  '4661', '9983', '6954', '7267', '2802',
  '4519', '6098', '7751', '8316', '8058',
  '5016', '2914',
]

async function fetchOHLCV(ticker) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}.T?interval=1d&range=3mo`
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${ticker}`)
  const json = await res.json()
  const result = json.chart.result[0]
  return {
    timestamps: result.timestamp,
    close:  result.indicators.quote[0].close,
    volume: result.indicators.quote[0].volume,
  }
}

function sma(data, period) {
  const slice = data.filter(Boolean).slice(-period)
  return slice.reduce((a, b) => a + b, 0) / slice.length
}

function ema(data, period) {
  const k = 2 / (period + 1)
  return data.reduce((acc, val, i) => {
    acc.push(i === 0 ? val : val * k + acc[i - 1] * (1 - k))
    return acc
  }, [])
}

function calcRSI(closes) {
  const valid = closes.filter(Boolean)
  const diffs = valid.slice(-15).map((c, i, arr) => c - (arr[i - 1] ?? c)).slice(1)
  const gains  = diffs.filter(d => d > 0)
  const losses = diffs.filter(d => d < 0).map(Math.abs)
  const avgGain = gains.reduce((a, b) => a + b, 0) / 14
  const avgLoss = losses.reduce((a, b) => a + b, 0) / 14
  if (avgLoss === 0) return 100
  return Math.round(100 - 100 / (1 + avgGain / avgLoss))
}

function calcMACD(closes) {
  const valid = closes.filter(Boolean)
  const ema12 = ema(valid, 12)
  const ema26 = ema(valid, 26)
  const macdLine = ema12.map((v, i) => v - ema26[i])
  const signalLine = ema(macdLine.slice(-26), 9)
  const macdVal   = macdLine[macdLine.length - 1]
  const signalVal = signalLine[signalLine.length - 1]
  return {
    macd:       parseFloat(macdVal.toFixed(1)),
    macdSignal: parseFloat(signalVal.toFixed(1)),
    macdHist:   parseFloat((macdVal - signalVal).toFixed(1)),
  }
}

function calcStrength({ trend, rsi, macdHist, volRatio, price, ma25 }) {
  let score = 50
  if (trend === '上昇') score += 15
  if (trend === '下降') score -= 15
  if (rsi <= 30) score += 12
  if (rsi >= 70) score -= 12
  if (macdHist > 0) score += 10; else score -= 10
  if (volRatio > 1.5) score += 8
  if (price > ma25) score += 5; else score -= 5
  return Math.max(5, Math.min(95, Math.round(score)))
}

async function main() {
  const results = []

  for (const ticker of TICKERS) {
    try {
      const { close, volume } = await fetchOHLCV(ticker)
      const validClose  = close.filter(Boolean)
      const validVolume = volume.filter(Boolean)

      const price     = validClose[validClose.length - 1]
      const prevClose = validClose[validClose.length - 2]
      const change    = parseFloat(((price - prevClose) / prevClose * 100).toFixed(2))
      const ma5       = Math.round(sma(validClose, 5))
      const ma25      = Math.round(sma(validClose, 25))
      const ma75      = Math.round(sma(validClose, 75))
      const rsi       = calcRSI(validClose)
      const { macd, macdSignal, macdHist } = calcMACD(validClose)
      const volAvg    = Math.round(sma(validVolume.slice(0, -1), 20))
      const volRatio  = parseFloat((validVolume[validVolume.length - 1] / volAvg).toFixed(2))
      const sparkline = validClose.slice(-5).map(v => Math.round(v))

      let trend
      if (price > ma5 && ma5 > ma25 && ma25 > ma75) trend = '上昇'
      else if (price < ma5 && ma5 < ma25) trend = '下降'
      else trend = '横ばい'

      const strength = calcStrength({ trend, rsi, macdHist, volRatio, price, ma25 })
      const signal =
        strength >= 75 ? '強い買い' :
        strength >= 58 ? '買い' :
        strength >= 42 ? '中立' :
        strength >= 28 ? '売り' : '強い売り'

      results.push({
        ticker,
        price: Math.round(price),
        change,
        ma5, ma25, ma75,
        trend, rsi,
        macd, macdSignal, macdHist,
        volume: validVolume[validVolume.length - 1],
        volAvg, volRatio,
        signal, strength, sparkline,
      })

      console.log(`✓ ${ticker}: ¥${Math.round(price)} (${change > 0 ? '+' : ''}${change}%)`)
      await new Promise(r => setTimeout(r, 300))

    } catch (e) {
      console.error(`✗ ${ticker}: ${e.message}`)
    }
  }

  const output = {
    updatedAt: new Date().toISOString(),
    updatedAtJST: new Date(Date.now() + 9 * 60 * 60 * 1000)
      .toISOString().replace('T', ' ').slice(0, 16) + ' JST',
    stocks: results,
  }

  const outPath = path.resolve('public/data/stocks.json')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`\n📦 ${results.length}銘柄を ${outPath} に書き出しました`)
}

main()
