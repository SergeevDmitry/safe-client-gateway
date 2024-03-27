import { Global, Module } from '@nestjs/common';
import { ConfigApiModule } from '@/datasources/config-api/config-api.module';
import { TransactionApiModule } from '@/datasources/transaction-api/transaction-api.module';
import { IChainsRepository } from '@/domain/chains/chains.repository.interface';
import { ChainsRepository } from '@/domain/chains/chains.repository';
import { ISafeRepository } from '@/domain/safe/safe.repository.interface';
import { SafeRepository } from '@/domain/safe/safe.repository';
import { IContractsRepository } from '@/domain/contracts/contracts.repository.interface';
import { ContractsRepository } from '@/domain/contracts/contracts.repository';
import { IDelegateRepository } from '@/domain/delegate/delegate.repository.interface';
import { DelegateRepository } from '@/domain/delegate/delegate.repository';
import { IDataDecodedRepository } from '@/domain/data-decoder/data-decoded.repository.interface';
import { DataDecodedRepository } from '@/domain/data-decoder/data-decoded.repository';
import { DataDecodedValidator } from '@/domain/data-decoder/data-decoded.validator';
import { TransferValidator } from '@/domain/safe/transfer.validator';
import { MultisigTransactionValidator } from '@/domain/safe/multisig-transaction.validator';
import { ISafeAppsRepository } from '@/domain/safe-apps/safe-apps.repository.interface';
import { SafeAppsRepository } from '@/domain/safe-apps/safe-apps.repository';
import { TransactionTypeValidator } from '@/domain/safe/transaction-type.validator';
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
    { provide: IChainsRepository, useClass: ChainsRepository },
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
    { provide: ISafeRepository, useClass: SafeRepository },
    { provide: ITokenRepository, useClass: TokenRepository },
    DataDecodedValidator,
    MultisigTransactionValidator,
    TransactionTypeValidator,
    TransferValidator,
  ],
  exports: [
    IChainsRepository,
    IContractsRepository,
    IDataDecodedRepository,
    IDelegateRepository,
    IEstimationsRepository,
    IHealthRepository,
    IHumanDescriptionRepository,
    IMessagesRepository,
    INotificationsRepository,
    ISafeAppsRepository,
    ISafeRepository,
    ITokenRepository,
  ],
})
export class DomainModule {}
