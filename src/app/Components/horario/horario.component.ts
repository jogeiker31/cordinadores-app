import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { horario_data } from 'src/assets/DB/horario';
import { materias, materiasPorSeccion } from 'src/assets/DB/materias';
import { profesores } from 'src/assets/DB/profesores';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsignarMateriaSeccionComponent } from '../dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { async } from 'q';


@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  info = {
    seccion: '06S-2416-D1',
    semestre: 'SEXTO',
    carrera: 'ING. DE SISTEMAS',
    turno: 'DIURNO',
    aula: '19',
    semestre_num:6

  }


  

    

  getNameOfMateria(code){
    const materia = materias.filter((mat)=>{
      return mat.codigo_materia == code;
    })
    if(materia[0]){
      return materia[0].nombre_mat
    }
  }


   getNameOfMateriaById(id){
    let materia_id = materiasPorSeccion.filter((mat_id)=>{
      return mat_id.id_mat_sec == id
    })

    if(materia_id[0]){
      let nombre = this.getNameOfMateria(materia_id[0].codigo_materia)
      return nombre;
    }
   }

    
  
  
  
  elemento(hora,dia,materia){
    let seccion = this.info.seccion
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia,seccion}
    });

  
  
  }

  openDialogMateriaSec(){

    let seccion = this.info.seccion;
    let semestre = this.info.semestre_num
    const asignarMateriaSecDialog = this.dialog.open(AsignarMateriaSeccionComponent, {
      width: '450px',
      height: '350px',
      data: {seccion,semestre}
    })
  }


  getNameOfProfesor(code){
   let profesor = profesores.filter((prof)=>{
    return prof.ci_profesor == code

   })
   if(profesor[0]){
     return `${profesor[0].nombre_profesor} ${profesor[0].apellido_profesor}`
   }

  }




  constructor(public dialog: MatDialog) {}

  async ngOnInit() {

     this.MateriasData = await materiasPorSeccion.filter( async (materia)=>{
      return materia.codigo_materia == this.info.seccion
    })
    
    
  }



  columnasHorario: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  HorarioData = horario_data;
  
  
  columnasMaterias: string[] = ['id', 'materia','profesor'];
  MateriasData;
  

}
