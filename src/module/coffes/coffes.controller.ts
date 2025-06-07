import { Controller, Get, Param, Post, Body, Query} from '@nestjs/common';
import { CoffeService } from './coffes.service';
import { CofeeDto } from './types/coffes'; 

@Controller('coffees') 
export class CoffeController {
 constructor(private readonly appService: CoffeService) {}

@Get() 
getCofees(): CofeeDto[] {
 return this.appService.getCofee();
 }

 @Get(':id/detalhes') 
 getCofeeById(@Param('id') id: string): CofeeDto {
 return this.appService.getCofeeById(id);
 }

 @Post('/coffees-create')
 createCofee(@Body() newCofee: CofeeDto): CofeeDto {
 return this.appService.createCofee(newCofee);
 }

 @Get('/:id/coffees-query-all')
 CofeeQueryAll(@Query() Cofee: CofeeDto,@Param() id: string) {
 console.log(Cofee,id);
 }

 


}