
import { Context } from './Context'


class MarketDataError extends Error {

  isMarketDataError = true

  sdk = 'MarketData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MarketDataError
}

