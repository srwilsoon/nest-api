import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';

describe('AccountController', () => {
  let accountController: AccountController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [],
    }).compile();

    accountController = app.get<AccountController>(AccountController);
  });

  describe('root', () => {
    it('should return "List accounts"', () => {
      expect(accountController.list()).toBe('List accounts');
    });
  });
});
