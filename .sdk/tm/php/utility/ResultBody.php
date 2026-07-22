<?php
declare(strict_types=1);

// MarketData SDK utility: result_body

class MarketDataResultBody
{
    public static function call(MarketDataContext $ctx): ?MarketDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
