export interface StockInfo {
  name: string
  basePrice: number
  sector: string
}

export const STOCK_MASTER: Record<string, StockInfo> = {
  '7203': { name: 'トヨタ自動車',          basePrice: 3200,  sector: '輸送機器' },
  '6758': { name: 'ソニーグループ',         basePrice: 3260,  sector: '電気機器' },
  '9984': { name: 'ソフトバンクG',         basePrice: 5840,  sector: '情報通信' },
  '8306': { name: '三菱UFJ FG',           basePrice: 1780,  sector: '銀行業' },
  '6861': { name: 'キーエンス',            basePrice: 57700, sector: '電気機器' },
  '4063': { name: '信越化学工業',          basePrice: 6450,  sector: '化学' },
  '9432': { name: 'NTT',                  basePrice: 147,   sector: '情報通信' },
  '7974': { name: '任天堂',               basePrice: 8220,  sector: 'その他製品' },
  '6367': { name: 'ダイキン工業',          basePrice: 18200, sector: '機械' },
  '8035': { name: '東京エレクトロン',       basePrice: 24500, sector: '電気機器' },
  '4661': { name: 'オリエンタルランド',     basePrice: 3980,  sector: 'サービス業' },
  '9983': { name: 'ファーストリテイリング', basePrice: 49800, sector: '小売業' },
  '6954': { name: 'ファナック',            basePrice: 3850,  sector: '電気機器' },
  '7267': { name: '本田技研工業',          basePrice: 1480,  sector: '輸送機器' },
  '2802': { name: '味の素',               basePrice: 5100,  sector: '食料品' },
  '4519': { name: '中外製薬',             basePrice: 6500,  sector: '医薬品' },
  '6098': { name: 'リクルートHD',         basePrice: 9100,  sector: 'サービス業' },
  '7751': { name: 'キヤノン',             basePrice: 4550,  sector: '電気機器' },
  '8316': { name: '三井住友FG',           basePrice: 3850,  sector: '銀行業' },
  '8058': { name: '三菱商事',             basePrice: 2800,  sector: '卸売業' },
  '5016': { name: 'JX金属',              basePrice: 4855,  sector: '非鉄金属' },
  '2914': { name: '日本たばこ産業',        basePrice: 5866,  sector: '食料品' },
}

export const ALL_SECTORS = [...new Set(Object.values(STOCK_MASTER).map((s) => s.sector))].sort()
