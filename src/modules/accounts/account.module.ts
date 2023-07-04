import { Module } from '@nestjs/common';
import { AccountController } from './http/controllers/account.controller';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [],
})
export class AccountModule {}
