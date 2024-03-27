import { Module } from '@nestjs/common';
import { AddressInfoModule } from '@/routes/common/address-info/address-info.module';
import { SafesController } from '@/routes/safes/safes.controller';
import { SafesService } from '@/routes/safes/safes.service';
import { BalancesRepositoryModule } from '@/domain/balances/balances.repository.interface';

@Module({
  controllers: [SafesController],
  providers: [SafesService],
  imports: [AddressInfoModule, BalancesRepositoryModule],
})
export class SafesModule {}
