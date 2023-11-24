import { Controller, Get, Query } from '@nestjs/common';

import { HubPricesService } from './hub-prices.service';
import { settlementPeriodEnum } from 'src/shared/enums/settlementPeriod.enum';

@Controller()
export class HubPricesController {
  constructor(private readonly hubPricesService: HubPricesService) {}

  @Get('hubPrices')
  hubPrices(@Query('settlementPeriod') settlementPeriod: settlementPeriodEnum): any[] {
    return this.hubPricesService.getHubPrices(settlementPeriod);
  }
}
