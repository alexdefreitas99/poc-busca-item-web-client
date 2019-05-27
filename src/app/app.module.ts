import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemModule } from './modules/item.module';
import { BootstrapModule } from './modules/bootstrap.module';
import { InterceptorsModule } from './modules/interceptors.module';
import { SharedModule } from './modules/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule,
    HttpClientModule,
    BootstrapModule,
    InterceptorsModule,
    SharedModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
