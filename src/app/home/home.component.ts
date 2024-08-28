import { Component, OnInit } from '@angular/core';

import { CargarscripService } from '../cargarscrip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _Cargarscrip:CargarscripService) {
    _Cargarscrip.Carga(["home"]);
   }

  ngOnInit(): void {
  }

}
