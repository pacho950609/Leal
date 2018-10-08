import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { FiltrosComponent } from './filtros/filtros.component';

const routes: Routes = 
[
  {
    path: 'home',
    component: BarraSuperiorComponent,
    children: 
    [
      {
          path: 'transacciones',
          component : FiltrosComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesRoutingModule { }
