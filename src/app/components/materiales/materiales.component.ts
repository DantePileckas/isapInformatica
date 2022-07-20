import { Component, OnInit } from '@angular/core';
import { Material, MaterialesServices } from 'src/app/servicios/materiales.services';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {
  materiales:Material[]=[];

  constructor(private _materialesServieces:MaterialesServices) { }

  ngOnInit(): void {
    this.materiales=this._materialesServieces.getMaterial();
    console.log(this.materiales)  
    }

}
