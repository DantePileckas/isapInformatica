import { Component, OnInit } from '@angular/core';
import { Curso, CursosServices } from 'src/app/servicios/cursos.services';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
   cursos:Curso[]=[];

  constructor(private _cursosServices:CursosServices) { 
    console.log("constructor")
  }

   ngOnInit(): void {
  this.cursos=this._cursosServices.getCursos();
  console.log(this.cursos)  
  }
  
}
