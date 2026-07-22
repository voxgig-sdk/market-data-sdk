<?php
declare(strict_types=1);

// Typed models for the MarketData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** MarketData entity data model. */
class MarketData
{
    public ?string $ask_price = null;
    public ?string $ask_qty = null;
    public ?string $bid_price = null;
    public ?string $bid_qty = null;
    public ?int $close_time = null;
    public ?int $count = null;
    public ?int $first_id = null;
    public ?string $high_price = null;
    public ?int $last_id = null;
    public ?string $last_price = null;
    public ?string $last_qty = null;
    public ?string $low_price = null;
    public ?string $open_price = null;
    public ?int $open_time = null;
    public ?string $prev_close_price = null;
    public ?string $price_change = null;
    public ?string $price_change_percent = null;
    public ?string $quote_volume = null;
    public ?string $symbol = null;
    public ?string $volume = null;
    public ?string $weighted_avg_price = null;
}

/** Request payload for MarketData#load. */
class MarketDataLoadMatch
{
    public ?string $ask_price = null;
    public ?string $ask_qty = null;
    public ?string $bid_price = null;
    public ?string $bid_qty = null;
    public ?int $close_time = null;
    public ?int $count = null;
    public ?int $first_id = null;
    public ?string $high_price = null;
    public ?int $last_id = null;
    public ?string $last_price = null;
    public ?string $last_qty = null;
    public ?string $low_price = null;
    public ?string $open_price = null;
    public ?int $open_time = null;
    public ?string $prev_close_price = null;
    public ?string $price_change = null;
    public ?string $price_change_percent = null;
    public ?string $quote_volume = null;
    public ?string $symbol = null;
    public ?string $volume = null;
    public ?string $weighted_avg_price = null;
}

