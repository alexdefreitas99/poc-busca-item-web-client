import { Preco } from '../preco.model';

export class ResponseApiDetalhada {
    codigo: number;
    ean: number;
    preco?: Preco;
    estoque?: number;
    precoDe: number;
    precoPor: number;
    categorias: any[];
    nomenclatura: string;
    nomenclaturaDetalhada: string;
    advertencias: string[];
    principioAtivo: string;
    classeTerapeutica: string;
    situacaoItem: string;
    descricaoMarcaPai: string;
  }
