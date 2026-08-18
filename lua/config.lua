-- MarketData SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "MarketData",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://data-api.binance.vision",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["market_data"] = {},
      },
    },
    entity = {
      ["market_data"] = {
        ["fields"] = {
          {
            ["name"] = "askPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "askQty",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "bidPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "bidQty",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "closeTime",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "firstId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "highPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastId",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "lastPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastQty",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lowPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "openPrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "openTime",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "prevClosePrice",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "priceChange",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "priceChangePercent",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quoteVolume",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "symbol",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "volume",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weightedAvgPrice",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "market_data",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "BTCUSDT",
                      ["kind"] = "query",
                      ["name"] = "symbol",
                      ["orig"] = "symbol",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "[\"BTCUSDT\",\"ETHUSDT\"]",
                      ["kind"] = "query",
                      ["name"] = "symbol",
                      ["orig"] = "symbol",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "FULL",
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/v3/ticker/24hr",
                ["parts"] = {
                  "api",
                  "v3",
                  "ticker",
                  "24hr",
                },
                ["select"] = {
                  ["exist"] = {
                    "symbol",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
