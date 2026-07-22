<?php
declare(strict_types=1);

// MarketData SDK utility: prepare_body

class MarketDataPrepareBody
{
    public static function call(MarketDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
