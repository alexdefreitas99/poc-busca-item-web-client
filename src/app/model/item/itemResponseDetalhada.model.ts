import { Preco } from '../any/preco.model';
import { Categoria } from '../any/categoria.model';
import { ConsultaRegrasFiscais } from '../any/consultaRegrasFiscais.model';

export class ItemResponseDetalhada {
  codigo: number;
  ean: number;
  preco?: Preco;
  estoque?: number;
  precoDe: number;
  precoPor: number;
  categorias: Array<Categoria>;
  nomenclatura: string;
  nomenclaturaDetalhada: string;
  advertencias: string[];
  principioAtivo: string;
  classeTerapeutica: string;
  situacaoItem: string;
  descricaoMarcaPai: string;
  consultaRegrasFiscais: ConsultaRegrasFiscais;
  promocaoAssinatura: boolean;
}
