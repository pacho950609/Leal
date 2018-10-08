import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Transaccion } from './../../modelo/transaccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  transacciones : Transaccion [] ;

  constructor(private servicio: ServiciosService, private router: Router) 
  { 
    if(!servicio.getCookie("Authorization"))
    {
      this.router.navigate(['/']);
    }
    else
    {
      this.transacciones=[];
      this.servicio.getTransacciones().subscribe(ress => 
        {
          this.transacciones=ress['data'];
        });
    }
    
  }

  remove(array, element) 
  {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  filtrar(fechaInicio,fechaFin,opcion)
  {
    console.log(fechaInicio);
    console.log(fechaFin);
    console.log(opcion);

    if(fechaFin && fechaInicio)
    {
      console.log("entro");
      this.servicio.getTransaccionesPorFecha(fechaInicio,fechaFin).subscribe(ress => 
        {
            this.transacciones=ress['data'];
            if(opcion!=="Choose...")
            {
              let index = this.transacciones.length - 1;
              while (index >= 0) 
              {
                if (this.transacciones[index].type != opcion) 
                {
                  this.transacciones.splice(index, 1);
                }
                index -= 1;
              }
              alert("Se ha filtrado por fecha y opcion");
            }
            else
            {
              alert("Se ha filtrado por fecha");
            }
        });

    }
   
    else if(opcion!=="Choose...")
    {
      this.servicio.getTransacciones().subscribe(ress => 
      {
        this.transacciones=ress['data'];
        let index = this.transacciones.length - 1;
            while (index >= 0) 
            {
              if (this.transacciones[index].type != opcion) 
              {
                this.transacciones.splice(index, 1);
              }
              index -= 1;
            }
        alert("Se ha filtrado por opcion");
      });
    
    }
    else
    {
      alert("Seleccione como quiere filtrar");
    }

  }

  ngOnInit() {
  }

}
