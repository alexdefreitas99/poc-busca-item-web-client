import { Builder } from 'builder-pattern';
import { ItemResponse } from '../../model/item/itemResponse.model';
import { ItemPost } from 'src/app/model/item/itemPost.model';
import { ConsultaRegrasFiscais } from 'src/app/model/any/consultaRegrasFiscais.model';
import { Item } from 'src/app/model/item/item.model';

export class ItemServiceStub {

  public static findByName() { }

  public static findItemDetalhe() { }

  public static mockFindPostItemDetalhe(): ItemPost {
    const itemDetalhePost: ItemPost = new ItemPost();
    itemDetalhePost.consultaRegrasFiscais = new ConsultaRegrasFiscais();
    itemDetalhePost.consultaRegrasFiscais.pais = 'BR';
    itemDetalhePost.consultaRegrasFiscais.paisDestino = 'BR';
    itemDetalhePost.consultaRegrasFiscais.uf = 'RS';
    itemDetalhePost.consultaRegrasFiscais.ufDestino = 'RS';
    itemDetalhePost.filial = 101;
    itemDetalhePost.perfil = 1;
    itemDetalhePost.itens = new Array<Item>();
    const item: Item = new Item();
    item.codigo = 12356;
    item.quantidade = 1;
    itemDetalhePost.itens.push(item);
    return itemDetalhePost;
  }


  public static mockFindByNameRequest(): ItemResponse {
    // const itemResponseList: Array<ItemResponse> = new Array<ItemResponse>();

    // let itemResponse = Builder<ItemResponse>()
    // .codigoItem(12456)
    // .nomeDetalhado('Paracetamol')
    // .nomenclaturaVarejo('paracetamol 20mg')
    // .build();

    // itemResponseList.push(itemResponse);

    // itemResponse = Builder<ItemResponse>()
    // .codigoItem(654321)
    // .nomeDetalhado('Paracetamol Generico')
    // .nomenclaturaVarejo('paracetamol 60mg')
    // .build();

    // itemResponseList.push(itemResponse);

    return Builder<ItemResponse>()
      .codigoItem(654321)
      .nomeDetalhado('Paracetamol Generico')
      .nomenclaturaVarejo('paracetamol 60mg')
      .build();
  }


}
