import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CoffeService } from './coffes.service';
import { CofeeDto } from './types/coffes';  

@Controller()
export class CoffeController {
  constructor(private readonly appService: CoffeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Cofees')
  getCofees(): CofeeDto[] {
    return this.appService.getCofee();
  }

  @Get('Cofees/:id')
  getCofeeById(@Param('id') id: string): CofeeDto {
    return this.appService.getCofeeById(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): CofeeDto {
    return this.appService.getCofeeById(id);
  }


  @Post('coffes/create')
  createCofee(@Body() newCofee: CofeeDto): CofeeDto {
    return this.appService.createCofee(newCofee);
  }
}