import { Global, Module } from '@nestjs/common';
import { ConfigApiModule } from '@/datasources/config-api/config-api.module';
import { TransactionApiModule } from '@/datasources/transaction-api/transaction-api.module';
import { IContractsRepository } from '@/domain/contracts/contracts.repository.interface';
import { ContractsRepository } from '@/domain/contracts/contracts.repository';
import { IDelegateRepository } from '@/domain/delegate/delegate.repository.interface';
import { DelegateRepository } from '@/domain/delegate/delegate.repository';
import { IDataDecodedRepository } from '@/domain/data-decoder/data-decoded.repository.interface';
import { DataDecodedRepository } from '@/domain/data-decoder/data-decoded.repository';
import { DataDecodedValidator } from '@/domain/data-decoder/data-decoded.validator';
import { ISafeAppsRepository } from '@/domain/safe-apps/safe-apps.repository.interface';
import { SafeAppsRepository } from '@/domain/safe-apps/safe-apps.repository';
import { ITokenRepository } from '@/domain/tokens/token.repository.interface';
import { TokenRepository } from '@/domain/tokens/token.repository';
import { INotificationsRepository } from '@/domain/notifications/notifications.repository.interface';
import { NotificationsRepository } from '@/domain/notifications/notifications.repository';
import { IEstimationsRepository } from '@/domain/estimations/estimations.repository.interface';
import { EstimationsRepository } from '@/domain/estimations/estimations.repository';
import { MessagesRepository } from '@/domain/messages/messages.repository';
import { IMessagesRepository } from '@/domain/messages/messages.repository.interface';
import { IHealthRepository } from '@/domain/health/health.repository.interface';
import { HealthRepository } from '@/domain/health/health.repository';
import { HumanDescriptionApiModule } from '@/datasources/human-description-api/human-description-api.module';
import { IHumanDescriptionRepository } from '@/domain/human-description/human-description.repository.interface';
import { HumanDescriptionRepository } from '@/domain/human-description/human-description.repository';

@Global()
@Module({
  imports: [ConfigApiModule, HumanDescriptionApiModule, TransactionApiModule],
  providers: [
    { provide: IContractsRepository, useClass: ContractsRepository },
    { provide: IDataDecodedRepository, useClass: DataDecodedRepository },
    { provide: IDelegateRepository, useClass: DelegateRepository },
    { provide: IEstimationsRepository, useClass: EstimationsRepository },
    { provide: IHealthRepository, useClass: HealthRepository },
    {
      provide: IHumanDescriptionRepository,
      useClass: HumanDescriptionRepository,
    },
    { provide: IMessagesRepository, useClass: MessagesRepository },
    { provide: INotificationsRepository, useClass: NotificationsRepository },
    { provide: ISafeAppsRepository, useClass: SafeAppsRepository },
    { provide: ITokenRepository, useClass: TokenRepository },
    DataDecodedValidator,
  ],
  exports: [
    IContractsRepository,
    IDataDecodedRepository,
    IDelegateRepository,
    IEstimationsRepository,
    IHealthRepository,
    IHumanDescriptionRepository,
    IMessagesRepository,
    INotificationsRepository,
    ISafeAppsRepository,
    ITokenRepository,
  ],
})
export class DomainModule {}
