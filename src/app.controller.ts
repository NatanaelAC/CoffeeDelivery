import { Controller, Get ,Param} from '@nestjs/common';
import { AppService, Cofee } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Cofees')
  getCofees(): Cofee[]  { 
    return this.appService.getCofee();
  }
  @Get('Cofees/:id') 
  getCofeeById(@Param('id') id: string): Cofee {
    return this.appService.getCofeeById(id);
  }
  
  @Get(':id') 
  findOne(@Param('id') id: string): Cofee {
    return this.appService.getCofeeById(id);
  }

}