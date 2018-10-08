import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Transaccion } from './modelo/transaccion';



@Injectable()
export class ServiciosService {

  URL: string ;
  Header : any ; 

  constructor(private http : HttpClient) 
  {
    
  }

  getCookie(cname) 
  {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  Login(userName, Password)
  {
    var x =
    {
      "email": userName,
      "password": Password
    }
    return this.http.post('/api/user/login',x);
  }


  getTransacciones()
  {
    return this.http.get<any[]>('/api/user/my/transactions',{
      headers: {'Content-Type':'application/json','Authorization':'Bearer '+this.getCookie("Authorization")}
      });
  }

  getTransaccionesPorFecha(fechaInicio, fechaFin)
  {
    return this.http.get<any[]>('/api/user/my/transactions?startDate='+fechaInicio+'&endDate='+fechaFin,{
      headers: {'Content-Type':'application/json','Authorization':'Bearer '+this.getCookie("Authorization")}
      });
  }


}
