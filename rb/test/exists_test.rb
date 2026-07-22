# MarketData SDK exists test

require "minitest/autorun"
require_relative "../MarketData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MarketDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
