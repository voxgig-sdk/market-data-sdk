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
    public ?string $askPrice = null;
    public ?string $askQty = null;
    public ?string $bidPrice = null;
    public ?string $bidQty = null;
    public ?int $closeTime = null;
    public ?int $count = null;
    public ?int $firstId = null;
    public ?string $highPrice = null;
    public ?int $lastId = null;
    public ?string $lastPrice = null;
    public ?string $lastQty = null;
    public ?string $lowPrice = null;
    public ?string $openPrice = null;
    public ?int $openTime = null;
    public ?string $prevClosePrice = null;
    public ?string $priceChange = null;
    public ?string $priceChangePercent = null;
    public ?string $quoteVolume = null;
    public ?string $symbol = null;
    public ?string $volume = null;
    public ?string $weightedAvgPrice = null;
}

/** Request payload for MarketData#load. */
class MarketDataLoadMatch
{
    public ?string $askPrice = null;
    public ?string $askQty = null;
    public ?string $bidPrice = null;
    public ?string $bidQty = null;
    public ?int $closeTime = null;
    public ?int $count = null;
    public ?int $firstId = null;
    public ?string $highPrice = null;
    public ?int $lastId = null;
    public ?string $lastPrice = null;
    public ?string $lastQty = null;
    public ?string $lowPrice = null;
    public ?string $openPrice = null;
    public ?int $openTime = null;
    public ?string $prevClosePrice = null;
    public ?string $priceChange = null;
    public ?string $priceChangePercent = null;
    public ?string $quoteVolume = null;
    public ?string $symbol = null;
    public ?string $volume = null;
    public ?string $weightedAvgPrice = null;
}

