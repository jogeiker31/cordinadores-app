import { Injectable } from '@angular/core';



export interface Materias {
  codigo_materia: string,
  nombre_mat: string,
  horas_teo: number,
  horas_pra:number,
  horas_lab:number,
  uc:number,
  semestre_mat:number
}

@Injectable({
  providedIn: 'root'
})

export class MateriasService {

constructor() { }
materias:Materias[] =[{codigo_materia: 'MAT-123456',
nombre_mat:'Base de datos',
horas_teo: 3, 
horas_pra:2,
horas_lab:0,
uc:4,
semestre_mat:5},

{codigo_materia: 'MAT-222333',
nombre_mat:'diseño de sistemas',
horas_teo: 3, 
horas_pra:3,
horas_lab:0,
uc:4,
semestre_mat:6},

{codigo_materia: 'MAT-345678',
nombre_mat:'optimizacion no lineal',
horas_teo: 4,
 horas_pra:3,
 horas_lab:0,
 uc:4,
 semestre_mat:6}]


 getMaterias(){
  return this.materias;
}

getMateria(id){
  return this.materias.filter((mate)=>{
    return mate.codigo_materia == id
  })
}

setMateria(data){
  this.materias.push(data);
}




//Eliminar materia
async deleteMateria(codigo){
  let materias2 = await this.materias.filter((materia)=>{
   return  materia.codigo_materia != codigo
    
    
  })

  this.materias = materias2
}





//codigo
async updateCodigo(codigo: string,value:string) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.codigo_materia = value
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}
//Materia
async updateMateria(codigo: string ,value:string) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.nombre_mat = value//asegurate de que funcione
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}
//Semestre
async updateSemestre(codigo: string,value ) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.semestre_mat = parseInt(value)
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}
//Horas Teoricas
async updateHorasT(codigo: string,value ) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.horas_teo = parseInt(value)
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}
//Horas Practicas
async updateHorasP(codigo: string,value ) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.horas_pra = parseInt(value)
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}
//Horas Laboratorio
async updateHorasL(codigo: string,value ) {
  let materias2 = await this.materias.filter((materia)=>{
    if(materia.codigo_materia == codigo){
      materia.horas_lab = parseInt(value)
    }
    
     return  materia
     
   })
   this.materias = materias2
   
}







}

