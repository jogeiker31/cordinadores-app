import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { horario_data } from 'src/assets/DB/horario';

export interface DialogData {
  hora: object,
  dia : string
  
}

@Component({
  selector: 'app-asignar-materia',
  templateUrl: './asignar-materia.component.html',
  styleUrls: ['./asignar-materia.component.css']
})
export class AsignarMateriaComponent implements OnInit {


  ngOnInit() {
  }

  materias = ['Base de datos','Programacion','Analisis de sistemas','Defensa integral']
  materiaSelected: string;

  constructor(
    public asignarMateriaDialog: MatDialogRef<AsignarMateriaComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.asignarMateriaDialog.close();
  }

  SaveMateria(data){
    switch (data.dia) {
      case 'L':
        data.hora.lunes = this.materiaSelected;
        break;
      case 'M':
        data.hora.martes = this.materiaSelected;
        break;
      case 'X':
        data.hora.miercoles = this.materiaSelected;
        break;
      case 'J':
        data.hora.jueves = this.materiaSelected;
        break;
      case 'V':
        data.hora.viernes = this.materiaSelected;
        break;
      case 'S':
        data.hora.sabado = this.materiaSelected;
        break;
      
      default:
        break;
    }
    this.asignarMateriaDialog.close()
  }

}
