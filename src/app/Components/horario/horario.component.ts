import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsignarMateriaComponent } from '../dialog/asignar-materia/asignar-materia.component';
import { horario_data, saveHour } from 'src/assets/DB/horario';
import { AsignarMateriaSeccionComponent } from '../dialog/asignar-materia-seccion/asignar-materia-seccion.component';
import { AsignarAulaComponent } from '../dialog/asignar-aula/asignar-aula.component';
import { AsignarSemestreComponent } from '../dialog/asignar-semestre/asignar-semestre.component';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { SeccionesService } from 'src/app/services/secciones.service';
import { MateriasService } from 'src/app/services/materias.service';
import { ProfesorOcupadoComponent } from '../dialog/profesor-ocupado/profesor-ocupado.component';
import { Router } from '@angular/router';

@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public profesoresService:ProfesoresService, 
    public seccionesService:SeccionesService,
    public materiasService:MateriasService,
    public route:Router) {}


  info = this.seccionesService.seccionSelected[0]

  

    

  getNameOfMateria(code){
    const materia = this.materiasService.materias.filter((mat)=>{
      return mat.codigo_materia == code;
    })
    if(materia[0]){
      return materia[0].nombre_mat
    }
  }


   getNameOfMateriaById(id){
    let materia_id = this.materiasService.materiasPorSeccion.filter((materia)=>{
      return materia.id_mat_sec == id
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
    
    
    asignarMateriaDialog.afterClosed().subscribe((result) => {
      if(result.nombre && result.apellido){
        const profesorOcupadoDialog = this.dialog.open(ProfesorOcupadoComponent,{
          width: '450px',
          height: '200px',
          data: result
        })
      }
    })

  
  
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
    width: '950px',
    height: '750',
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
   let profesor = this.profesoresService.getProfesor(code);
   if(profesor[0]){
     return `${profesor[0].nom_prof} ${profesor[0].ape_prof}`
   }

  }




 
  async ngOnInit() {

    if(this.info.lenght < 1){
      this.route.navigateByUrl('secciones')
    }
    
    this.MateriasData = []

     this.MateriasData = await this.materiasService.getMateriasSeccion(this.info.codigo_siceu);

    
    
  


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
