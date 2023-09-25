import { Injectable } from '@nestjs/common';

import { settlementPeriodEnum } from 'src/shared/enums/settlementPeriod.enum';

@Injectable()
export class HubPricesService {
    public getHubPrices(settlemntPeriod: settlementPeriodEnum): any {
        const DAPrices = {
            NBP: [
                {date: 1672531200000, value: 160},
                {date: 1672534800000, value: 168},
                {date: 1672538400000, value: 145}
            ],
            TTF: [
                {date: 1672531200000, value: 158},
                {date: 1672534800000, value: 169},
                {date: 1672538400000, value: 172}
            ],
            AVTP: [
                {date: 1672531200000, value: 142},
                {date: 1672534800000, value: 171},
                {date: 1672538400000, value: 160}
            ]
        };

        const MAPrices = {
            NBP: [
                {date: 1672531200000, value:155},
                {date: 1672617600000, value:168},
                {date: 1672704000000, value:138},
            ],
            TTF: [
                {date: 1672531200000, value:161},
                {date: 1672617600000, value:169},
                {date: 1672704000000, value:132},
            ],
            AVTP: [
                {date: 1672531200000, value:152},
                {date: 1672617600000, value:171},
                {date: 1672704000000, value:187},
            ]
        };

        switch (settlemntPeriod) {
            case settlementPeriodEnum.DA:   
                 return DAPrices;
            case settlementPeriodEnum.MA:
                return MAPrices;
            default:
                return [];
        };
    }
}
