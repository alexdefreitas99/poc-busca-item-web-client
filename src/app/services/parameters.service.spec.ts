import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';
import { Constantes } from '../global/constantes';

describe('ParametersService', () => {

  let parametersService: ParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    parametersService = TestBed.get(ParametersService);
  });

  it('should be created', () => {
    expect(parametersService).toBeTruthy();
  });

  it('should use ParametersService', () => {
    expect(parametersService.getValueFromProperties(Constantes.GRUPO_DIMED_SERVICE)).toBe('http://api-int.grupodimedservices.com.br/tst/');
  });

  it('Should return undefined', () => {
    expect(parametersService.getValueFromProperties('api_nao_existente')).toBeUndefined();
  });

  it('Should return undefined', () => {
    expect(parametersService.getValueFromProperties('')).toBeUndefined();
  });
});
