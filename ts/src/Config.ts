
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MarketData',
        slug: "market-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://data-api.binance.vision",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      market_data: {
      },

    }
  }


  entity = {
    "market_data": {
      "fields": [
        {
          "name": "askPrice",
          "type": "`$STRING`"
        },
        {
          "name": "askQty",
          "type": "`$STRING`"
        },
        {
          "name": "bidPrice",
          "type": "`$STRING`"
        },
        {
          "name": "bidQty",
          "type": "`$STRING`"
        },
        {
          "name": "closeTime",
          "type": "`$INTEGER`"
        },
        {
          "name": "count",
          "type": "`$INTEGER`"
        },
        {
          "name": "firstId",
          "type": "`$INTEGER`"
        },
        {
          "name": "highPrice",
          "type": "`$STRING`"
        },
        {
          "name": "lastId",
          "type": "`$INTEGER`"
        },
        {
          "name": "lastPrice",
          "type": "`$STRING`"
        },
        {
          "name": "lastQty",
          "type": "`$STRING`"
        },
        {
          "name": "lowPrice",
          "type": "`$STRING`"
        },
        {
          "name": "openPrice",
          "type": "`$STRING`"
        },
        {
          "name": "openTime",
          "type": "`$INTEGER`"
        },
        {
          "name": "prevClosePrice",
          "type": "`$STRING`"
        },
        {
          "name": "priceChange",
          "type": "`$STRING`"
        },
        {
          "name": "priceChangePercent",
          "type": "`$STRING`"
        },
        {
          "name": "quoteVolume",
          "type": "`$STRING`"
        },
        {
          "name": "symbol",
          "type": "`$STRING`"
        },
        {
          "name": "volume",
          "type": "`$STRING`"
        },
        {
          "name": "weightedAvgPrice",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "[\"BTCUSDT\",\"ETHUSDT\"]",
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "FULL",
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/ticker/24hr",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "ticker"
                },
                {
                  "lit": "24hr"
                }
              ],
              "select": {
                "exist": [
                  "symbol",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "ticker",
                "24hr"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

