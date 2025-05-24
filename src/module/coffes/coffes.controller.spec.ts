import { Test, TestingModule } from '@nestjs/testing';
import { CoffeController } from './coffes.controller';
import { CoffeService } from './coffes.service';

describe('AppController', () => {
  let appController: CoffeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoffeController],
      providers: [CoffeService],
    }).compile();

    appController = app.get<CoffeController>(CoffeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
