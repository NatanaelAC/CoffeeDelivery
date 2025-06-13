import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CofeeDto } from './types/coffes';

const listaCofess: CofeeDto[] = [
  {
    nome: "Expresso Tradicional",
    tipo: "Quente",
    id: "123",
    descricao: "Um shot de café espresso puro e encorpado.",
    preco: "R$ 5,00",
    tag: ["clássico", "intenso"],
    date_create: new Date("2025-05-30T23:27:50.260Z").toISOString()
  },
  {
    nome: "Cappuccino",
    tipo: "Quente",
    id: "CP002",
    descricao: "Espresso com leite vaporizado e uma generosa camada de espuma.",
    preco: "R$ 8,00",
    tag: ["cremoso", "doce"],
    date_create: new Date("2025-05-30T23:27:50.260Z").toISOString()
  },
  {
    nome: "Latte",
    tipo: "Quente",
    id: "LT003",
    descricao: "Espresso suave com uma grande quantidade de leite vaporizado.",
    preco: "R$ 7,50",
    tag: ["suave", "clássico"],
    date_create: new Date("2025-05-30T23:27:50.260Z").toISOString()
  },
  {
    nome: "Mocha",
    tipo: "Quente",
    id: "MC004",
    descricao: "Espresso, chocolate, leite vaporizado e chantilly.",
    preco: "R$ 9,00",
    tag: ["doce", "achocolatado"],
    date_create: new Date("2025-05-30T23:27:50.260Z").toISOString()
  },
  {
    nome: "Americano",
    tipo: "Quente",
    id: "AM005",
    descricao: "Espresso diluído em água quente, similar ao café filtrado.",
    preco: "R$ 6,00",
    tag: ["suave", "tradicional"],
    date_create: new Date("2025-05-30T23:27:50.260Z").toISOString()
  }
  
];

console.log(listaCofess);

@Injectable()
export class CoffeService {

  getCofee(): CofeeDto[] {
    return listaCofess;
  }

  getCofeeById(id: string): CofeeDto {
    const cofee = listaCofess.find(cofee => cofee.id === id);
    if (!cofee) {
      throw new NotFoundException(`Café com ID "${id}" não encontrado.`);
    }
    return cofee;
  }

  createCofee(newCofee: CofeeDto): CofeeDto {
    const idExists = listaCofess.some(cofee => cofee.id === newCofee.id);
    if (idExists) {
      throw new ConflictException(`Café com ID "${newCofee.id}" já existe.`);
    }

    listaCofess.push(newCofee);
    return newCofee;
  }
  getFilterByDate(startDate: Date, endDate: Date): CofeeDto[] {
    const filteredCoffees = listaCofess.filter((coffee) => {
      const coffeeDate = new Date(coffee.date_create);
      return coffeeDate >= startDate && coffeeDate <= endDate;
    });
    return filteredCoffees;
  }

 
  async findAll(): Promise<CofeeDto[]> {
    return this.getCofee(); 
  }

  async create(createCafeDto: CofeeDto): Promise<CofeeDto> {
    return this.createCofee(createCafeDto); 
  }

  async findPedidosByCafeId(cafeId: string): Promise<any[]> {
    const cafe = this.getCofeeById(cafeId);
    if (!cafe) {
      return []; 
    }
 
    return [{ cafe, quantidadeComprada: 1 }];
  }

  async findMaisVendidos(): Promise<CofeeDto[]> {
    return this.getCofee();
  }

  async remove(id: string): Promise<void> {
    const index = listaCofess.findIndex(coffee => coffee.id === id);
    if (index === -1) {
      throw new NotFoundException(`Café com ID "${id}" não encontrado.`);
    }
    listaCofess.splice(index, 1);
  }

  async removeTag(tagId: string): Promise<void> {
  
    throw new Error('Operação de remoção de tag não suportada.');
  }
}
