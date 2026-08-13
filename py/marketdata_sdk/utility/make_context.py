# MarketData SDK utility: make_context

from marketdata_sdk.core.context import MarketDataContext


def make_context_util(ctxmap, basectx):
    return MarketDataContext(ctxmap, basectx)
