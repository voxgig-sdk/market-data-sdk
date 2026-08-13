# MarketData SDK feature factory

from marketdata_sdk.feature.base_feature import MarketDataBaseFeature
from marketdata_sdk.feature.test_feature import MarketDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MarketDataBaseFeature(),
        "test": lambda: MarketDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
