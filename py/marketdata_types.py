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
    ask_price: str
    ask_qty: str
    bid_price: str
    bid_qty: str
    close_time: int
    count: int
    first_id: int
    high_price: str
    last_id: int
    last_price: str
    last_qty: str
    low_price: str
    open_price: str
    open_time: int
    prev_close_price: str
    price_change: str
    price_change_percent: str
    quote_volume: str
    symbol: str
    volume: str
    weighted_avg_price: str


class MarketDataLoadMatch(TypedDict, total=False):
    ask_price: str
    ask_qty: str
    bid_price: str
    bid_qty: str
    close_time: int
    count: int
    first_id: int
    high_price: str
    last_id: int
    last_price: str
    last_qty: str
    low_price: str
    open_price: str
    open_time: int
    prev_close_price: str
    price_change: str
    price_change_percent: str
    quote_volume: str
    symbol: str
    volume: str
    weighted_avg_price: str
