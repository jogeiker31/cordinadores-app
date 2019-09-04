import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { horario_data } from 'src/assets/DB/horario';


@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  displayedColumns: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  dataSource = horario_data;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    
  }

  materias = [
    {codigo_materia: 'MAT-123456',nombre_mat:'Base de datos',horas_teo: 3, horas_pra:2,horas_lab:0,uc:4},
    {codigo_materia: 'MAT-222333',nombre_mat:'diseño de sistemas',horas_teo: 3, horas_pra:3,horas_lab:0,uc:4},
    {codigo_materia: 'MAT-345678',nombre_mat:'optimizacion no lineal',horas_teo: 4, horas_pra:3,horas_lab:0,uc:4}
  ]


  getNameOfMateria(code){
    const materia = this.materias.filter((mat)=>{
      return mat.codigo_materia == code;
    })
    if(materia[0]){
      return materia[0].nombre_mat
    }
  }
  

  info = {
    seccion: '06S-2416-D1',
    semestre: 'SEXTO',
    carrera: 'ING. DE SISTEMAS',
    turno: 'DIURNO',
    aula: '19'

  }


  elemento(hora,dia,materia){
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia}
    });

  
  
  }

}
