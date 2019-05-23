import { Injectable } from '@angular/core';
import { ParametersService } from '../parameters.service';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../global/constantes';

@Injectable({
  providedIn: 'root'
})
export class ItemBaseService {

  constructor(private http: HttpClient, private parameterService: ParametersService) { }

  findByName(nome: string,
             codigoFilial: number,
             maxResult: number,
             ordenarRentabilidade: boolean,
             ordenarPreco: boolean) {
// tslint:disable-next-line: max-line-length
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}tst/item/v3/itens/base/autocomplete?nome=${nome}&codigoFilial=${codigoFilial}&maxResult=${maxResult}&ordenarRentabilidade=${ordenarRentabilidade}&ordenarPreco=${ordenarPreco}`);
  }
}
