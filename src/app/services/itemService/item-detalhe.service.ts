import { Injectable } from '@angular/core';
import { Constantes } from 'src/app/global/constantes';
import { ParametersService } from '../parameters.service';
import { HttpClient } from '@angular/common/http';
import { ItemDetalhe } from 'src/app/model/mostruario/itemDetalhe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDetalheService {

  constructor(private http: HttpClient, private parameterService: ParametersService) { }

  findItemDetalhe(itemDetalhe: ItemDetalhe): Observable<any> {
    return this.http.post(`${this.parameterService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)}tst/mostruario/v3/itens/detalhe`,
    itemDetalhe);
  }
}
