import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HorarioComponent } from './Components/horario/horario.component';
import { SidenavContentComponent } from './Components/sidenav-content/sidenav-content.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ProfesoresComponent } from './Components/profesores/profesores.component';


import { Rutas } from '../assets/js/Routes'
import { materials } from 'src/assets/js/materials';


@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    SidenavContentComponent,
    InicioComponent,
    ProfesoresComponent
  ],
  imports: [
    Rutas,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materials
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
