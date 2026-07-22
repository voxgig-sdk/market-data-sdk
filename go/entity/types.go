// Typed models for the MarketData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// MarketData is the typed data model for the market_data entity.
type MarketData struct {
	AskPrice *string `json:"ask_price,omitempty"`
	AskQty *string `json:"ask_qty,omitempty"`
	BidPrice *string `json:"bid_price,omitempty"`
	BidQty *string `json:"bid_qty,omitempty"`
	CloseTime *int `json:"close_time,omitempty"`
	Count *int `json:"count,omitempty"`
	FirstId *int `json:"first_id,omitempty"`
	HighPrice *string `json:"high_price,omitempty"`
	LastId *int `json:"last_id,omitempty"`
	LastPrice *string `json:"last_price,omitempty"`
	LastQty *string `json:"last_qty,omitempty"`
	LowPrice *string `json:"low_price,omitempty"`
	OpenPrice *string `json:"open_price,omitempty"`
	OpenTime *int `json:"open_time,omitempty"`
	PrevClosePrice *string `json:"prev_close_price,omitempty"`
	PriceChange *string `json:"price_change,omitempty"`
	PriceChangePercent *string `json:"price_change_percent,omitempty"`
	QuoteVolume *string `json:"quote_volume,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
	Volume *string `json:"volume,omitempty"`
	WeightedAvgPrice *string `json:"weighted_avg_price,omitempty"`
}

// MarketDataLoadMatch is the typed request payload for MarketData.LoadTyped.
type MarketDataLoadMatch struct {
	AskPrice *string `json:"ask_price,omitempty"`
	AskQty *string `json:"ask_qty,omitempty"`
	BidPrice *string `json:"bid_price,omitempty"`
	BidQty *string `json:"bid_qty,omitempty"`
	CloseTime *int `json:"close_time,omitempty"`
	Count *int `json:"count,omitempty"`
	FirstId *int `json:"first_id,omitempty"`
	HighPrice *string `json:"high_price,omitempty"`
	LastId *int `json:"last_id,omitempty"`
	LastPrice *string `json:"last_price,omitempty"`
	LastQty *string `json:"last_qty,omitempty"`
	LowPrice *string `json:"low_price,omitempty"`
	OpenPrice *string `json:"open_price,omitempty"`
	OpenTime *int `json:"open_time,omitempty"`
	PrevClosePrice *string `json:"prev_close_price,omitempty"`
	PriceChange *string `json:"price_change,omitempty"`
	PriceChangePercent *string `json:"price_change_percent,omitempty"`
	QuoteVolume *string `json:"quote_volume,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
	Volume *string `json:"volume,omitempty"`
	WeightedAvgPrice *string `json:"weighted_avg_price,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
