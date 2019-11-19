
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { semestres } from 'src/assets/DB/horario';
import { seccioneS } from 'src/assets/DB/horario';
import { codigoCarrera } from 'src/assets/DB/horario';


export interface AASDATA{
  seccion: object
}

@Component({
  selector: 'app-asignar-semestre',
  templateUrl: './asignar-semestre.component.html',
  styleUrls: ['./asignar-semestre.component.css']
})
export class AsignarSemestreComponent implements OnInit {

  constructor(
    public asignarSemestreDialog: MatDialogRef<AsignarSemestreComponent>, // codigo angular para abrir dialogos
    
    @Inject(MAT_DIALOG_DATA) public data: AASDATA,
    private router: Router
    ) {}  // codigo angular para abrir dialogos


    onNoClick(): void {
     // esta funcion es para que se cierre la ventana modal 

      this.asignarSemestreDialog.close();
  }

  
  SemestreSelected: string;
  CodigoSelected: string;
  SeccionSelected:string;
  SemestreCorto:string;

  function (){
    for(let i in semestres ) {
    if (semestres[i] == this.SemestreSelected) {
      this.SemestreCorto = i.toString();
      return this.SemestreCorto
    }
    
  }
  }
  

  asignarSemestre(seccion){
    seccion.semestre = this.SemestreSelected;
    this.function()
    seccion.codigo_siceu = '0'+ this.SemestreCorto +'S-' + this.CodigoSelected + '-' + this.SeccionSelected;
    this.onNoClick()
  };

  
  
  



  semestres;
  seccioneS;
  codigoCarrera;

  async ngOnInit() {
    this.semestres = semestres;
    this.seccioneS = seccioneS;
    this.codigoCarrera = codigoCarrera;
  }

}
 