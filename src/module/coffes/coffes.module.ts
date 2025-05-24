import { Module } from '@nestjs/common';
import { CoffeController } from './coffes.controller';
import { CoffeService } from './coffes.service';

@Module({
  imports: [],
  controllers: [CoffeController],
  providers: [CoffeService],
})
export class AppModule {}
