import { Component, OnInit } from '@angular/core';
import { CargarscripService } from '../cargarscrip.service';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit {
  Correos:any;
  correos:any=[];
  constructor(private _Cargarscrip:CargarscripService, 
    private crudService:ContactService) {
    _Cargarscrip.Carga(["modal"]);
   }
  ngOnInit(): void {
    
    this.cargarData();
  }
  cargarData(){ 
    this.crudService.ObtenerCorreo().subscribe( result => this.correos = result)
  }
  borrarCorreo(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    this.crudService.EliminarCorreo(id).subscribe(result=>{
      this.correos.splice(iControl,1);
    });
  }

}
