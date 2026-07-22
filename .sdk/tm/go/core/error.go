package core

type MarketDataError struct {
	IsMarketDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMarketDataError(code string, msg string, ctx *Context) *MarketDataError {
	return &MarketDataError{
		IsMarketDataError: true,
		Sdk:              "MarketData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MarketDataError) Error() string {
	return e.Msg
}
