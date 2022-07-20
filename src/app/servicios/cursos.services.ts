import{Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()


export class CursosServices {

    constructor(private router:Router){

    }

    private cursos:Curso[]= 
  
    [
        {
          name: '2°SH',
          linkMaterial:'https://drive.google.com/drive/folders/1ai88W6974R8CCB2uPoFoYgeiTX34H_nV?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1T_Aw_qPofqt2bozVgMWuCSLuik2tC8cG?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/1Vwz_r4qhLrnxZzSEK9dbLYJs7GQ1dp9s?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1eYXtIgnPd57SbR4U9qP4LuQ2pxvkBDJI?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1PMndU10fT-KQawqa37j-bkeSRZcj6iXV?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/1CzqdbjWNnyUgiDAbu_Yks6vIiw3_H-7E?usp=sharing'
        },

        {
          name: "3°SH",
          linkMaterial:'https://drive.google.com/drive/folders/1Dwcq9r78qKsoTVc_EPjqOOv0YEOwmJ2L?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1igQuGHbFIHSsCsDMBd6wKiO_WaTXM6ZC?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/1K-5ul_my8x2oeO-XiG67TsLsv26EkbsD?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1ec4HI9VSEOOxYzuslpbbriJh3zrDpnoD?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1Ju_Slrx88L69qRIui1Aaz0Zy8hLPudCG?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/1TGgZZBR1bCBOniTB-he9ucn0QsEcRFJ8?usp=sharing'
          
        },

        {
          name: "3°EA",
          linkMaterial:'https://drive.google.com/drive/folders/1Mho7wPoIMLMYWU6_Nf5HZPUuKEggTr9q?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1Ev5L2nbRUgOS_9HW1EWfNaBq4vBGxTjB?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/1cUXlCvdfsQPHCsx2Ndm2qdNTJya5Wi1K?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1VlS9445d62Bx_d3Z3Ouep-W3JOoJea7u?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1w3cKMFoSCM747d5ZxONRFUg1AiZ8k7Wd?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/1CMw4n9wjaj0GO1HVDi4EgeDJ4e8RBcKG?usp=sharing'
        },
         
        {
          name: "4°SH",
          linkMaterial:'https://drive.google.com/drive/folders/15g5O_qfivYuPLIkXNRi8C7adTul1aJMI?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/188-FlG92ngzCuRFPZT9pvQ7jeUtoHpUd?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/11mrmCK7R4j8SmEBYNCf6EjiTuPQ-xFOm?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1nxrZsYBcgjXl4jYI-DOtr8Ie5NaHKk0t?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1qJa3G6HvQK6Szm8OhOEjqlL9aZ8OdvEo?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/1rjtJDM7x0OFqrCXOaYIMasoS7jzubC3V?usp=sharing'
        },
        
        {
          name: "4°EA",
          linkMaterial:'https://drive.google.com/drive/folders/1RzN9fH1qQFFsaTsX4pd3hIz0-XtO_ev8?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1AartPBu5XJy2ouoDuaE9NAkFK0l-Go1J?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/1lmFAin0_vTZmpI_v1EO1vlqowJiQf_-m?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1J80vVdifSG2DeVNhbzWPax8DEDiIpTm2?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1UiVhdmHxJufVWxiiQLY1WUt3wH7W2klU?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/1sqrkwDB0S_meTdXVzm92bZpKlJYgvGe9?usp=sharing'
        },
        
        {
          name: "5°SH",
          linkMaterial:'https://drive.google.com/drive/folders/1XnuZlOuLeE7H1ByX8kAoGrreLGZBXjtz?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1yHg_gEIiEDBmnE0IPrE_f0MeIOTiuEOq?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/16Bm4PKRxNh_Yehkr5Wk7S2yKyQLZ16P5?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1SNhPhEj6cmXYX0p4eamGCvFXwvW_5SLa?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/18D3w-WVpMNGorunDsJ6TBPIHrtBkMw6r?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/15inJGzNgf5zxCdhys5pSSqcIpUM18_eI?usp=sharing'
        },
        
        {
          name: "5°EA",
          linkMaterial:'https://drive.google.com/drive/folders/1_cCPcZMKEEKKkNcugRT952FYLP5DnWAt?usp=sharing',
          linkClasesGrabadas:'https://drive.google.com/drive/folders/1BaX4Jn9R1qnzK_MS4WoFc5QrUQwvXmhO?usp=sharing',
          linkPlanificacion:'https://drive.google.com/drive/folders/1G360Ehn-EiBWRj9d8OeM5KsfFSdJL41j?usp=sharing',
          linkNotas:'https://drive.google.com/drive/folders/1-3GnfeOjd4-XSVMF2isZBQN3Zfppo-lw?usp=sharing',
          linkHorarios:'https://drive.google.com/drive/folders/1VzPhxGlHYrepIb0oN7RFE8eMgzpgmEWl?usp=sharing',
          linkTrabajosPracticos:'https://drive.google.com/drive/folders/16tZmIbqsjeU6VSQSv7i-H_d5m2LjSFIj?usp=sharing'
        }
      ];
   
    getCursos():Curso[]{
        return this.cursos;
      }

    getCurso(idx:number){
        return this.cursos[idx];
      }


    }

    export interface Curso{
      name: String;
      linkMaterial:String;
      linkClasesGrabadas:String;
      linkPlanificacion:String;
      linkNotas:String;
      linkHorarios:String;
      linkTrabajosPracticos:String;
  }


