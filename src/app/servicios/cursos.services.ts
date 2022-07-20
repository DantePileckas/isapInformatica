import{Injectable} from '@angular/core';

@Injectable()


export class CursosServices {

    private cursos:Curso[]= 
  
    [
        {
          name: '2SH'
        },

        {
          name: "3SH"
        },

        {
          name: "3EA"
        },
         
        {
          name: "4SH"
        },
        
        {
          name: "4EA"
        },
        
        {
          name: "5SH"
        },
        
        {
          name: "5EA"
        }
      ];
   
    getCursos():Curso[]{
        return this.cursos;
      }

    }

    export interface Curso{
      name: String;
  }


