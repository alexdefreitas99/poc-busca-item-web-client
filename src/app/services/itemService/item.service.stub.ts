import { Builder } from 'builder-pattern';
import { ItemResponse } from '../../model/item/itemResponse.model';

export class ItemServiceStub {

  public static mockFindByNameRequest(): Array<ItemResponse> {
    const itemResponseList: Array<ItemResponse> = new Array<ItemResponse>();

    let itemResponse = Builder<ItemResponse>()
    .codigoItem(12456)
    .nomeDetalhado('Paracetamol')
    .nomenclaturaVarejo('paracetamol 20mg')
    .build();

    itemResponseList.push(itemResponse);

    itemResponse = Builder<ItemResponse>()
    .codigoItem(654321)
    .nomeDetalhado('Paracetamol Generico')
    .nomenclaturaVarejo('paracetamol 60mg')
    .build();

    itemResponseList.push(itemResponse);

    return itemResponseList;
  }

  public findByName() { }

}
