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

//Eliminar profesor
async deleteProfesor(codigo){
  let profesores2 = await this.profesores.filter((profesor)=>{
   return  profesor.ci_profesor != codigo
    
    
  })

  this.profesores = profesores2
}




//CI
async updateCi(codigo: string,value) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.ci_profesor = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//nombre
async updateNombre(codigo: string ,value:string) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.nom_prof = value//asegurate de que funcione
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//apellido
async updateApellido(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.ape_prof = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//correo
async updateCorreo(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.cor_prof = value
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}
//horas trabajo
async updateHorasT(codigo: string,value ) {
  let profesores2 = await this.profesores.filter((profesor)=>{
    if(profesor.ci_profesor == codigo){
      profesor.horas_est = parseInt(value)
    }
    
     return  profesor
     
   })
   this.profesores = profesores2
   
}


}
