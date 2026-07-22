<?php
declare(strict_types=1);

// MarketData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MarketDataMakeContext
{
    public static function call(array $ctxmap, ?MarketDataContext $basectx): MarketDataContext
    {
        return new MarketDataContext($ctxmap, $basectx);
    }
}
