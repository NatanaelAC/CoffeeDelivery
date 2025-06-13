import { IsString, IsArray, ArrayNotEmpty, IsDateString,IsOptional } from 'class-validator';


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
export class CafeResponseDto {
  id: number;

  nome: string;

  tags: string[]; 
}
export class QueryDto {
  @IsOptional()
  @IsString()
  tipo?: string; 

  @IsOptional()
  @IsString()
  nome_do_cafe?: string;
}
