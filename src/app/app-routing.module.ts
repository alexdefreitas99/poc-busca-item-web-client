import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaItemComponent } from './components/busca-item/busca-item.component';

const routes: Routes = [
  {
    path: 'busca',
    component: BuscaItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
