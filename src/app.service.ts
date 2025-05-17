import { Injectable , NotFoundException} from '@nestjs/common';

export interface Cofee {
  nome: string;
  tipo: string;
  Id: string;
  descricao: string;
  preco: string;
  tag: string[]; 
}

const listaCofess: Cofee[] = [ 
  {
    "nome": "Expresso Tradicional",
    "tipo": "Quente",
    "Id": "EX001",
    "descricao": "Um shot de café espresso puro e encorpado.",
    "preco": "R$ 5,00",
    "tag": ["clássico", "intenso"]
  },
  {
    "nome": "Cappuccino",
    "tipo": "Quente",
    "Id": "CP002",
    "descricao": "Espresso com leite vaporizado e uma generosa camada de espuma.",
    "preco": "R$ 8,00",
    "tag": ["cremoso", "doce"]
  },
  {
    "nome": "Latte",
    "tipo": "Quente",
    "Id": "LT003",
    "descricao": "Espresso suave com uma grande quantidade de leite vaporizado.",
    "preco": "R$ 7,50",
    "tag": ["suave", "clássico"]
  },
  {
    "nome": "Mocha",
    "tipo": "Quente",
    "Id": "MC004",
    "descricao": "Espresso, chocolate, leite vaporizado e chantilly.",
    "preco": "R$ 9,00",
    "tag": ["doce", "achocolatado"]
  },
  {
    "nome": "Americano",
    "tipo": "Quente",
    "Id": "AM005",
    "descricao": "Espresso diluído em água quente, similar ao café filtrado.",
    "preco": "R$ 6,00",
    "tag": ["suave", "tradicional"]
  }];

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  }

  getCofee(): Cofee[] {
    return listaCofess;
  }
  getCofeeById(id: string): Cofee {
    const cofee = listaCofess.find(cofee => cofee.Id === id);
    if (!cofee) {
      throw new NotFoundException(`404 Not Found`);
    }
    return cofee;
  }

 
}