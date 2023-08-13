import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoriesModule } from '../categories/categories.module';
import { ValidateTransactionOwnershipService } from './services/validate-transaction-ownership.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnershipService],
  imports: [BankAccountsModule, CategoriesModule],
})
export class TransactionsModule {}
