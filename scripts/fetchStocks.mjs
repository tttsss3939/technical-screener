import fs from 'fs'
import path from 'path'

// 日経225構成銘柄（2026年4月時点）
const TICKERS = [
  // 空運業
  '9202', '9201',
  // 輸送機器
  '543A', '7267', '7202', '7261', '7211', '7201', '7270', '7269', '7203', '7272',
  // 銀行業
  '8304', '8331', '8354', '8306', '8411', '8308', '5831', '8316', '8309', '7186',
  // 化学
  '3407', '4061', '4901', '4452', '3405', '4188', '4183', '4021', '6988', '4004',
  '4063', '4911', '4005', '4043', '4042', '4208',
  // 情報通信
  '9433', '9432', '9434', '9984',
  // 建設業
  '1721', '1925', '1808', '1963', '1812', '1802', '1928', '1803', '1801',
  // 電気機器
  '6857', '6770', '7751', '6902', '6954', '6504', '6702', '6501', '6861', '285A',
  '6971', '6920', '6479', '6503', '6981', '6701', '6594', '6645', '6752', '6723',
  '7752', '6963', '7735', '6724', '6753', '6758', '6526', '6976', '6762', '8035',
  '6506', '6841',
  // 電力・ガス
  '9502', '9503', '9501', '9532', '9531',
  // 水産・農林業
  '1332',
  // 食料品
  '2802', '2502', '2914', '2801', '2503', '2269', '2282', '2871', '2002', '2501',
  // ガラス・土石製品
  '5201', '5333', '5214', '5233', '5301', '5332',
  // 保険業
  '8750', '8725', '8630', '8795', '8766',
  // 陸運業
  '9147', '9064', '9022', '9020', '9008', '9009', '9007', '9001', '9005', '9021',
  // 機械
  '6113', '6367', '6361', '6305', '7004', '7013', '5631', '6473', '6301', '6326',
  '7011', '6471', '6472', '6103', '6302', '6273', '7012',
  // 海運業
  '9107', '9104', '9101',
  // 鉱業
  '1605',
  // 非鉄金属
  '5714', '5803', '5801', '5711', '5706', '3436', '5802', '5713',
  // その他金融業
  '8253', '8697', '8591',
  // その他製品
  '7832', '7912', '7911', '7951', '7974',
  // 石油・石炭製品
  '5020', '5019',
  // 医薬品
  '4503', '4519', '4568', '4523', '4151', '4578', '4506', '4507', '4502',
  // 精密機器
  '6146', '7741', '4902', '7731', '7733', '4543',
  // パルプ・紙
  '3861',
  // 不動産業
  '8802', '8801', '8830', '8804', '3289',
  // 小売業
  '8267', '9983', '3099', '3086', '8252', '7453', '9843', '7532', '3382', '8233', '3092',
  // ゴム製品
  '5108', '5101',
  // 証券・商品先物
  '8601', '8604',
  // サービス業
  '6532', '4751', '2432', '4324', '6178', '9766', '4689', '4385', '2413', '3659',
  '4307', '4661', '4755', '6098', '9735', '3697', '9602', '4704',
  // 鉄鋼
  '5411', '5406', '5401',
  // 繊維製品
  '3401', '3402',
  // 卸売業
  '8001', '8002', '8058', '8031', '2768', '8053', '8015',
]

// Yahoo Finance v8 API
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
  let success = 0
  let failed  = 0

  console.log(`📊 日経225全${TICKERS.length}銘柄のデータ取得を開始します...\n`)

  for (const ticker of TICKERS) {
    try {
      const { close, volume } = await fetchOHLCV(ticker)
      const validClose  = close.filter(Boolean)
      const validVolume = volume.filter(Boolean)

      if (validClose.length < 26) {
        throw new Error(`データ不足 (${validClose.length}日分)`)
      }

      const price     = validClose[validClose.length - 1]
      const prevClose = validClose[validClose.length - 2]
      const change    = parseFloat(((price - prevClose) / prevClose * 100).toFixed(2))
      const ma5       = Math.round(sma(validClose, 5))
      const ma25      = Math.round(sma(validClose, 25))
      const ma75      = Math.round(sma(validClose, Math.min(75, validClose.length)))
      const rsi       = calcRSI(validClose)
      const { macd, macdSignal, macdHist } = calcMACD(validClose)
      const volAvg    = Math.round(sma(validVolume.slice(0, -1), Math.min(20, validVolume.length - 1)))
      const volRatio  = volAvg > 0
        ? parseFloat((validVolume[validVolume.length - 1] / volAvg).toFixed(2))
        : 1.0
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

      success++
      console.log(`✓ ${ticker}: ¥${Math.round(price).toLocaleString()} (${change > 0 ? '+' : ''}${change}%) [${success}/${TICKERS.length}]`)

    } catch (e) {
      failed++
      console.error(`✗ ${ticker}: ${e.message}`)
    }

    // レート制限対策
    await new Promise(r => setTimeout(r, 500))
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
  console.log(`\n📦 完了: 成功 ${success}銘柄 / 失敗 ${failed}銘柄`)
  console.log(`💾 ${outPath} に書き出しました`)
}

main()
