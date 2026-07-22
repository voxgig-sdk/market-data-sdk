package voxgigmarketdatasdk

import (
	"github.com/voxgig-sdk/market-data-sdk/go/core"
	"github.com/voxgig-sdk/market-data-sdk/go/entity"
	"github.com/voxgig-sdk/market-data-sdk/go/feature"
	_ "github.com/voxgig-sdk/market-data-sdk/go/utility"
)

// Type aliases preserve external API.
type MarketDataSDK = core.MarketDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MarketDataEntity = core.MarketDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MarketDataError = core.MarketDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMarketDataEntityFunc = func(client *core.MarketDataSDK, entopts map[string]any) core.MarketDataEntity {
		return entity.NewMarketDataEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMarketDataSDK = core.NewMarketDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMarketDataSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MarketDataSDK  { return NewMarketDataSDK(nil) }
func Test() *MarketDataSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
