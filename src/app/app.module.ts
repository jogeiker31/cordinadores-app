import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { components, dialogs } from '../assets/js/Components'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Rutas } from '../assets/js/Routes'
import { materials } from 'src/assets/js/materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    components,

  ],
  imports: [
    Rutas,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materials,
    FormsModule,
    ReactiveFormsModule
     
    
  ],
  providers: [],
  entryComponents: [
    dialogs
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
