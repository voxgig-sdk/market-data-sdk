# MarketData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MarketDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      MarketDataBaseFeature.new
    when "test"
      MarketDataTestFeature.new
    else
      MarketDataBaseFeature.new
    end
  end
end
