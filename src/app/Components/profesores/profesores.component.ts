import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { BorrarComponent } from '../dialog/borrar/borrar.component';



@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  tipos = [{value:10,nombre:'TV'},
  {value:18,nombre:'MT'},
  {value:30,nombre:'TC'},
  {value:38,nombre:'Dedicacion exclusiva'}]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private fb: FormBuilder, 
    private router:Router, 
    public profesoresService:ProfesoresService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['ci', 'nom_prof', 'ape_prof', 'correo_prof','h_e','boton','botonE'];
  dataSource = new MatTableDataSource(this.profesoresService.getProfesores());

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  profesoresForm  = new FormGroup({
    ci_profesor: new FormControl('',[Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    nom_prof: new FormControl('',[Validators.required]),
    ape_prof: new FormControl('',[Validators.required]),
    cor_prof: new FormControl('',[Validators.email,Validators.required]),
    horas_est: new FormControl('',[Validators.required])

    
  });

  get ci_profesor() {return this.profesoresForm.get('ci_profesor')}
  get nom_prof() {return this.profesoresForm.get('nom_prof')}
  get ape_prof() {return this.profesoresForm.get('ape_prof')}
  get cor_prof() {return this.profesoresForm.get('cor_prof')}
 get horas_est() { return this.profesoresForm.get('horas_est')}



  guardarProfesor(){
   this.profesoresService.setProfesor(this.profesoresForm.value)
    
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
    
  }

  async borrarProfesor(code){
  
    const borrarDialog = this.dialog.open(BorrarComponent,{
      width: '300px',
      height:'190px'
    })

    await borrarDialog.afterClosed().subscribe((result)=>{
      if(result){
        this.profesoresService.deleteProfesor(code)
        this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
      }
    })
    
    
  
    
  }

  edit:false;//para los botones de editar, si es false no es editable
tomarCI:any; 


profesoresE  = new FormGroup({
  CI_prof: new FormControl('',[Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
  nombre_prof: new FormControl(''),
  apellido_prof: new FormControl(''),
  correo_prof: new FormControl('',[Validators.email]),
  hora_T: new FormControl(''),
  
});

CI:string;
nombre:string;
apellido:number;
correo:number;
horaT:number;


//CI
async editarCI(code){
  if(this.profesoresE.value.CI_prof == '' ){
    
    await this.profesoresService.updateCi(code,this.tomarCI)//no esta leyendo el valor REVISAR

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 

  }else{

  await this.profesoresService.updateCi(code,this.profesoresE.value.CI_prof)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 
                                } //el del else      
}


//Nombre   
async editarNombre(code){
  if(this.profesoresE.value.nombre_prof == '' ){
    
    await this.profesoresService.updateNombre(code,this.nombre)//no esta leyendo el valor REVISAR

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 

  }else{

  await this.profesoresService.updateNombre(code,this.profesoresE.value.nombre_prof)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 
                                } //el del else      
}
//Apellido
async editarApellido(code){
  if(this.profesoresE.value.apellido_prof == '' ){
    await this.profesoresService.updateApellido(code,this.apellido)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
  }else{
    await this.profesoresService.updateApellido(code,this.profesoresE.value.apellido_prof)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
  }// else
}
//correo
async editarCorreo(code){
  if(this.profesoresE.value.correo_prof == '' ){
    await this.profesoresService.updateHorasT(code,this.correo)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
}else{
  await this.profesoresService.updateHorasT(code,this.profesoresE.value.correo_prof)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 
}//else
}


//Horas Trabajo
async editarHorasT(code){
  if(this.profesoresE.value.hora_T == '' ){
    await this.profesoresService.updateHorasT(code,this.horaT)

    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
 
}else{
  await this.profesoresService.updateHorasT(code,this.profesoresE.value.hora_T)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/profesores'])
    
  }); 
}//else
}

}
