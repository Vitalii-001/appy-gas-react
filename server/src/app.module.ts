import { Module } from '@nestjs/common';
import { HubPricesModule } from './hub-prices/hub-prices.module';

@Module({
  imports: [HubPricesModule]
})
export class AppModule {}
