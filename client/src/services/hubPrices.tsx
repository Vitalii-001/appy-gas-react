import axiosClient from '../api/axios';
import { settlementPeriodEnum } from '../shared/enums/settlementPeriod.enum';

// Example of a service function to fetch data
export async function fetchHubPrices(settlementPeriod: settlementPeriodEnum) {
  return axiosClient.get('/hubPrices', { params: { settlementPeriod } }).then((res) => res.data);
}