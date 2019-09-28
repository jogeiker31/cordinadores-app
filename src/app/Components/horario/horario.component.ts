import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { horario_data, seccionSelected, saveHour } from 'src/assets/DB/horario';
import { materias, materiasPorSeccion } from 'src/assets/DB/materias';
import { profesores } from 'src/assets/DB/profesores';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsignarMateriaSeccionComponent } from '../dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { async } from 'q';
import { AsignarAulaComponent } from '../dialog/asignar-aula/asignar-aula.component';
import { AsignarSemestreComponent } from '../dialog/asignar-semestre/asignar-semestre.component';


@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  info = seccionSelected[0]

  

    

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
    let seccion = this.info.codigo_siceu
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia,seccion}
    });

  
  
  }

  openDialogMateriaSec(){

    let seccion = this.info.codigo_siceu;
    let semestre = this.info.num_semestre
    const asignarMateriaSecDialog = this.dialog.open(AsignarMateriaSeccionComponent, {
      width: '450px',
      height: '350px',
      data: {seccion,semestre}
    })
  }


openDialogSemestreSec(seccion){
  const asignarSemestreDialog = this.dialog.open(AsignarSemestreComponent, {
    width: '450px',
    height: '250',
    data: {seccion}
  })
}
  
  openDialogAulasSec(seccion){
    const asignarAulaDialog = this.dialog.open(AsignarAulaComponent, {
      width: '450px',
      height: '250',
      data: {seccion}
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
    console.log(this.info)

     this.MateriasData = await materiasPorSeccion.filter( async (materia)=>{
      return materia.codigo_materia == this.info.codigo_siceu
    })
    

    this.HorarioData = await horario_data.filter((data)=>{
      return data.seccion == this.info.codigo_siceu
    })

    if(!this.HorarioData[0]){
      await saveHour(this.info.codigo_siceu)
      this.HorarioData = await horario_data.filter((data)=>{
        return data.seccion == this.info.codigo_siceu
      })
    }
    
  }



  columnasHorario: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  HorarioData;
  
  
  columnasMaterias: string[] = ['id', 'materia','profesor'];
  MateriasData;
  

}
