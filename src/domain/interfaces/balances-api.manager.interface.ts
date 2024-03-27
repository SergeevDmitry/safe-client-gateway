import { IBalancesApi } from '@/domain/interfaces/balances-api.interface';
import { Module } from '@nestjs/common';
import { CacheFirstDataSourceModule } from '@/datasources/cache/cache.first.data.source.module';
import { HttpErrorFactory } from '@/datasources/errors/http-error-factory';
import { BalancesApiManager } from '@/datasources/balances-api/balances-api.manager';
import {
  IZerionBalancesApi,
  ZerionBalancesApi,
} from '@/datasources/balances-api/zerion-balances-api.service';
import { IPricesApi } from '@/datasources/balances-api/prices-api.interface';
import { CoingeckoApi } from '@/datasources/balances-api/coingecko-api.service';

export const IBalancesApiManager = Symbol('IBalancesApiManager');

export interface IBalancesApiManager {
  /**
   * Gets an {@link IBalancesApi} implementation.
   * Each chain is associated with an implementation (i.e.: to a balances
   * provider) via configuration.
   *
   * @param chainId - the chain identifier to check.
   * @returns {@link IBalancesApi} configured for the input chain ID.
   */
  getBalancesApi(chainId: string): Promise<IBalancesApi>;

  /**
   * Gets the list of supported fiat codes.
   * @returns an alphabetically ordered list of uppercase strings representing the supported fiat codes.
   */
  getFiatCodes(): Promise<string[]>;
}

@Module({
  imports: [CacheFirstDataSourceModule],
  providers: [
    HttpErrorFactory,
    { provide: IBalancesApiManager, useClass: BalancesApiManager },
    { provide: IZerionBalancesApi, useClass: ZerionBalancesApi },
    { provide: IPricesApi, useClass: CoingeckoApi },
  ],
  exports: [IBalancesApiManager],
})
export class BalancesApiModule {}
