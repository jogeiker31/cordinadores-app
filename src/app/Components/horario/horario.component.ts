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

  elemento(hora,dia,materia){
    const asignarMateriaDialog = this.dialog.open(AsignarMateriaComponent, {
      width: '450px',
      height: '350px',
      data: {hora,dia,materia}
    });
  
  }

}
