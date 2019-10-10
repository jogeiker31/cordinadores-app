import { Injectable } from '@angular/core';

export interface Seccion{
  codigo_siceu:string,//r
  semestre:string,
  num_semestre:number,
  carrera:string,
  turno:string,
  Aula:number,

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
  Aula:null
},
{
  codigo_siceu:'06S-2614-D1',
  semestre:'SEXTO',
  num_semestre:6,
  carrera:'ING DE SISTEMAS',
  turno:'DIURNO',
  Aula:null
}

]

seccionSelected;



getSecciones(){
  return this.secciones
}

setSeccion(seccion){
  this.secciones.push(seccion)
}

async getSeccion(codigo){
  this.seccionSelected =  await this.secciones.filter((seccion)=>{
    return seccion.codigo_siceu == codigo
  })
}

}
