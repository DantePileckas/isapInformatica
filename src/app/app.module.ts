import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


//Rutas
import {app_routing} from './app.routes';

//Material Module
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    MaterialesComponent ],

  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    app_routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
