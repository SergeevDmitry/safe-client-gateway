import { Module } from '@nestjs/common';
import { JsonSchemaService } from '@/validation/providers/json-schema.service';
import { CacheHooksController } from '@/routes/cache-hooks/cache-hooks.controller';
import { CacheHooksService } from '@/routes/cache-hooks/cache-hooks.service';
import { BalancesRepositoryModule } from '@/domain/balances/balances.repository.interface';
import { CollectiblesRepositoryModule } from '@/domain/collectibles/collectibles.repository.interface';

@Module({
  imports: [BalancesRepositoryModule, CollectiblesRepositoryModule],
  providers: [JsonSchemaService, CacheHooksService],
  controllers: [CacheHooksController],
})
export class CacheHooksModule {}
