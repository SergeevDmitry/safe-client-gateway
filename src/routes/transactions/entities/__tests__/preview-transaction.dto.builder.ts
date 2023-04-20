import { faker } from '@faker-js/faker';
import { Operation } from '../../../../domain/safe/entities/operation.entity';
import { Builder, IBuilder } from '../../../../__tests__/builder';
import { PreviewTransactionDto } from '../preview-transaction.dto.entity';

export function previewTransactionDtoBuilder(): IBuilder<PreviewTransactionDto> {
  return Builder.new<PreviewTransactionDto>()
    .with('to', faker.finance.ethereumAddress())
    .with('data', faker.datatype.hexadecimal(32))
    .with('value', faker.random.numeric())
    .with('operation', faker.helpers.arrayElement([0, 1]) as Operation);
}