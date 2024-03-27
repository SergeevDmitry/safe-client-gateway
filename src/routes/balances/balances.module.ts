import { Module } from '@nestjs/common';
import { BalancesController } from '@/routes/balances/balances.controller';
import { BalancesService } from '@/routes/balances/balances.service';
import { BalancesRepositoryModule } from '@/domain/balances/balances.repository.interface';

@Module({
  imports: [BalancesRepositoryModule],
  controllers: [BalancesController],
  providers: [BalancesService],
})
export class BalancesModule {}
