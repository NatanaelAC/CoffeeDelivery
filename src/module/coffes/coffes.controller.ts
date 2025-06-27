import { Controller, Get, Post, Delete, Body, Param, Query, HttpCode, HttpStatus,UsePipes,ValidationPipe } from '@nestjs/common';
import { CoffeService } from './coffes.service';
import { CofeeDto, CafeResponseDto, QueryDto } from './types/coffes';

@Controller('coffees')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
export class CoffeController {
  constructor(private readonly coffeesService: CoffeService) {}

  @Get()
  async findAll(): Promise<CafeResponseDto[]> {
    const allCoffees = await this.coffeesService.findAll();
    return allCoffees.map(coffee => ({
      id: parseInt(coffee.id || ''),
      nome: coffee.nome,
      tags: coffee.tag
    }));
  }

  @Get(':id/detalhes')
  async getCofeeById(@Param('id') id: string): Promise<CofeeDto> {
    return await this.coffeesService.getCofeeById(id);
  }

  @Post('/coffees-create')
  @HttpCode(HttpStatus.CREATED)
  async createCofee(@Body() createCafeDto: CofeeDto): Promise<any> {
    const cofeeToCreate: CofeeDto = {
        id: createCafeDto.id ? createCafeDto.id.toString() : (new Date().getTime()).toString(),
        nome: createCafeDto.nome,
        tipo: createCafeDto.tipo,
        descricao: createCafeDto.descricao,
        preco: createCafeDto.preco.toString(),
        tag: createCafeDto.tag,
        date_create: createCafeDto.date_create || new Date().toISOString()
    };
    return await this.coffeesService.create(cofeeToCreate);
  }

  @Get(':cafeId/orders')
  async findPedidosByCafeId(@Param('cafeId') cafeId: string): Promise<any[]> {
    return await this.coffeesService.findPedidosByCafeId(cafeId);
  }

  @Get('plus-order-coffee')
  async findMaisVendidos(): Promise<CofeeDto[]> {
    return await this.coffeesService.findMaisVendidos();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    await this.coffeesService.remove(id);
  }

  @Delete(':tagId/tags')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeTag(@Param('tagId') tagId: string): Promise<void> {
    await this.coffeesService.removeTag(tagId);
  }
}