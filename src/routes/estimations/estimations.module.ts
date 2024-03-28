import { Module } from '@nestjs/common';
import { EstimationsController } from '@/routes/estimations/estimations.controller';
import { EstimationsService } from '@/routes/estimations/estimations.service';
import { SafeRepositoryModule } from '@/domain/safe/safe.repository.interface';

@Module({
  imports: [SafeRepositoryModule],
  controllers: [EstimationsController],
  providers: [EstimationsService],
})
export class EstimationsModule {}
