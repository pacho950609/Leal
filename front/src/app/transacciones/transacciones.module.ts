import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionesRoutingModule } from './transacciones-routing.module';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { FiltrosComponent } from './filtros/filtros.component';

@NgModule({
  imports: [
    CommonModule,
    TransaccionesRoutingModule
  ],
  declarations: [TransaccionesComponent, FiltrosComponent]
})
export class TransaccionesModule { }
