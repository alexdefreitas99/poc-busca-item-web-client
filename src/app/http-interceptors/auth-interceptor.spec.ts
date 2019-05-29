import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
describe('AuthInterceptor', () => {
  let service: AuthInterceptor;
  beforeEach(() => {
    const httpRequestStub = {
      clone: object1 => ({}),
      headers: { set: () => ({}) }
    };
    const httpHandlerStub = { handle: requestClone1 => ({}) };
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        { provide: HttpRequest, useValue: httpRequestStub },
        { provide: HttpHandler, useValue: httpHandlerStub }
      ]
    });
    service = TestBed.get(AuthInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpRequestStub.clone).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
