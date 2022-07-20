import{Injectable} from '@angular/core';


@Injectable()


export class MaterialesServices {
    private materiales:Material[]= 
    [
        {
          img:"assets/img/material.png",
          tittle:"Apuntes",
        },
        {
            img:"assets/img/video.png",
            tittle:"Clases Grabadas",
          },
        {
            img:"assets/img/planificacion.png",
            tittle:"Planificación",
          },
        {
            img:"assets/img/notas.png",
            tittle:"Notas",
          },      
        {
            img:"assets/img/horarios.png",
            tittle:"Horarios",
          },      
         {
            img:"assets/img/test.png",
            tittle:"Trabajos Prácticos",
          },      

      ];
   
    getMaterial():Material[]{
        return this.materiales;
      }

    }

    export interface Material{
      img: String;
      tittle:String;
  }


