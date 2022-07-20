// import { Component, OnInit } from '@angular/core';
// import { Material, MaterialesServices } from 'src/app/servicios/materiales.services';
// import {CursosServices} from 'src/app/servicios/cursos.services';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-materiales',
//   templateUrl: './materiales.component.html',
//   styleUrls: ['./materiales.component.css']
// })
// export class MaterialesComponent implements OnInit {
//   materiales:Material[]=[];
//   curso:any={

//   }

//   constructor(private _materialesServieces:MaterialesServices,
//               private _cursosServieces:CursosServices,
//               private activateRoute:ActivatedRoute ) { 
//                 this.activateRoute.params.subscribe((params:any) =>{
//                 this.curso = this._cursosServieces.getCurso(params['id'])
//               }) }

//   ngOnInit(): void {
//     this.materiales=this._materialesServieces.getMaterial();
//     }


// }
import { Component} from '@angular/core';
import {CursosServices} from 'src/app/servicios/cursos.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {
  curso:any={

  }

  constructor(private _cursosServieces:CursosServices,
              private activateRoute:ActivatedRoute ) { 
                this.activateRoute.params.subscribe((params:any) =>{
                this.curso = this._cursosServieces.getCurso(params['id'])
              }) }


}
