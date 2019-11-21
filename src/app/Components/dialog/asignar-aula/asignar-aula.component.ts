import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { aulas } from 'src/assets/DB/horario';

export interface AASDATA{
  seccion: object
}

@Component({
  selector: 'app-asignar-aula',
  templateUrl: './asignar-aula.component.html',
  styleUrls: ['./asignar-aula.component.css']
})
export class AsignarAulaComponent implements OnInit {

  constructor(
    public asignarAulaDialog: MatDialogRef<AsignarAulaComponent>, // codigo angular para abrir dialogos
    
    @Inject(MAT_DIALOG_DATA) public data: AASDATA,
    private router: Router
    ) {} // codigo angular para abrir dialogos

       
  onNoClick(): void {
    // esta funcion es para que se cierre la ventana modal 

    this.asignarAulaDialog.close();
  }


  AulaSelected: number;
  

  asignarAula(seccion){
    seccion.aula = this.AulaSelected;
    this.onNoClick()
  }

  aulas;

  async ngOnInit() {
    this.aulas = aulas
  }



}
