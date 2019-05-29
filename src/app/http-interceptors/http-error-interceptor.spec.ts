import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorInterceptor } from './http-error-interceptor';
describe('HttpErrorInterceptor', () => {
  let service: HttpErrorInterceptor;
  beforeEach(() => {
    const httpHandlerStub = { handle: request1 => ({ pipe: () => ({}) }) };
    const httpRequestStub = {};
    const toastrServiceStub = {
      toastrConfig: { preventDuplicates: {}, positionClass: {} },
      error: (string1, string2) => ({})
    };
    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptor,
        { provide: HttpHandler, useValue: httpHandlerStub },
        { provide: HttpRequest, useValue: httpRequestStub },
        { provide: ToastrService, useValue: toastrServiceStub }
      ]
    });
    service = TestBed.get(HttpErrorInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      // const toastrServiceStub: ToastrService = TestBed.get(ToastrService);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      // spyOn(toastrServiceStub, 'error').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      // expect(toastrServiceStub.error).toHaveBeenCalled();
    });
  });
});
