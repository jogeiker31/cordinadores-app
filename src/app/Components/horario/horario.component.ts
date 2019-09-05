import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { horario_data } from 'src/assets/DB/horario';
import { materias } from 'src/assets/DB/materias';


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

 
  

  

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    
 
    
  }

  

  

  getNameOfMateria(code){
    const materia = materias.filter((mat)=>{
      return mat.codigo_materia == code;
    })
    if(materia[0]){
      return materia[0].nombre_mat
    }
  }
  

  


  elemento(hora,dia,materia){
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia}
    });

  
  
  }

  columnasHorario: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  HorarioData = horario_data;
  
  
  columnasMaterias: string[] = ['codigo', 'materia','profesor','h_t','h_p','h_l','h_tot'];
  
  MateriasData = materias.filter((mat)=> {
    return mat.semestre_mat == this.info.semestre_num;
  })

}
