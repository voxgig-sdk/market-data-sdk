import { MarketDataEntityBase } from '../MarketDataEntityBase';
import type { MarketDataSDK } from '../MarketDataSDK';
import type { Control } from '../types';
import type { MarketData, MarketDataLoadMatch } from '../MarketDataTypes';
declare class MarketDataEntity extends MarketDataEntityBase<MarketData> {
    constructor(client: MarketDataSDK, entopts: any);
    make(this: MarketDataEntity): MarketDataEntity;
    load(this: any, reqmatch?: MarketDataLoadMatch, ctrl?: Control): Promise<MarketDataEntity>;
}
export { MarketDataEntity };
