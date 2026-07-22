<?php
declare(strict_types=1);

// MarketData SDK utility: result_headers

class MarketDataResultHeaders
{
    public static function call(MarketDataContext $ctx): ?MarketDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
