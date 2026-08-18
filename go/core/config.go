package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MarketData",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://data-api.binance.vision",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"market_data": map[string]any{},
			},
		},
		"entity": map[string]any{
			"market_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "askPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "askQty",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bidPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bidQty",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "closeTime",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "firstId",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "highPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastId",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastQty",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lowPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "openPrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "openTime",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "prevClosePrice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "priceChange",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "priceChangePercent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quoteVolume",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "symbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "volume",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weightedAvgPrice",
						"type": "`$STRING`",
					},
				},
				"name": "market_data",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "BTCUSDT",
											"kind": "query",
											"name": "symbol",
											"orig": "symbol",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "[\"BTCUSDT\",\"ETHUSDT\"]",
											"kind": "query",
											"name": "symbol",
											"orig": "symbol",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "FULL",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/ticker/24hr",
								"parts": []any{
									"api",
									"v3",
									"ticker",
									"24hr",
								},
								"select": map[string]any{
									"exist": []any{
										"symbol",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
