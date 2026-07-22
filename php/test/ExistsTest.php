<?php
declare(strict_types=1);

// MarketData SDK exists test

require_once __DIR__ . '/../marketdata_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MarketDataSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
