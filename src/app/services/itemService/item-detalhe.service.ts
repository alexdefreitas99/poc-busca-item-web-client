import { Injectable } from '@angular/core';
import { Constantes } from 'src/app/global/constantes';
import { ParametersService } from '../parameters.service';
import { HttpClient } from '@angular/common/http';
import { ItemDetalhe } from 'src/app/model/mostruario/itemDetalhe.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class ItemDetalheService {

  constructor(private http: HttpClient, private parameterService: ParametersService) { }

  findItemDetalhe(itemDetalhe: ItemDetalhe): Observable<any> {
    return this.http.post(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}tst/mostruario/v3/itens/detalhe`,
    itemDetalhe);
  }

  findEstoqueByCodigo(params: any): Observable<any>{
// tslint:disable-next-line: max-line-length
    return this.http.get(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}tst/filial/v1/filiais/101/estoque?`, params);
  }
}
