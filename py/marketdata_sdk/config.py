# MarketData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MarketData",
            "slug": "market-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://data-api.binance.vision",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "market_data": {},
            },
        },
        "entity": {
      "market_data": {
        "fields": [
          {
            "name": "askPrice",
            "type": "`$STRING`",
          },
          {
            "name": "askQty",
            "type": "`$STRING`",
          },
          {
            "name": "bidPrice",
            "type": "`$STRING`",
          },
          {
            "name": "bidQty",
            "type": "`$STRING`",
          },
          {
            "name": "closeTime",
            "type": "`$INTEGER`",
          },
          {
            "name": "count",
            "type": "`$INTEGER`",
          },
          {
            "name": "firstId",
            "type": "`$INTEGER`",
          },
          {
            "name": "highPrice",
            "type": "`$STRING`",
          },
          {
            "name": "lastId",
            "type": "`$INTEGER`",
          },
          {
            "name": "lastPrice",
            "type": "`$STRING`",
          },
          {
            "name": "lastQty",
            "type": "`$STRING`",
          },
          {
            "name": "lowPrice",
            "type": "`$STRING`",
          },
          {
            "name": "openPrice",
            "type": "`$STRING`",
          },
          {
            "name": "openTime",
            "type": "`$INTEGER`",
          },
          {
            "name": "prevClosePrice",
            "type": "`$STRING`",
          },
          {
            "name": "priceChange",
            "type": "`$STRING`",
          },
          {
            "name": "priceChangePercent",
            "type": "`$STRING`",
          },
          {
            "name": "quoteVolume",
            "type": "`$STRING`",
          },
          {
            "name": "symbol",
            "type": "`$STRING`",
          },
          {
            "name": "volume",
            "type": "`$STRING`",
          },
          {
            "name": "weightedAvgPrice",
            "type": "`$STRING`",
          },
        ],
        "name": "market_data",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "BTCUSDT",
                      "kind": "query",
                      "name": "symbol",
                      "orig": "symbol",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "[\"BTCUSDT\",\"ETHUSDT\"]",
                      "kind": "query",
                      "name": "symbol",
                      "orig": "symbol",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "FULL",
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/ticker/24hr",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "v3",
                  },
                  {
                    "lit": "ticker",
                  },
                  {
                    "lit": "24hr",
                  },
                ],
                "select": {
                  "exist": [
                    "symbol",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "v3",
                  "ticker",
                  "24hr",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
