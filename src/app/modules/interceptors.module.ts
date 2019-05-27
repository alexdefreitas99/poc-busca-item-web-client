import { NgModule } from '@angular/core';
import { AuthInterceptor } from '../http-interceptors/auth-interceptor';
import { HttpErrorInterceptor } from '../http-interceptors/http-error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
    }
  ]
})
export class InterceptorsModule { }
