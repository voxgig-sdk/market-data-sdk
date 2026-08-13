# Typed models for the MarketData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class MarketData(TypedDict, total=False):
    askPrice: str
    askQty: str
    bidPrice: str
    bidQty: str
    closeTime: int
    count: int
    firstId: int
    highPrice: str
    lastId: int
    lastPrice: str
    lastQty: str
    lowPrice: str
    openPrice: str
    openTime: int
    prevClosePrice: str
    priceChange: str
    priceChangePercent: str
    quoteVolume: str
    symbol: str
    volume: str
    weightedAvgPrice: str


class MarketDataLoadMatch(TypedDict, total=False):
    askPrice: str
    askQty: str
    bidPrice: str
    bidQty: str
    closeTime: int
    count: int
    firstId: int
    highPrice: str
    lastId: int
    lastPrice: str
    lastQty: str
    lowPrice: str
    openPrice: str
    openTime: int
    prevClosePrice: str
    priceChange: str
    priceChangePercent: str
    quoteVolume: str
    symbol: str
    volume: str
    weightedAvgPrice: str
