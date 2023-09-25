import { Module } from '@nestjs/common';

import { HubPricesController } from './hub-prices.controller';
import { HubPricesService } from './hub-prices.service';

@Module({
    controllers: [
        HubPricesController
    ],
    providers: [HubPricesService]
})
export class HubPricesModule {}
