

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MarketDataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MarketDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MARKET_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('MARKET_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MarketDataSDK.test()
    const ent = testsdk.MarketData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MARKET_DATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'market_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"askPrice","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"askQty","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"bidPrice","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"bidQty","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"closeTime","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"count","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"firstId","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"highPrice","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"lastId","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"lastPrice","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"lastQty","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"lowPrice","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"openPrice","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"openTime","req":false,"type":"`$INTEGER`","index$":13},{"active":true,"name":"prevClosePrice","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"priceChange","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"priceChangePercent","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"quoteVolume","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"symbol","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"volume","req":false,"type":"`$STRING`","index$":19},{"active":true,"name":"weightedAvgPrice","req":false,"type":"`$STRING`","index$":20}],"name":"market_data","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"BTCUSDT","kind":"query","name":"symbol","orig":"symbol","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"[\"BTCUSDT\",\"ETHUSDT\"]","kind":"query","name":"symbol","orig":"symbol","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"FULL","kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v3/ticker/24hr","json":"{\"operationId\":\"getListTickers\",\"parameters\":[{\"description\":\"Trading pair symbol (e.g., BTCUSDT). If omitted, returns data for all symbols.\",\"in\":\"query\",\"name\":\"symbol\",\"required\":false,\"schema\":{\"example\":\"BTCUSDT\",\"type\":\"string\"}},{\"description\":\"Array of trading pair symbols as JSON string. Cannot be used with symbol parameter.\",\"in\":\"query\",\"name\":\"symbols\",\"required\":false,\"schema\":{\"example\":\"[\\\"BTCUSDT\\\",\\\"ETHUSDT\\\"]\",\"type\":\"string\"}},{\"description\":\"Ticker type (FULL or MINI). Defaults to FULL.\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"default\":\"FULL\",\"enum\":[\"FULL\",\"MINI\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"multipleSymbols\":{\"summary\":\"Multiple symbols response\",\"value\":[{\"askPrice\":\"4.00000200\",\"askQty\":\"100.00000000\",\"bidPrice\":\"4.00000000\",\"bidQty\":\"100.00000000\",\"closeTime\":1499869899040,\"count\":76,\"firstId\":28385,\"highPrice\":\"100.00000000\",\"lastId\":28460,\"lastPrice\":\"4.00000200\",\"lastQty\":\"200.00000000\",\"lowPrice\":\"0.10000000\",\"openPrice\":\"99.00000000\",\"openTime\":1499783499040,\"prevClosePrice\":\"0.10002000\",\"priceChange\":\"-94.99999800\",\"priceChangePercent\":\"-95.960\",\"quoteVolume\":\"15.30000000\",\"symbol\":\"BTCUSDT\",\"volume\":\"8913.30000000\",\"weightedAvgPrice\":\"0.29628482\"}]},\"singleSymbol\":{\"summary\":\"Single symbol response\",\"value\":{\"askPrice\":\"4.00000200\",\"askQty\":\"100.00000000\",\"bidPrice\":\"4.00000000\",\"bidQty\":\"100.00000000\",\"closeTime\":1499869899040,\"count\":76,\"firstId\":28385,\"highPrice\":\"100.00000000\",\"lastId\":28460,\"lastPrice\":\"4.00000200\",\"lastQty\":\"200.00000000\",\"lowPrice\":\"0.10000000\",\"openPrice\":\"99.00000000\",\"openTime\":1499783499040,\"prevClosePrice\":\"0.10002000\",\"priceChange\":\"-94.99999800\",\"priceChangePercent\":\"-95.960\",\"quoteVolume\":\"15.30000000\",\"symbol\":\"BTCUSDT\",\"volume\":\"8913.30000000\",\"weightedAvgPrice\":\"0.29628482\"}}},\"schema\":{\"oneOf\":[{\"items\":{\"description\":\"24-hour ticker price change statistics\",\"properties\":{\"askPrice\":{\"description\":\"Best ask price\",\"example\":\"4.00000200\",\"type\":\"string\"},\"askQty\":{\"description\":\"Best ask quantity\",\"example\":\"100.00000000\",\"type\":\"string\"},\"bidPrice\":{\"description\":\"Best bid price\",\"example\":\"4.00000000\",\"type\":\"string\"},\"bidQty\":{\"description\":\"Best bid quantity\",\"example\":\"100.00000000\",\"type\":\"string\"},\"closeTime\":{\"description\":\"Closing time timestamp (milliseconds)\",\"example\":1499869899040,\"format\":\"int64\",\"type\":\"integer\"},\"count\":{\"description\":\"Number of trades in the last 24 hours\",\"example\":76,\"format\":\"int32\",\"type\":\"integer\"},\"firstId\":{\"description\":\"First trade ID\",\"example\":28385,\"format\":\"int64\",\"type\":\"integer\"},\"highPrice\":{\"description\":\"Highest price in the last 24 hours\",\"example\":\"100.00000000\",\"type\":\"string\"},\"lastId\":{\"description\":\"Last trade ID\",\"example\":28460,\"format\":\"int64\",\"type\":\"integer\"},\"lastPrice\":{\"description\":\"Last traded price\",\"example\":\"4.00000200\",\"type\":\"string\"},\"lastQty\":{\"description\":\"Last traded quantity\",\"example\":\"200.00000000\",\"type\":\"string\"},\"lowPrice\":{\"description\":\"Lowest price in the last 24 hours\",\"example\":\"0.10000000\",\"type\":\"string\"},\"openPrice\":{\"description\":\"Opening price 24 hours ago\",\"example\":\"99.00000000\",\"type\":\"string\"},\"openTime\":{\"description\":\"Opening time timestamp (milliseconds)\",\"example\":1499783499040,\"format\":\"int64\",\"type\":\"integer\"},\"prevClosePrice\":{\"description\":\"Previous day's close price\",\"example\":\"0.10002000\",\"type\":\"string\"},\"priceChange\":{\"description\":\"Absolute price change in the last 24 hours\",\"example\":\"-94.99999800\",\"type\":\"string\"},\"priceChangePercent\":{\"description\":\"Percentage price change in the last 24 hours\",\"example\":\"-95.960\",\"type\":\"string\"},\"quoteVolume\":{\"description\":\"Total trading volume in quote asset\",\"example\":\"15.30000000\",\"type\":\"string\"},\"symbol\":{\"description\":\"Trading pair symbol\",\"example\":\"BTCUSDT\",\"type\":\"string\"},\"volume\":{\"description\":\"Total trading volume in base asset\",\"example\":\"8913.30000000\",\"type\":\"string\"},\"weightedAvgPrice\":{\"description\":\"Weighted average price over the last 24 hours\",\"example\":\"0.29628482\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},{\"description\":\"24-hour ticker price change statistics\",\"properties\":{\"askPrice\":{\"description\":\"Best ask price\",\"example\":\"4.00000200\",\"type\":\"string\"},\"askQty\":{\"description\":\"Best ask quantity\",\"example\":\"100.00000000\",\"type\":\"string\"},\"bidPrice\":{\"description\":\"Best bid price\",\"example\":\"4.00000000\",\"type\":\"string\"},\"bidQty\":{\"description\":\"Best bid quantity\",\"example\":\"100.00000000\",\"type\":\"string\"},\"closeTime\":{\"description\":\"Closing time timestamp (milliseconds)\",\"example\":1499869899040,\"format\":\"int64\",\"type\":\"integer\"},\"count\":{\"description\":\"Number of trades in the last 24 hours\",\"example\":76,\"format\":\"int32\",\"type\":\"integer\"},\"firstId\":{\"description\":\"First trade ID\",\"example\":28385,\"format\":\"int64\",\"type\":\"integer\"},\"highPrice\":{\"description\":\"Highest price in the last 24 hours\",\"example\":\"100.00000000\",\"type\":\"string\"},\"lastId\":{\"description\":\"Last trade ID\",\"example\":28460,\"format\":\"int64\",\"type\":\"integer\"},\"lastPrice\":{\"description\":\"Last traded price\",\"example\":\"4.00000200\",\"type\":\"string\"},\"lastQty\":{\"description\":\"Last traded quantity\",\"example\":\"200.00000000\",\"type\":\"string\"},\"lowPrice\":{\"description\":\"Lowest price in the last 24 hours\",\"example\":\"0.10000000\",\"type\":\"string\"},\"openPrice\":{\"description\":\"Opening price 24 hours ago\",\"example\":\"99.00000000\",\"type\":\"string\"},\"openTime\":{\"description\":\"Opening time timestamp (milliseconds)\",\"example\":1499783499040,\"format\":\"int64\",\"type\":\"integer\"},\"prevClosePrice\":{\"description\":\"Previous day's close price\",\"example\":\"0.10002000\",\"type\":\"string\"},\"priceChange\":{\"description\":\"Absolute price change in the last 24 hours\",\"example\":\"-94.99999800\",\"type\":\"string\"},\"priceChangePercent\":{\"description\":\"Percentage price change in the last 24 hours\",\"example\":\"-95.960\",\"type\":\"string\"},\"quoteVolume\":{\"description\":\"Total trading volume in quote asset\",\"example\":\"15.30000000\",\"type\":\"string\"},\"symbol\":{\"description\":\"Trading pair symbol\",\"example\":\"BTCUSDT\",\"type\":\"string\"},\"volume\":{\"description\":\"Total trading volume in base asset\",\"example\":\"8913.30000000\",\"type\":\"string\"},\"weightedAvgPrice\":{\"description\":\"Weighted average price over the last 24 hours\",\"example\":\"0.29628482\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Successful response with 24-hour ticker statistics\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error response object\",\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":-1100,\"type\":\"integer\"},\"msg\":{\"description\":\"Error message\",\"example\":\"Invalid parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error response object\",\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":-1100,\"type\":\"integer\"},\"msg\":{\"description\":\"Error message\",\"example\":\"Invalid parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Error response object\",\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":-1100,\"type\":\"integer\"},\"msg\":{\"description\":\"Error message\",\"example\":\"Invalid parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/ticker/24hr","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"ticker"},{"lit":"24hr"}],"select":{"exist":["symbol","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"market_data","name__orig":"market_data","Name":"MarketData","name_":"market_data","name-":"market-data","NAME":"MARKET_DATA","index$":0}, {"active":true,"entity":"market_data","key$":"BasicMarketDataFlow","kind":"basic","name":"BasicMarketDataFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"market_data_ref01","srcdatavar":"market_data_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-market_data_ref01"}}],"index$":0}]}, 'MarketData')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let market_data_ref01_data = Object.values(setup.data.existing.market_data)[0] as any

    // LOAD
    const market_data_ref01_ent = client.MarketData()
    const market_data_ref01_match_dt0: any = {}
    const market_data_ref01_data_dt0 = (await market_data_ref01_ent.load(market_data_ref01_match_dt0)).data()
    assert(null != market_data_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/market_data/MarketDataTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MarketDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['market_data01','market_data02','market_data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MARKET_DATA_TEST_MARKET_DATA_ENTID': idmap,
    'MARKET_DATA_TEST_LIVE': 'FALSE',
    'MARKET_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MARKET_DATA_TEST_MARKET_DATA_ENTID']

  const live = 'TRUE' === env.MARKET_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MARKET_DATA_TEST_MARKET_DATA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MarketDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MARKET_DATA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
