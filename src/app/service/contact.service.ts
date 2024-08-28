import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Correo } from './Correo';
import { Usuario } from './Usuario';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  user:string="";
 API:string='http://192.168.234.1/dashboard/';
 APIUSER:string='http://192.168.234.1/dashboard/user/Login.php';
  constructor(private clienteHttp:HttpClient) { }

  AgregarCorreo(correo:Correo):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",correo);
  }
  ObtenerCorreo(){
    return this.clienteHttp.get(this.API);
  }
  ObtenerUsuarios(){
    return this.clienteHttp.get(this.APIUSER);
  }
  EliminarCorreo(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  ValidarUsuario(usuario:any):Observable<any>{
    return this.clienteHttp.get(this.APIUSER+"?validar="+usuario);
  }
  
  Value(use:any){
    this.user=use;
  }
  isAuth():boolean{
    if(this.user=="luis"){
      return true;
    }
    else{
      return false;
    }
  }
}
