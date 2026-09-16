# MarketData SDK configuration

module MarketDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "MarketData",
        "slug" => "market-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://data-api.binance.vision",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "market_data" => {},
        },
      },
      "entity" => {
        "market_data" => {
          "fields" => [
            {
              "name" => "askPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "askQty",
              "type" => "`$STRING`",
            },
            {
              "name" => "bidPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "bidQty",
              "type" => "`$STRING`",
            },
            {
              "name" => "closeTime",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "firstId",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "highPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastId",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "lastPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastQty",
              "type" => "`$STRING`",
            },
            {
              "name" => "lowPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "openPrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "openTime",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "prevClosePrice",
              "type" => "`$STRING`",
            },
            {
              "name" => "priceChange",
              "type" => "`$STRING`",
            },
            {
              "name" => "priceChangePercent",
              "type" => "`$STRING`",
            },
            {
              "name" => "quoteVolume",
              "type" => "`$STRING`",
            },
            {
              "name" => "symbol",
              "type" => "`$STRING`",
            },
            {
              "name" => "volume",
              "type" => "`$STRING`",
            },
            {
              "name" => "weightedAvgPrice",
              "type" => "`$STRING`",
            },
          ],
          "name" => "market_data",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "BTCUSDT",
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "[\"BTCUSDT\",\"ETHUSDT\"]",
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "FULL",
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v3/ticker/24hr",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v3",
                    },
                    {
                      "lit" => "ticker",
                    },
                    {
                      "lit" => "24hr",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "symbol",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "v3",
                    "ticker",
                    "24hr",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MarketDataFeatures.make_feature(name)
  end
end
