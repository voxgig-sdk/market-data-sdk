<?php
declare(strict_types=1);

// MarketData SDK configuration

class MarketDataConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MarketData",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://data-api.binance.vision",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "market_data" => [],
                ],
            ],
            "entity" => [
        'market_data' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'askPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'askQty',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'bidPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'bidQty',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'closeTime',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'count',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'firstId',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'highPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'lastId',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'lastPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'lastQty',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'lowPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'openPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'openTime',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'prevClosePrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'priceChange',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'priceChangePercent',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'quoteVolume',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'symbol',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'volume',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'weightedAvgPrice',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
          ],
          'name' => 'market_data',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'BTCUSDT',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '["BTCUSDT","ETHUSDT"]',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'FULL',
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/ticker/24hr',
                  'parts' => [
                    'api',
                    'v3',
                    'ticker',
                    '24hr',
                  ],
                  'select' => [
                    'exist' => [
                      'symbol',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MarketDataFeatures::make_feature($name);
    }
}
