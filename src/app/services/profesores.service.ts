import { Injectable } from '@angular/core';
import { filter } from 'minimatch';


export interface Profesor {
  ci_profesor: string,
  nom_prof: string,
  ape_prof: string,
  cor_prof:string,
  horas_est:number
}

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

constructor() { }

profesores: Profesor[] = [];

getProfesores(){
  return this.profesores;
}

getProfesor(id){
  return this.profesores.filter((prof)=>{
    return prof.ci_profesor == id
  })
}

setProfesor(data){
  this.profesores.push(data);
}




}
