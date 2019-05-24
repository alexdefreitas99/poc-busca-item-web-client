import { ConsultaRegrasFiscais } from '../ConsultaRegrasFiscais';
import { Item } from './item.model';

export class ItemDetalhe {
  public filial: number;
  public perfil: number;
  public itens: Array<Item> = new Array();
  public consultaRegrasFiscais: ConsultaRegrasFiscais;
}
