// Typed models for the MarketData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MarketData {
  ask_price?: string
  ask_qty?: string
  bid_price?: string
  bid_qty?: string
  close_time?: number
  count?: number
  first_id?: number
  high_price?: string
  last_id?: number
  last_price?: string
  last_qty?: string
  low_price?: string
  open_price?: string
  open_time?: number
  prev_close_price?: string
  price_change?: string
  price_change_percent?: string
  quote_volume?: string
  symbol?: string
  volume?: string
  weighted_avg_price?: string
}

export interface MarketDataLoadMatch {
  ask_price?: string
  ask_qty?: string
  bid_price?: string
  bid_qty?: string
  close_time?: number
  count?: number
  first_id?: number
  high_price?: string
  last_id?: number
  last_price?: string
  last_qty?: string
  low_price?: string
  open_price?: string
  open_time?: number
  prev_close_price?: string
  price_change?: string
  price_change_percent?: string
  quote_volume?: string
  symbol?: string
  volume?: string
  weighted_avg_price?: string
}

