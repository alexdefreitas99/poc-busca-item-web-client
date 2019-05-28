import { Item } from './item.model';
import { ConsultaRegrasFiscais } from '../any/consultaRegrasFiscais.model';

export class ItemPost {
  filial: number;
  perfil: number;
  itens: Array<Item>;
  consultaRegrasFiscais: ConsultaRegrasFiscais;
}
