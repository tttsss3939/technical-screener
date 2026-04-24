export interface StockInfo {
  name: string
  basePrice: number
  sector: string
}

export const STOCK_MASTER: Record<string, StockInfo> = {
  // 空運業
  '9202': { name: 'ANAホールディングス',              basePrice: 3100,  sector: '空運業' },
  '9201': { name: '日本航空',                        basePrice: 2500,  sector: '空運業' },

  // 輸送機器
  '543A': { name: 'アーキオン',                      basePrice: 1000,  sector: '輸送機器' },
  '7267': { name: '本田技研工業',                    basePrice: 1480,  sector: '輸送機器' },
  '7202': { name: 'いすゞ自動車',                    basePrice: 2100,  sector: '輸送機器' },
  '7261': { name: 'マツダ',                          basePrice: 1500,  sector: '輸送機器' },
  '7211': { name: '三菱自動車工業',                  basePrice: 600,   sector: '輸送機器' },
  '7201': { name: '日産自動車',                      basePrice: 450,   sector: '輸送機器' },
  '7270': { name: 'SUBARU',                         basePrice: 3200,  sector: '輸送機器' },
  '7269': { name: 'スズキ',                          basePrice: 1800,  sector: '輸送機器' },
  '7203': { name: 'トヨタ自動車',                    basePrice: 3200,  sector: '輸送機器' },
  '7272': { name: 'ヤマハ発動機',                    basePrice: 1400,  sector: '輸送機器' },

  // 銀行業
  '8304': { name: 'あおぞら銀行',                    basePrice: 2500,  sector: '銀行業' },
  '8331': { name: '千葉銀行',                        basePrice: 1100,  sector: '銀行業' },
  '8354': { name: 'ふくおかフィナンシャルグループ',  basePrice: 3800,  sector: '銀行業' },
  '8306': { name: '三菱UFJフィナンシャル・グループ', basePrice: 1780,  sector: '銀行業' },
  '8411': { name: 'みずほフィナンシャルグループ',    basePrice: 2800,  sector: '銀行業' },
  '8308': { name: 'りそなホールディングス',          basePrice: 800,   sector: '銀行業' },
  '5831': { name: '静岡フィナンシャルグループ',      basePrice: 2000,  sector: '銀行業' },
  '8316': { name: '三井住友フィナンシャルグループ',  basePrice: 3850,  sector: '銀行業' },
  '8309': { name: '三井住友トラスト・ホールディングス', basePrice: 3500, sector: '銀行業' },
  '7186': { name: 'コンコルディア・フィナンシャルグループ', basePrice: 700, sector: '銀行業' },

  // 化学
  '3407': { name: '旭化成',                          basePrice: 1100,  sector: '化学' },
  '4061': { name: 'デンカ',                          basePrice: 2800,  sector: '化学' },
  '4901': { name: '富士フイルムホールディングス',    basePrice: 8000,  sector: '化学' },
  '4452': { name: '花王',                            basePrice: 5000,  sector: '化学' },
  '3405': { name: 'クラレ',                          basePrice: 1800,  sector: '化学' },
  '4188': { name: '三菱ケミカルグループ',            basePrice: 900,   sector: '化学' },
  '4183': { name: '三井化学',                        basePrice: 3500,  sector: '化学' },
  '4021': { name: '日産化学',                        basePrice: 4500,  sector: '化学' },
  '6988': { name: '日東電工',                        basePrice: 9000,  sector: '化学' },
  '4004': { name: 'レゾナック・ホールディングス',    basePrice: 3000,  sector: '化学' },
  '4063': { name: '信越化学工業',                    basePrice: 6450,  sector: '化学' },
  '4911': { name: '資生堂',                          basePrice: 3500,  sector: '化学' },
  '4005': { name: '住友化学',                        basePrice: 500,   sector: '化学' },
  '4043': { name: 'トクヤマ',                        basePrice: 2500,  sector: '化学' },
  '4042': { name: '東ソー',                          basePrice: 2000,  sector: '化学' },
  '4208': { name: 'UBE',                             basePrice: 2800,  sector: '化学' },

  // 情報通信
  '9433': { name: 'KDDI',                            basePrice: 4500,  sector: '情報通信' },
  '9432': { name: 'NTT',                             basePrice: 147,   sector: '情報通信' },
  '9434': { name: 'ソフトバンク',                    basePrice: 1900,  sector: '情報通信' },
  '9984': { name: 'ソフトバンクグループ',            basePrice: 5840,  sector: '情報通信' },

  // 建設業
  '1721': { name: 'コムシスホールディングス',        basePrice: 3500,  sector: '建設業' },
  '1925': { name: '大和ハウス工業',                  basePrice: 4200,  sector: '建設業' },
  '1808': { name: '長谷工コーポレーション',          basePrice: 2000,  sector: '建設業' },
  '1963': { name: '日揮ホールディングス',            basePrice: 2200,  sector: '建設業' },
  '1812': { name: '鹿島建設',                        basePrice: 2800,  sector: '建設業' },
  '1802': { name: '大林組',                          basePrice: 2000,  sector: '建設業' },
  '1928': { name: '積水ハウス',                      basePrice: 3200,  sector: '建設業' },
  '1803': { name: '清水建設',                        basePrice: 1500,  sector: '建設業' },
  '1801': { name: '大成建設',                        basePrice: 5000,  sector: '建設業' },

  // 電気機器
  '6857': { name: 'アドバンテスト',                  basePrice: 8000,  sector: '電気機器' },
  '6770': { name: 'アルプスアルパイン',              basePrice: 1500,  sector: '電気機器' },
  '7751': { name: 'キヤノン',                        basePrice: 4550,  sector: '電気機器' },
  '6902': { name: 'デンソー',                        basePrice: 2500,  sector: '電気機器' },
  '6954': { name: 'ファナック',                      basePrice: 3850,  sector: '電気機器' },
  '6504': { name: '富士電機',                        basePrice: 6000,  sector: '電気機器' },
  '6702': { name: '富士通',                          basePrice: 3500,  sector: '電気機器' },
  '6501': { name: '日立製作所',                      basePrice: 4000,  sector: '電気機器' },
  '6861': { name: 'キーエンス',                      basePrice: 57700, sector: '電気機器' },
  '285A': { name: 'キオクシアホールディングス',      basePrice: 1800,  sector: '電気機器' },
  '6971': { name: '京セラ',                          basePrice: 1800,  sector: '電気機器' },
  '6920': { name: 'レーザーテック',                  basePrice: 12000, sector: '電気機器' },
  '6479': { name: 'ミネベアミツミ',                  basePrice: 2800,  sector: '電気機器' },
  '6503': { name: '三菱電機',                        basePrice: 2300,  sector: '電気機器' },
  '6981': { name: '村田製作所',                      basePrice: 2800,  sector: '電気機器' },
  '6701': { name: 'NEC',                             basePrice: 14000, sector: '電気機器' },
  '6594': { name: 'ニデック',                        basePrice: 3500,  sector: '電気機器' },
  '6645': { name: 'オムロン',                        basePrice: 4000,  sector: '電気機器' },
  '6752': { name: 'パナソニックホールディングス',    basePrice: 1500,  sector: '電気機器' },
  '6723': { name: 'ルネサスエレクトロニクス',        basePrice: 2500,  sector: '電気機器' },
  '7752': { name: 'リコー',                          basePrice: 1400,  sector: '電気機器' },
  '6963': { name: 'ローム',                          basePrice: 2500,  sector: '電気機器' },
  '7735': { name: 'SCREENホールディングス',          basePrice: 12000, sector: '電気機器' },
  '6724': { name: 'セイコーエプソン',                basePrice: 2200,  sector: '電気機器' },
  '6753': { name: 'シャープ',                        basePrice: 900,   sector: '電気機器' },
  '6758': { name: 'ソニーグループ',                  basePrice: 3260,  sector: '電気機器' },
  '6526': { name: 'ソシオネクスト',                  basePrice: 3000,  sector: '電気機器' },
  '6976': { name: '太陽誘電',                        basePrice: 2800,  sector: '電気機器' },
  '6762': { name: 'TDK',                             basePrice: 2200,  sector: '電気機器' },
  '8035': { name: '東京エレクトロン',                basePrice: 24500, sector: '電気機器' },
  '6506': { name: '安川電機',                        basePrice: 4500,  sector: '電気機器' },
  '6841': { name: '横河電機',                        basePrice: 3000,  sector: '電気機器' },

  // 電力・ガス
  '9502': { name: '中部電力',                        basePrice: 1800,  sector: '電力・ガス' },
  '9503': { name: '関西電力',                        basePrice: 2200,  sector: '電力・ガス' },
  '9501': { name: '東京電力ホールディングス',        basePrice: 700,   sector: '電力・ガス' },
  '9532': { name: '大阪ガス',                        basePrice: 3000,  sector: '電力・ガス' },
  '9531': { name: '東京ガス',                        basePrice: 3500,  sector: '電力・ガス' },

  // 水産・農林業
  '1332': { name: 'ニッスイ',                        basePrice: 700,   sector: '水産・農林業' },

  // 食料品
  '2802': { name: '味の素',                          basePrice: 5100,  sector: '食料品' },
  '2502': { name: 'アサヒグループホールディングス',  basePrice: 2200,  sector: '食料品' },
  '2914': { name: '日本たばこ産業',                  basePrice: 5866,  sector: '食料品' },
  '2801': { name: 'キッコーマン',                    basePrice: 1800,  sector: '食料品' },
  '2503': { name: 'キリンホールディングス',          basePrice: 2000,  sector: '食料品' },
  '2269': { name: '明治ホールディングス',            basePrice: 3200,  sector: '食料品' },
  '2282': { name: '日本ハム',                        basePrice: 3500,  sector: '食料品' },
  '2871': { name: 'ニチレイ',                        basePrice: 3200,  sector: '食料品' },
  '2002': { name: '日清製粉グループ本社',            basePrice: 1800,  sector: '食料品' },
  '2501': { name: 'サッポロホールディングス',        basePrice: 6500,  sector: '食料品' },

  // ガラス・土石製品
  '5201': { name: 'AGC',                             basePrice: 5000,  sector: 'ガラス・土石製品' },
  '5333': { name: '日本ガイシ',                      basePrice: 1800,  sector: 'ガラス・土石製品' },
  '5214': { name: '日本電気硝子',                    basePrice: 1800,  sector: 'ガラス・土石製品' },
  '5233': { name: '太平洋セメント',                  basePrice: 3000,  sector: 'ガラス・土石製品' },
  '5301': { name: '東海カーボン',                    basePrice: 1500,  sector: 'ガラス・土石製品' },
  '5332': { name: 'TOTO',                            basePrice: 3500,  sector: 'ガラス・土石製品' },

  // 保険業
  '8750': { name: '第一生命ホールディングス',        basePrice: 3000,  sector: '保険業' },
  '8725': { name: 'MS&ADインシュアランスグループ',   basePrice: 3000,  sector: '保険業' },
  '8630': { name: 'SOMPOホールディングス',           basePrice: 3500,  sector: '保険業' },
  '8795': { name: 'T&Dホールディングス',             basePrice: 2000,  sector: '保険業' },
  '8766': { name: '東京海上ホールディングス',        basePrice: 4500,  sector: '保険業' },

  // 陸運業
  '9147': { name: 'ニッポンエクスプレスホールディングス', basePrice: 8000, sector: '陸運業' },
  '9064': { name: 'ヤマトホールディングス',          basePrice: 2200,  sector: '陸運業' },
  '9022': { name: '東海旅客鉄道',                    basePrice: 4000,  sector: '陸運業' },
  '9020': { name: '東日本旅客鉄道',                  basePrice: 3000,  sector: '陸運業' },
  '9008': { name: '京王電鉄',                        basePrice: 1200,  sector: '陸運業' },
  '9009': { name: '京成電鉄',                        basePrice: 3500,  sector: '陸運業' },
  '9007': { name: '小田急電鉄',                      basePrice: 1300,  sector: '陸運業' },
  '9001': { name: '東武鉄道',                        basePrice: 3000,  sector: '陸運業' },
  '9005': { name: '東急',                            basePrice: 1600,  sector: '陸運業' },
  '9021': { name: '西日本旅客鉄道',                  basePrice: 2500,  sector: '陸運業' },

  // 機械
  '6113': { name: 'アマダ',                          basePrice: 1600,  sector: '機械' },
  '6367': { name: 'ダイキン工業',                    basePrice: 18200, sector: '機械' },
  '6361': { name: '荏原製作所',                      basePrice: 3500,  sector: '機械' },
  '6305': { name: '日立建機',                        basePrice: 3500,  sector: '機械' },
  '7004': { name: 'カナデビア',                      basePrice: 2000,  sector: '機械' },
  '7013': { name: 'IHI',                             basePrice: 8000,  sector: '機械' },
  '5631': { name: '日本製鋼所',                      basePrice: 3500,  sector: '機械' },
  '6473': { name: 'ジェイテクト',                    basePrice: 1500,  sector: '機械' },
  '6301': { name: 'コマツ',                          basePrice: 3800,  sector: '機械' },
  '6326': { name: 'クボタ',                          basePrice: 2500,  sector: '機械' },
  '7011': { name: '三菱重工業',                      basePrice: 12000, sector: '機械' },
  '6471': { name: '日本精工',                        basePrice: 1000,  sector: '機械' },
  '6472': { name: 'NTN',                             basePrice: 450,   sector: '機械' },
  '6103': { name: 'オークマ',                        basePrice: 5500,  sector: '機械' },
  '6302': { name: '住友重機械工業',                  basePrice: 4500,  sector: '機械' },
  '6273': { name: 'SMC',                             basePrice: 65000, sector: '機械' },
  '7012': { name: '川崎重工業',                      basePrice: 7000,  sector: '機械' },

  // 海運業
  '9107': { name: '川崎汽船',                        basePrice: 2000,  sector: '海運業' },
  '9104': { name: '商船三井',                        basePrice: 4500,  sector: '海運業' },
  '9101': { name: '日本郵船',                        basePrice: 4500,  sector: '海運業' },

  // 鉱業
  '1605': { name: 'INPEX',                           basePrice: 2200,  sector: '鉱業' },

  // 非鉄金属
  '5714': { name: 'DOWAホールディングス',            basePrice: 4500,  sector: '非鉄金属' },
  '5803': { name: 'フジクラ',                        basePrice: 3500,  sector: '非鉄金属' },
  '5801': { name: '古河電気工業',                    basePrice: 5000,  sector: '非鉄金属' },
  '5711': { name: '三菱マテリアル',                  basePrice: 2200,  sector: '非鉄金属' },
  '5706': { name: '三井金属鉱業',                    basePrice: 3500,  sector: '非鉄金属' },
  '3436': { name: 'SUMCO',                           basePrice: 2000,  sector: '非鉄金属' },
  '5802': { name: '住友電気工業',                    basePrice: 2500,  sector: '非鉄金属' },
  '5713': { name: '住友金属鉱山',                    basePrice: 3500,  sector: '非鉄金属' },

  // その他金融業
  '8253': { name: 'クレディセゾン',                  basePrice: 2800,  sector: 'その他金融業' },
  '8697': { name: '日本取引所グループ',              basePrice: 3500,  sector: 'その他金融業' },
  '8591': { name: 'オリックス',                      basePrice: 3500,  sector: 'その他金融業' },

  // その他製品
  '7832': { name: 'バンダイナムコホールディングス',  basePrice: 3000,  sector: 'その他製品' },
  '7912': { name: '大日本印刷',                      basePrice: 3500,  sector: 'その他製品' },
  '7911': { name: 'TOPPANホールディングス',          basePrice: 3500,  sector: 'その他製品' },
  '7951': { name: 'ヤマハ',                          basePrice: 3000,  sector: 'その他製品' },
  '7974': { name: '任天堂',                          basePrice: 8220,  sector: 'その他製品' },

  // 石油・石炭製品
  '5020': { name: 'ENEOSホールディングス',           basePrice: 700,   sector: '石油・石炭製品' },
  '5019': { name: '出光興産',                        basePrice: 1000,  sector: '石油・石炭製品' },

  // 医薬品
  '4503': { name: 'アステラス製薬',                  basePrice: 1700,  sector: '医薬品' },
  '4519': { name: '中外製薬',                        basePrice: 6500,  sector: '医薬品' },
  '4568': { name: '第一三共',                        basePrice: 5000,  sector: '医薬品' },
  '4523': { name: 'エーザイ',                        basePrice: 5000,  sector: '医薬品' },
  '4151': { name: '協和キリン',                      basePrice: 2500,  sector: '医薬品' },
  '4578': { name: '大塚ホールディングス',            basePrice: 7000,  sector: '医薬品' },
  '4506': { name: '住友ファーマ',                    basePrice: 700,   sector: '医薬品' },
  '4507': { name: '塩野義製薬',                      basePrice: 8000,  sector: '医薬品' },
  '4502': { name: '武田薬品工業',                    basePrice: 4200,  sector: '医薬品' },

  // 精密機器
  '6146': { name: 'ディスコ',                        basePrice: 50000, sector: '精密機器' },
  '7741': { name: 'HOYA',                            basePrice: 20000, sector: '精密機器' },
  '4902': { name: 'コニカミノルタ',                  basePrice: 600,   sector: '精密機器' },
  '7731': { name: 'ニコン',                          basePrice: 1500,  sector: '精密機器' },
  '7733': { name: 'オリンパス',                      basePrice: 2000,  sector: '精密機器' },
  '4543': { name: 'テルモ',                          basePrice: 3500,  sector: '精密機器' },

  // パルプ・紙
  '3861': { name: '王子ホールディングス',            basePrice: 700,   sector: 'パルプ・紙' },

  // 不動産業
  '8802': { name: '三菱地所',                        basePrice: 2200,  sector: '不動産業' },
  '8801': { name: '三井不動産',                      basePrice: 3500,  sector: '不動産業' },
  '8830': { name: '住友不動産',                      basePrice: 4500,  sector: '不動産業' },
  '8804': { name: '東京建物',                        basePrice: 2500,  sector: '不動産業' },
  '3289': { name: '東急不動産ホールディングス',      basePrice: 1000,  sector: '不動産業' },

  // 小売業
  '8267': { name: 'イオン',                          basePrice: 3200,  sector: '小売業' },
  '9983': { name: 'ファーストリテイリング',          basePrice: 49800, sector: '小売業' },
  '3099': { name: '三越伊勢丹ホールディングス',      basePrice: 2500,  sector: '小売業' },
  '3086': { name: 'J.フロントリテイリング',          basePrice: 1800,  sector: '小売業' },
  '8252': { name: '丸井グループ',                    basePrice: 2200,  sector: '小売業' },
  '7453': { name: '良品計画',                        basePrice: 2500,  sector: '小売業' },
  '9843': { name: 'ニトリホールディングス',          basePrice: 22000, sector: '小売業' },
  '7532': { name: 'パン・パシフィック・インターナショナルHD', basePrice: 3500, sector: '小売業' },
  '3382': { name: 'セブン&アイ・ホールディングス',   basePrice: 2500,  sector: '小売業' },
  '8233': { name: '髙島屋',                          basePrice: 2500,  sector: '小売業' },
  '3092': { name: 'ZOZO',                            basePrice: 3500,  sector: '小売業' },

  // ゴム製品
  '5108': { name: 'ブリヂストン',                    basePrice: 6000,  sector: 'ゴム製品' },
  '5101': { name: '横浜ゴム',                        basePrice: 3000,  sector: 'ゴム製品' },

  // 証券・商品先物
  '8601': { name: '大和証券グループ本社',            basePrice: 1000,  sector: '証券・商品先物' },
  '8604': { name: '野村ホールディングス',            basePrice: 800,   sector: '証券・商品先物' },

  // サービス業
  '6532': { name: 'ベイカレント・コンサルティング',  basePrice: 3000,  sector: 'サービス業' },
  '4751': { name: 'サイバーエージェント',            basePrice: 1000,  sector: 'サービス業' },
  '2432': { name: 'ディー・エヌ・エー',              basePrice: 2000,  sector: 'サービス業' },
  '4324': { name: '電通グループ',                    basePrice: 3500,  sector: 'サービス業' },
  '6178': { name: '日本郵政',                        basePrice: 1400,  sector: 'サービス業' },
  '9766': { name: 'コナミグループ',                  basePrice: 12000, sector: 'サービス業' },
  '4689': { name: 'LYコーポレーション',              basePrice: 400,   sector: 'サービス業' },
  '4385': { name: 'メルカリ',                        basePrice: 2000,  sector: 'サービス業' },
  '2413': { name: 'エムスリー',                      basePrice: 1200,  sector: 'サービス業' },
  '3659': { name: 'ネクソン',                        basePrice: 2500,  sector: 'サービス業' },
  '4307': { name: '野村総合研究所',                  basePrice: 4500,  sector: 'サービス業' },
  '4661': { name: 'オリエンタルランド',              basePrice: 3980,  sector: 'サービス業' },
  '4755': { name: '楽天グループ',                    basePrice: 900,   sector: 'サービス業' },
  '6098': { name: 'リクルートホールディングス',      basePrice: 9100,  sector: 'サービス業' },
  '9735': { name: 'セコム',                          basePrice: 13000, sector: 'サービス業' },
  '3697': { name: 'SHIFT',                           basePrice: 8000,  sector: 'サービス業' },
  '9602': { name: '東宝',                            basePrice: 5000,  sector: 'サービス業' },
  '4704': { name: 'トレンドマイクロ',                basePrice: 8000,  sector: 'サービス業' },

  // 鉄鋼
  '5411': { name: 'JFEホールディングス',             basePrice: 2000,  sector: '鉄鋼' },
  '5406': { name: '神戸製鋼所',                      basePrice: 2000,  sector: '鉄鋼' },
  '5401': { name: '日本製鉄',                        basePrice: 3000,  sector: '鉄鋼' },

  // 繊維製品
  '3401': { name: '帝人',                            basePrice: 1500,  sector: '繊維製品' },
  '3402': { name: '東レ',                            basePrice: 900,   sector: '繊維製品' },

  // 卸売業
  '8001': { name: '伊藤忠商事',                      basePrice: 8000,  sector: '卸売業' },
  '8002': { name: '丸紅',                            basePrice: 2800,  sector: '卸売業' },
  '8058': { name: '三菱商事',                        basePrice: 2800,  sector: '卸売業' },
  '8031': { name: '三井物産',                        basePrice: 3500,  sector: '卸売業' },
  '2768': { name: '双日',                            basePrice: 3500,  sector: '卸売業' },
  '8053': { name: '住友商事',                        basePrice: 3000,  sector: '卸売業' },
  '8015': { name: '豊田通商',                        basePrice: 3000,  sector: '卸売業' },
}

export const ALL_SECTORS = [...new Set(Object.values(STOCK_MASTER).map((s) => s.sector))].sort()
