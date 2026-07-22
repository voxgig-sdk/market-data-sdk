# MarketData Python SDK Reference

Complete API reference for the MarketData Python SDK.


## MarketDataSDK

### Constructor

```python
from marketdata_sdk import MarketDataSDK

client = MarketDataSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MarketDataSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MarketDataSDK.test()
```


### Instance Methods

#### `MarketData(data=None)`

Create a new `MarketDataEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## MarketDataEntity

```python
market_data = client.MarketData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ask_price` | `str` | No |  |
| `ask_qty` | `str` | No |  |
| `bid_price` | `str` | No |  |
| `bid_qty` | `str` | No |  |
| `close_time` | `int` | No |  |
| `count` | `int` | No |  |
| `first_id` | `int` | No |  |
| `high_price` | `str` | No |  |
| `last_id` | `int` | No |  |
| `last_price` | `str` | No |  |
| `last_qty` | `str` | No |  |
| `low_price` | `str` | No |  |
| `open_price` | `str` | No |  |
| `open_time` | `int` | No |  |
| `prev_close_price` | `str` | No |  |
| `price_change` | `str` | No |  |
| `price_change_percent` | `str` | No |  |
| `quote_volume` | `str` | No |  |
| `symbol` | `str` | No |  |
| `volume` | `str` | No |  |
| `weighted_avg_price` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MarketData().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MarketDataSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

