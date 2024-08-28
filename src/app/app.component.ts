import { Component } from '@angular/core';
import { CargarscripService } from './cargarscrip.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LosPinos';
  constructor(private _Cargarscrip:CargarscripService ) {
    _Cargarscrip.Carga(["app"]);
   }
  ngOnInit(): void {   
  }
}
