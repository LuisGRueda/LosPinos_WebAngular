import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../service/contact.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private contacService:ContactService){}
  canActivate():boolean{ 
    if(!this.contacService.isAuth()){
      console.log("error");
      return false;
    }
    else{
      return true;
    }
    
  }
  
}
