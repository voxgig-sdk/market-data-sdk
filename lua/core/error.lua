-- MarketData SDK error

local MarketDataError = {}
MarketDataError.__index = MarketDataError


function MarketDataError.new(code, msg, ctx)
  local self = setmetatable({}, MarketDataError)
  self.is_sdk_error = true
  self.sdk = "MarketData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MarketDataError:error()
  return self.msg
end


function MarketDataError:__tostring()
  return self.msg
end


return MarketDataError
