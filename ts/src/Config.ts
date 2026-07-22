
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://data-api.binance.vision',

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
          "active": true,
          "name": "ask_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "ask_qty",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "bid_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "bid_qty",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "close_time",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "count",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "first_id",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 6
        },
        {
          "active": true,
          "name": "high_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "last_id",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 8
        },
        {
          "active": true,
          "name": "last_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "last_qty",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "low_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "open_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "open_time",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 13
        },
        {
          "active": true,
          "name": "prev_close_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "price_change",
          "req": false,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "price_change_percent",
          "req": false,
          "type": "`$STRING`",
          "index$": 16
        },
        {
          "active": true,
          "name": "quote_volume",
          "req": false,
          "type": "`$STRING`",
          "index$": 17
        },
        {
          "active": true,
          "name": "symbol",
          "req": false,
          "type": "`$STRING`",
          "index$": 18
        },
        {
          "active": true,
          "name": "volume",
          "req": false,
          "type": "`$STRING`",
          "index$": 19
        },
        {
          "active": true,
          "name": "weighted_avg_price",
          "req": false,
          "type": "`$STRING`",
          "index$": 20
        }
      ],
      "name": "market_data",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "BTCUSDT",
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "[\"BTCUSDT\",\"ETHUSDT\"]",
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "FULL",
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/v3/ticker/24hr",
              "parts": [
                "api",
                "v3",
                "ticker",
                "24hr"
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
              "index$": 0
            }
          ],
          "key$": "load"
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
  config
}

