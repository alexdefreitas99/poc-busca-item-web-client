import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';
import { Constantes } from '../global/constantes';

describe('ParametersService', () => {

  let parametersService: ParametersService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    parametersService = TestBed.get(ParametersService);
    expect(parametersService).toBeTruthy();
  });

  it('should use ParametersService', () => {
    parametersService = TestBed.get(ParametersService);
    expect(parametersService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)).toBe('http://api-int.grupodimedservices.com.br/tst/');
  });

  it('Should return undefined', () => {
    parametersService = TestBed.get(ParametersService);
    expect(parametersService.getValueFromProperties('api_nao_existente')).toBeUndefined();
  });

});
