import { Injectable, NotFoundException } from '@nestjs/common';
import { CofeeDto } from './types/coffes';


const listaCofess:CofeeDto[] = [
  {
    "nome": "Expresso Tradicional",
    "tipo": "Quente",
    "id": "EX001",
    "descricao": "Um shot de café espresso puro e encorpado.",
    "preco": "R$ 5,00",
    "tag": ["clássico", "intenso"]
  },
  {
    "nome": "Cappuccino",
    "tipo": "Quente",
    "id": "CP002",
    "descricao": "Espresso com leite vaporizado e uma generosa camada de espuma.",
    "preco": "R$ 8,00",
    "tag": ["cremoso", "doce"]
  },
  {
    "nome": "Latte",
    "tipo": "Quente",
    "id": "LT003",
    "descricao": "Espresso suave com uma grande quantidade de leite vaporizado.",
    "preco": "R$ 7,50",
    "tag": ["suave", "clássico"]
  },
  {
    "nome": "Mocha",
    "tipo": "Quente",
    "id": "MC004",
    "descricao": "Espresso, chocolate, leite vaporizado e chantilly.",
    "preco": "R$ 9,00",
    "tag": ["doce", "achocolatado"]
  },
  {
    "nome": "Americano",
    "tipo": "Quente",
    "id": "AM005",
    "descricao": "Espresso diluído em água quente, similar ao café filtrado.",
    "preco": "R$ 6,00",
    "tag": ["suave", "tradicional"]
  }
];

@Injectable()
export class CoffeService {

  getHello(): string {
    return 'Hello World!';
  }

  getCofee(): CofeeDto[] {
    return listaCofess;
  }

  getCofeeById(id: string): CofeeDto {
    const cofee = listaCofess.find(cofee => cofee.id === id);
    if (!cofee) {
      throw new NotFoundException(`cafe com ID${id}não encontrado`);
    }
    return cofee;
  }


  createCofee(newCofee: CofeeDto): CofeeDto {
    listaCofess.push(newCofee);
    return newCofee;
  }
}