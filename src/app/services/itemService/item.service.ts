import { Injectable } from '@angular/core';
import { ParametersService } from '../parameters.service';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../global/constantes';
import { Observable } from 'rxjs';
import { ItemPost } from '../../model/item/itemPost.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private parameterService: ParametersService) { }

  findByName(nome: string,
             codigoFilial: number,
             maxResult: number,
             ordenarRentabilidade: boolean,
             ordenarPreco: boolean): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=${codigoFilial}&maxResult=${maxResult}&ordenarRentabilidade=${ordenarRentabilidade}&ordenarPreco=${ordenarPreco}`);
  }

  findItemDetalhe(itemDetalhe: ItemPost): Observable<any> {
    return this.http.post(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}mostruario/v3/itens/detalhe`,
      itemDetalhe);
  }

  findEstoqueByCodigo(params: any): Observable<any> {
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}filial/v1/filiais/101/estoque?`,
      params);
  }

  findPreco(params: any, filial: number, perfil: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}mostruario/v3/itens/precos?filial=${filial}&perfil=${perfil}`,
      params);
  }
}
