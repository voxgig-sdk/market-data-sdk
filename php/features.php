<?php
declare(strict_types=1);

// MarketData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MarketDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MarketDataBaseFeature();
            case "test":
                return new MarketDataTestFeature();
            default:
                return new MarketDataBaseFeature();
        }
    }
}
