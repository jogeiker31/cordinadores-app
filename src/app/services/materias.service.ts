import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
materias = [
    {codigo_materia: 'MAT-123456',nombre_mat:'Base de datos',horas_teo: 3, horas_pra:2,horas_lab:0,semestre_mat:5,carrera:'2614'},
    {codigo_materia: 'MAT-222333',nombre_mat:'diseño de sistemas',horas_teo: 3, horas_pra:3,horas_lab:0,semestre_mat:6,carrera:'2614'},
    {codigo_materia: 'MAT-345678',nombre_mat:'optimizacion no lineal',horas_teo: 4, horas_pra:3,horas_lab:0,semestre_mat:6,carrera:'2614'}
  ]


materiasPorSeccion = []

getMaterias(){
  return this.materias;
}

setMateria(data){
  this.materias.push(data)
}

async getNombreDeMateria(codigo){
  let materia = await this.materias.filter((materia)=>{
    return materia.codigo_materia == codigo
  })

  return materia[0].nombre_mat

}

setMateriaSeccion(data){
  this.materiasPorSeccion.push(data);
}

async getMateriasSeccion(seccion){
  let materias = await this.materiasPorSeccion.filter((materia)=>{
    return materia.codigo_seccion ==  seccion;
  })
  return materias
}



constructor() { }

}
