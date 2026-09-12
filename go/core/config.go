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
			"slug": "market-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "ticker",
									},
									map[string]any{
										"lit": "24hr",
									},
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
								"parts": []any{
									"api",
									"v3",
									"ticker",
									"24hr",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
