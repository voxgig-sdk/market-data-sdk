-- MarketData SDK exists test

local sdk = require("market-data_sdk")

describe("MarketDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
