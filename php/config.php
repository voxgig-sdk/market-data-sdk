<?php
declare(strict_types=1);

// MarketData SDK configuration

class MarketDataConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MarketData",
                "slug" => "market-data",
                "version" => "0.0.1",
                "target" => "php",
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
              'name' => 'askPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'askQty',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'bidPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'bidQty',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'closeTime',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'firstId',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'highPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastId',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'lastPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastQty',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lowPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'openPrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'openTime',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'prevClosePrice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'priceChange',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'priceChangePercent',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quoteVolume',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'symbol',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'volume',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weightedAvgPrice',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'market_data',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'BTCUSDT',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '["BTCUSDT","ETHUSDT"]',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'FULL',
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
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
                ],
              ],
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
