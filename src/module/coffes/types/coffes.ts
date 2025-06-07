import { IsString, IsArray, ArrayNotEmpty, IsDateString } from 'class-validator';


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
  @ArrayNotEmpty()
  @IsString()
  tag: string[];

 
  @IsDateString()
  date_create: string;
}
