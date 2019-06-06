import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemModule } from './modules/item.module';
import { BootstrapModule } from './modules/bootstrap.module';
import { InterceptorsModule } from './modules/interceptors.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    InterceptorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
