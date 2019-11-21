import { Injectable } from '@angular/core';
import { Secciones } from '../Components/secciones/secciones.component';

export interface Seccion{
  codigo_siceu:string,//r
  semestre:string,
  num_semestre:number,
  carrera:string,
  turno:string,
  aula:number,

}

@Injectable({
  providedIn: 'root'
})


export class SeccionesService {

constructor() { }

secciones: Seccion[] = [{
  codigo_siceu:'01S-2614-D1',
  semestre:'PRIMERO',
  num_semestre:1,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  aula:null
},
{
  codigo_siceu:'06S-2614-D1',
  semestre:'SEXTO',
  num_semestre:6,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  aula:null
}

]


seccionesTree:Secciones[];
getSeccionesTree(){
  
  this.secciones.forEach((seccion)=>{

  })
}

seccionSelected = null;



getSecciones(){
  return this.secciones
}

setSeccion(seccion){
  this.secciones.push(seccion)
}

async getSeccion(codigo){
  let seccion =  await this.secciones.filter((seccion)=>{
    return seccion.codigo_siceu == codigo
  })
  if(seccion.length >0){this.seccionSelected = seccion[0];}
}
  

}
