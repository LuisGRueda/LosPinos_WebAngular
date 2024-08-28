import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import { CargarscripService } from '../cargarscrip.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formularioContacto:FormGroup;

  constructor(
    public formulario:FormBuilder,
     private ContactService:ContactService,
     private _Cargarscrip:CargarscripService
     ) {
      _Cargarscrip.Carga(["contact"]);

    this.formularioContacto=this.formulario.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      correo:[''],
      telefono:[''],
      mensaje:['']
    });

   }

  ngOnInit(): void {
  }
  enviarDatos():any{
     console.log(this.formularioContacto.value)
     this.ContactService.AgregarCorreo(this.formularioContacto.value).subscribe();
     console.log();
     this.formularioContacto.reset();
  }
}
