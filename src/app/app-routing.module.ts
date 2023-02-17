import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './pages/componente1/componente1.component';
import { Componente2Component } from './pages/componente2/componente2.component';
import { Componente3Component } from './pages/componente3/componente3.component';

const routes: Routes = [
  {path: 'compo1', component: Componente1Component},
  {path: 'compo2', component: Componente2Component},
  {path: 'compo3', component: Componente3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
