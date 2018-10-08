import { Component, OnInit, Input } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Transaccion } from './../../modelo/transaccion';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  @Input() transacciones : Transaccion [] ;
  transaccion : Transaccion ;
  
  constructor(private servicio: ServiciosService) 
  { 
    
  }

  seleccionar(transaccion)
  {
    this.transaccion = transaccion ;
  }

  ngOnInit() {
  }

}
