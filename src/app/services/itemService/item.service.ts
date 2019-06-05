import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Constantes } from '../../global/constantes';
import { Observable } from 'rxjs';
import { ItemPost } from '../../model/item/itemPost.model';
import { ItemResponseDetalhada } from '../../model/item/itemResponseDetalhada.model';
import { ItemResponseEstoque } from '../../model/item/itemResponseEstoque.model';
import { ItemResponsePreco } from '../../model/item/itemResponsePreco.model';
import { ItemResponse } from '../../model/item/itemResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  findByName(nome: string,
             codigoFilial: number,
             maxResult: number,
             ordenarRentabilidade: boolean,
             ordenarPreco: boolean): Observable<ItemResponse> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<ItemResponse>(`${Constantes.GRUPO_DIMED_SERVICE}item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=${codigoFilial}&maxResult=${maxResult}&ordenarRentabilidade=${ordenarRentabilidade}&ordenarPreco=${ordenarPreco}`);
  }

  findItemDetalhe(itemDetalhe: ItemPost): Observable<ItemResponseDetalhada[]> {
    return this.http.post<ItemResponseDetalhada[]>
      (`${Constantes.GRUPO_DIMED_SERVICE}mostruario/v3/itens/detalhe`,
        itemDetalhe);
  }

  findEstoqueByCodigo(params: HttpParams): Observable<ItemResponseEstoque[]> {
    return this.http.get<ItemResponseEstoque[]>
      (`${Constantes.GRUPO_DIMED_SERVICE}filial/v1/filiais/101/estoque?`,
        {params});
  }

  findPreco(params: HttpParams, filial: number, perfil: number): Observable<ItemResponsePreco[]> {
    return this.http.get<ItemResponsePreco[]>
      (`${Constantes.GRUPO_DIMED_SERVICE}mostruario/v3/itens/precos?filial=${filial}&perfil=${perfil}`,
        {params});
  }
}
