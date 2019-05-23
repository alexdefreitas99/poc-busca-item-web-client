import { ConsultaRegrasFiscais } from '../consultaRegrasFisicais.model';

export class ItemDetalhe {
  public filial: number;
  public perfil: number;
  public itens: Array<any> = new Array();
  public consultaRegrasFiscais: ConsultaRegrasFiscais;
}
