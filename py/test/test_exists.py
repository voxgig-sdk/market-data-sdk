# MarketData SDK exists test

import pytest
from marketdata_sdk import MarketDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MarketDataSDK.test(None, None)
        assert testsdk is not None
