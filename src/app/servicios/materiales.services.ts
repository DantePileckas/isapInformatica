import{Injectable} from '@angular/core';


@Injectable()


export class MaterialesServices {
    private materiales:Material[]= 
    [
        {
          img:"assets/img/material.png",
          tittle:"Apuntes",
          link:"curso.linkMaterial"
        },
        {
            img:"assets/img/video.png",
            tittle:"Clases Grabadas",
            link:"curso.linkClasesGrabadas"
          },
        {
            img:"assets/img/planificacion.png",
            tittle:"Planificación",
            link:""
          },
        {
            img:"assets/img/notas.png",
            tittle:"Notas",
            link:""
          },      
        {
            img:"assets/img/horarios.png",
            tittle:"Horarios",
            link:""
          },      
         {
            img:"assets/img/test.png",
            tittle:"Trabajos Prácticos",
            link:""
          },      

      ];
   
    getMaterial():Material[]{
        return this.materiales;
      }

    }

    export interface Material{
      img: String;
      tittle:String;
      link:String;
  }


