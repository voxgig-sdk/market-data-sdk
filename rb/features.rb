# MarketData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MarketDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      MarketDataBaseFeature.new
    when "ratelimit"
      MarketDataRatelimitFeature.new
    when "retry"
      MarketDataRetryFeature.new
    when "test"
      MarketDataTestFeature.new
    when "timeout"
      MarketDataTimeoutFeature.new
    else
      MarketDataBaseFeature.new
    end
  end
end
