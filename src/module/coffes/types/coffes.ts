import { IsString, IsArray, IsDateString, IsDate } from 'class-validator';

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
 
  tag: string[];

  @IsDateString() 
  date_create: String; 
}