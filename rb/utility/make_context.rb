# MarketData SDK utility: make_context
require_relative '../core/context'
module MarketDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    MarketDataContext.new(ctxmap, basectx)
  }
end
