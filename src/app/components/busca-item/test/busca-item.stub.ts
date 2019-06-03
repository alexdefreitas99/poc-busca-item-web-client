import { ItemResponse } from '../../../model/item/itemResponse.model';
import { Builder } from 'builder-pattern';
import { ItemResponseDetalhada } from '../../../model/item/itemResponseDetalhada.model';
import { ItemResponseEstoque } from '../../../model/item/itemResponseEstoque.model';
import { ItemResponsePreco } from '../../../model/item/itemResponsePreco.model';
export class BuscaItemStub {

  public static mockItemDetalheResponse(): ItemResponseDetalhada[] {
    return [
      Builder<ItemResponseDetalhada>()
      .advertencias(['a', 'b'])
      .categorias([])
      .classeTerapeutica('a')
      .codigo(1)
      .consultaRegrasFiscais(null)
      .dadosImagens([])
      .descricaoMarcaPai('')
      .ean(1)
      .estoque(null)
      .nomenclatura('')
      .nomenclaturaDetalhada('')
      .preco(null)
      .precoDe(1)
      .precoPor(2)
      .principioAtivo('a')
      .promocaoAssinatura(false)
      .situacaoItem('bom')
      .build()
    ];

  }

  public static mockResponseEstoque(): ItemResponseEstoque[] {
    return [
      Builder<ItemResponseEstoque>().codigoItem(1).estoqueLoja(1).build()
    ];
  }

  public static mockResponsePreco(): ItemResponsePreco[] {
    return [
      Builder<ItemResponsePreco>().codigoItem(1).preco(null).build()
    ];
  }


  public static mockFindByNameRetorno(): ItemResponse[] {
    return [
      Builder<ItemResponse>()
    .codigoItem(111)
    .nomeDetalhado('Parace')
    .nomenclaturaVarejo('paracetamol')
    .participaFarmaciaPopular(null)
    .participaListaReferencial(null)
    .participaNovoPack(false)
    .participaPbm(false)
    .permiteAdesao(false)
    .possuiItemAVencer(false)
    .possuiKitAdesao(false)
    .build()
    ];
  }
  public static montaObjetoDoPostDetalhe() {}

  public show() { }
  public buscaProduto() { }
  public findByName() {}
  public error() { }
  public findItemDetalhe() { }
  public findEstoqueByCodigo() { }
  public findPreco() { }
  public config( ) { }
  public toastrConfig() { }
}
