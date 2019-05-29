import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const requestClone = req.clone({
      headers: req.headers.set('app-token', 'mCl6SnTQp6eT')
    });
    return next.handle(requestClone);
  }
}
