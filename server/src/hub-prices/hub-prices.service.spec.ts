import { Test, TestingModule } from '@nestjs/testing';
import { HubPricesService } from './hub-prices.service';
import { settlemntPeriodEnum } from 'src/shared/enums/settlementPeriod.enum';

describe('HubPricesService', () => {
  let service: HubPricesService;

  beforeEach(async () => {
    service = new HubPricesService();
  });

  it('should return hub prices', () => {
    expect(service.getHubPrices(settlemntPeriodEnum.DA)).toMatchObject([
      2, 3, 4
    ]);
  });
});
