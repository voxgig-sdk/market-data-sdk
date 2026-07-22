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
# @!attribute [rw] ask_price
#   @return [String, nil]
#
# @!attribute [rw] ask_qty
#   @return [String, nil]
#
# @!attribute [rw] bid_price
#   @return [String, nil]
#
# @!attribute [rw] bid_qty
#   @return [String, nil]
#
# @!attribute [rw] close_time
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] first_id
#   @return [Integer, nil]
#
# @!attribute [rw] high_price
#   @return [String, nil]
#
# @!attribute [rw] last_id
#   @return [Integer, nil]
#
# @!attribute [rw] last_price
#   @return [String, nil]
#
# @!attribute [rw] last_qty
#   @return [String, nil]
#
# @!attribute [rw] low_price
#   @return [String, nil]
#
# @!attribute [rw] open_price
#   @return [String, nil]
#
# @!attribute [rw] open_time
#   @return [Integer, nil]
#
# @!attribute [rw] prev_close_price
#   @return [String, nil]
#
# @!attribute [rw] price_change
#   @return [String, nil]
#
# @!attribute [rw] price_change_percent
#   @return [String, nil]
#
# @!attribute [rw] quote_volume
#   @return [String, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] volume
#   @return [String, nil]
#
# @!attribute [rw] weighted_avg_price
#   @return [String, nil]
MarketData = Struct.new(
  :ask_price,
  :ask_qty,
  :bid_price,
  :bid_qty,
  :close_time,
  :count,
  :first_id,
  :high_price,
  :last_id,
  :last_price,
  :last_qty,
  :low_price,
  :open_price,
  :open_time,
  :prev_close_price,
  :price_change,
  :price_change_percent,
  :quote_volume,
  :symbol,
  :volume,
  :weighted_avg_price,
  keyword_init: true
)

# Request payload for MarketData#load.
#
# @!attribute [rw] ask_price
#   @return [String, nil]
#
# @!attribute [rw] ask_qty
#   @return [String, nil]
#
# @!attribute [rw] bid_price
#   @return [String, nil]
#
# @!attribute [rw] bid_qty
#   @return [String, nil]
#
# @!attribute [rw] close_time
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] first_id
#   @return [Integer, nil]
#
# @!attribute [rw] high_price
#   @return [String, nil]
#
# @!attribute [rw] last_id
#   @return [Integer, nil]
#
# @!attribute [rw] last_price
#   @return [String, nil]
#
# @!attribute [rw] last_qty
#   @return [String, nil]
#
# @!attribute [rw] low_price
#   @return [String, nil]
#
# @!attribute [rw] open_price
#   @return [String, nil]
#
# @!attribute [rw] open_time
#   @return [Integer, nil]
#
# @!attribute [rw] prev_close_price
#   @return [String, nil]
#
# @!attribute [rw] price_change
#   @return [String, nil]
#
# @!attribute [rw] price_change_percent
#   @return [String, nil]
#
# @!attribute [rw] quote_volume
#   @return [String, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] volume
#   @return [String, nil]
#
# @!attribute [rw] weighted_avg_price
#   @return [String, nil]
MarketDataLoadMatch = Struct.new(
  :ask_price,
  :ask_qty,
  :bid_price,
  :bid_qty,
  :close_time,
  :count,
  :first_id,
  :high_price,
  :last_id,
  :last_price,
  :last_qty,
  :low_price,
  :open_price,
  :open_time,
  :prev_close_price,
  :price_change,
  :price_change_percent,
  :quote_volume,
  :symbol,
  :volume,
  :weighted_avg_price,
  keyword_init: true
)

