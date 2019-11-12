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

profesores: Profesor[] = [{
  ci_profesor:'27040372',
  nom_prof:'jogeiker',
  ape_prof:'lizarraga',
  cor_prof:'jogeiker1999@gmail.com',
  horas_est:30
}];

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

ProfesorOcupado(id_mat,data){

}


}
