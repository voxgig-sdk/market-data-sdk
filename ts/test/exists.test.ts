
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MarketDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MarketDataSDK.test()
    equal(null !== testsdk, true)
  })

})
