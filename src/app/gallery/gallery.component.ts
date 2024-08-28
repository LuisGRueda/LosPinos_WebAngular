import { Component, OnInit } from '@angular/core';
import { CargarscripService } from '../cargarscrip.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private _Cargarscrip:CargarscripService) {
    _Cargarscrip.Carga(["gallery"]);
   }


  ngOnInit(): void {
  }

}
