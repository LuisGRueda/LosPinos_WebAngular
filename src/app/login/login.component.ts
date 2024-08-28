import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../service/Usuario';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: Usuario ={"usuario":"","contrasenia":''};
  constructor(
    public formulario:FormBuilder,
     private ContactService:ContactService,
     private route:Router
     ) {
       }

  ngOnInit(): void {
  }
  enviarDatos():any{
var user=this.model.usuario.toString();

   console.log(user);
   this.ContactService.Value(user);
   if(user=="luis"){
   this.route.navigate(['crud-admin']);
   }
  }

}
