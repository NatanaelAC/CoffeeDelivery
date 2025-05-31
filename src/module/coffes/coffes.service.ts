import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CofeeDto } from './types/coffes'; 

type CofeeDto = {
    nome: string;
    tipo: string;
    id: string;
    descricao: string;
    preco: string;
     tag: string[];
     date_create:String;
     };
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
  getfilterCoffes(start_date:Date,end_date:Date): CofeeDto[]{

  }
}