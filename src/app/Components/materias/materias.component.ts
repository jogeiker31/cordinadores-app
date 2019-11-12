

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, throwToolbarMixedModesError } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service'
declare const M;



@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private router:Router,public materiasService:MateriasService) { }



 
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* materia= materias 
  materiaselected;

  async deletem(codigo){
   
  this.materiaselected =  await this.materias.filter((seccion)=>{
    return seccion.codigo_siceu == codigo
  })
} */
  

  semestres = [
    {nombre:'Primero',numero:1},
    {nombre:'Segundo',numero:2},
    {nombre:'Tercero',numero:3},
    {nombre:'Cuarto',numero:4},
    {nombre:'Quinto',numero:5},
    {nombre:'Sexto',numero:6},
    {nombre:'Septimo',numero:7},
    {nombre:'Octavo',numero:8},
    {nombre:'Noveno',numero:9},
  ]


  displayedColumns: string[] = ['codigo', 'materia','semestre', 'horas_teo', 'horas_pra','horas_lab', 'horas_tot','boton','botonE'];
  dataSource = new MatTableDataSource(this.materiasService.getMaterias());

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  materiasForm  = new FormGroup({
    codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
    nombre_mat: new FormControl('',[Validators.required]),
    semestre_mat:new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4),Validators.required])
    
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get semestre_mat() {return this.materiasForm.get('semestre_mat')}
  get horas_teo() {return this.materiasForm.get('horas_teo')}
  get horas_pra() {return this.materiasForm.get('horas_pra')}
  get horas_lab() {return this.materiasForm.get('horas_lab')}
 



  guardarMateria(){
    this.materiasService.setMateria(this.materiasForm.value)
    
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
    
  }

  async borrarMateria(code){
  
  await this.materiasService.deleteMateria(code)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
}

edit:false;//para los botones de editar, si es false no es editable
tomarcodigo:any; 


materiasE  = new FormGroup({
  cod_materia: new FormControl('',[Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
  nom_materia: new FormControl(''),
  sem_materia: new FormControl(''),
  hor_teorica: new FormControl('',[Validators.min(0),Validators.max(4)]),
  hor_practica: new FormControl('',[Validators.min(0),Validators.max(4)]),
  hor_laboratorio: new FormControl('',[Validators.min(0),Validators.max(4)]),
});
codigo:string;
nombre:string;
semestre:number;
horaT:number;
horaP:number;
horaL:number;





//Codigo
async editarCodigo(code){
  if(this.materiasE.value.cod_materia == '' ){
    
    await this.materiasService.updateCodigo(code,this.tomarcodigo)//no esta leyendo el valor REVISAR

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 

  }else{

  await this.materiasService.updateCodigo(code,this.materiasE.value.cod_materia)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
                                } //el del else      
}


//Materia   
async editarMateria(code){
  if(this.materiasE.value.nom_materia == '' ){
    
    await this.materiasService.updateMateria(code,this.nombre)//no esta leyendo el valor REVISAR

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 

  }else{

  await this.materiasService.updateMateria(code,this.materiasE.value.nom_materia)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
                                } //el del else      
}
//Semestre
async editarSemestre(code){
  if(this.materiasE.value.sem_materia == '' ){
    await this.materiasService.updateSemestre(code,this.semestre)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
  }else{
    await this.materiasService.updateSemestre(code,this.materiasE.value.sem_materia)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
  }// else
}
//Horas Teoricas
async editarHorasT(code){
  if(this.materiasE.value.hor_teorica == '' ){
    await this.materiasService.updateHorasT(code,this.horaT)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
}else{
  await this.materiasService.updateHorasT(code,this.materiasE.value.hor_teorica)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
}//else
}


//Horas Practicas
async editarHorasP(code){
  if(this.materiasE.value.hor_practica == '' ){
    await this.materiasService.updateHorasP(code,this.horaP)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
 
}else{
  await this.materiasService.updateHorasP(code,this.materiasE.value.hor_practica)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
}//else
}


//Horas Laboratorio
async editarHorasL(code){
  if(this.materiasE.value.hor_laboratorio == '' ){
    await this.materiasService.updateHorasL(code,this.horaL)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
  
}else{
  await this.materiasService.updateHorasL(code,this.materiasE.value.hor_laboratorio)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/materias'])
    
  }); 
}//else
}
}
