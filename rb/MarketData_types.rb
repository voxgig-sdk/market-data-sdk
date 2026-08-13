# frozen_string_literal: true

# Typed models for the MarketData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# MarketData entity data model.
#
# @!attribute [rw] askPrice
#   @return [String, nil]
#
# @!attribute [rw] askQty
#   @return [String, nil]
#
# @!attribute [rw] bidPrice
#   @return [String, nil]
#
# @!attribute [rw] bidQty
#   @return [String, nil]
#
# @!attribute [rw] closeTime
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] firstId
#   @return [Integer, nil]
#
# @!attribute [rw] highPrice
#   @return [String, nil]
#
# @!attribute [rw] lastId
#   @return [Integer, nil]
#
# @!attribute [rw] lastPrice
#   @return [String, nil]
#
# @!attribute [rw] lastQty
#   @return [String, nil]
#
# @!attribute [rw] lowPrice
#   @return [String, nil]
#
# @!attribute [rw] openPrice
#   @return [String, nil]
#
# @!attribute [rw] openTime
#   @return [Integer, nil]
#
# @!attribute [rw] prevClosePrice
#   @return [String, nil]
#
# @!attribute [rw] priceChange
#   @return [String, nil]
#
# @!attribute [rw] priceChangePercent
#   @return [String, nil]
#
# @!attribute [rw] quoteVolume
#   @return [String, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] volume
#   @return [String, nil]
#
# @!attribute [rw] weightedAvgPrice
#   @return [String, nil]
MarketData = Struct.new(
  :askPrice,
  :askQty,
  :bidPrice,
  :bidQty,
  :closeTime,
  :count,
  :firstId,
  :highPrice,
  :lastId,
  :lastPrice,
  :lastQty,
  :lowPrice,
  :openPrice,
  :openTime,
  :prevClosePrice,
  :priceChange,
  :priceChangePercent,
  :quoteVolume,
  :symbol,
  :volume,
  :weightedAvgPrice,
  keyword_init: true
)

# Request payload for MarketData#load.
#
# @!attribute [rw] askPrice
#   @return [String, nil]
#
# @!attribute [rw] askQty
#   @return [String, nil]
#
# @!attribute [rw] bidPrice
#   @return [String, nil]
#
# @!attribute [rw] bidQty
#   @return [String, nil]
#
# @!attribute [rw] closeTime
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] firstId
#   @return [Integer, nil]
#
# @!attribute [rw] highPrice
#   @return [String, nil]
#
# @!attribute [rw] lastId
#   @return [Integer, nil]
#
# @!attribute [rw] lastPrice
#   @return [String, nil]
#
# @!attribute [rw] lastQty
#   @return [String, nil]
#
# @!attribute [rw] lowPrice
#   @return [String, nil]
#
# @!attribute [rw] openPrice
#   @return [String, nil]
#
# @!attribute [rw] openTime
#   @return [Integer, nil]
#
# @!attribute [rw] prevClosePrice
#   @return [String, nil]
#
# @!attribute [rw] priceChange
#   @return [String, nil]
#
# @!attribute [rw] priceChangePercent
#   @return [String, nil]
#
# @!attribute [rw] quoteVolume
#   @return [String, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] volume
#   @return [String, nil]
#
# @!attribute [rw] weightedAvgPrice
#   @return [String, nil]
MarketDataLoadMatch = Struct.new(
  :askPrice,
  :askQty,
  :bidPrice,
  :bidQty,
  :closeTime,
  :count,
  :firstId,
  :highPrice,
  :lastId,
  :lastPrice,
  :lastQty,
  :lowPrice,
  :openPrice,
  :openTime,
  :prevClosePrice,
  :priceChange,
  :priceChangePercent,
  :quoteVolume,
  :symbol,
  :volume,
  :weightedAvgPrice,
  keyword_init: true
)

