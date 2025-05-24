import { IsString, IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';


export class CofeeDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;

  @IsString()
  id: string;

  @IsString()
  descricao: string;

  @IsString()
  preco: string;

  @IsArray()
 
  @IsString()
  tag: string[];
}