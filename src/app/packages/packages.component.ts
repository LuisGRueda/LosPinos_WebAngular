import { Component, OnInit } from '@angular/core';
import { CargarscripService } from '../cargarscrip.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private _Cargarscrip:CargarscripService) {
    _Cargarscrip.Carga(["packeges"]);
   }


  ngOnInit(): void {
  }

}
