import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountController {
  @Get()
  list() {
    return 'List accounts';
  }
}
