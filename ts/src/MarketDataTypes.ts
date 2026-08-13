// Typed models for the MarketData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MarketData {
  askPrice?: string
  askQty?: string
  bidPrice?: string
  bidQty?: string
  closeTime?: number
  count?: number
  firstId?: number
  highPrice?: string
  lastId?: number
  lastPrice?: string
  lastQty?: string
  lowPrice?: string
  openPrice?: string
  openTime?: number
  prevClosePrice?: string
  priceChange?: string
  priceChangePercent?: string
  quoteVolume?: string
  symbol?: string
  volume?: string
  weightedAvgPrice?: string
}

export interface MarketDataLoadMatch {
  askPrice?: string
  askQty?: string
  bidPrice?: string
  bidQty?: string
  closeTime?: number
  count?: number
  firstId?: number
  highPrice?: string
  lastId?: number
  lastPrice?: string
  lastQty?: string
  lowPrice?: string
  openPrice?: string
  openTime?: number
  prevClosePrice?: string
  priceChange?: string
  priceChangePercent?: string
  quoteVolume?: string
  symbol?: string
  volume?: string
  weightedAvgPrice?: string
}

