import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string ;
  password : string ;
  mensaje : string ;
  

  constructor(private service: ServiciosService, private router : Router) 
  {

  }

  signIn()
  {
     
    this.service.Login(this.username,this.password).subscribe(ress=>
    {
      if(ress['token'])
      {
        console.log(ress);
        document.cookie = "Authorization="+ress['token'];
        this.router.navigate(['/home/transacciones']);
      }
      else
      {
        this.username="";
        this.password="";
        this.mensaje = "contraseña o usuario incorrecto"
      }
    }, error => 
    {
      console.log(error);
      this.username="";
      this.password="";
      this.mensaje = "contraseña o usuario incorrecto"
    }
    );
       
       

  }

  ngOnInit() {
  }

}
