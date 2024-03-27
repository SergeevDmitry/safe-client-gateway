import { Module } from '@nestjs/common';
import { ChainsController } from '@/routes/chains/chains.controller';
import { ChainsService } from '@/routes/chains/chains.service';
import { BackboneRepositoryModule } from '@/domain/backbone/backbone.repository.interface';

@Module({
  imports: [BackboneRepositoryModule],
  controllers: [ChainsController],
  providers: [ChainsService],
})
export class ChainsModule {}
