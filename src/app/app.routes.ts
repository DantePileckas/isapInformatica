import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MaterialesComponent } from './components/materiales/materiales.component';



const APP_ROUTES: Routes=[
{path:'home', component: HomeComponent},
{path:'cursos', component: CursosComponent},
{path:'materiales/:id', component: MaterialesComponent},
{path:"**", pathMatch:'full',redirectTo:''}
];

export const app_routing =RouterModule.forRoot(APP_ROUTES, {useHash:true});