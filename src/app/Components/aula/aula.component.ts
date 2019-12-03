import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, throwToolbarMixedModesError, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service'
import { BorrarComponent } from '../dialog/borrar/borrar.component';

@Component({
  selector: 'aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder,
    private  aulasevice:AulasService,
    private router:Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['aula','boton','botonE'];
  dataSource = new MatTableDataSource(this.aulasevice.getAulas());

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  AulaForm  = new FormGroup({
    aula: new FormControl('')  
  });

get aula() {return this.AulaForm.get('aula')};


guardaraula(){
  this.aulasevice.setAula(this.AulaForm.value)
  
  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/aula'])
    
  }); 
  
}

async borraraula(code){

  const borrarDialog = this.dialog.open(BorrarComponent,{
    width: '300px',
    height: '150px'
  })

  await borrarDialog.afterClosed().subscribe((result)=>{
    if(result){
       this.aulasevice.deleteAula(code) //editar servicio para aulas

      this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
      {
        this.router.navigate(['/aula'])
        
      }); 
    }
  })



}



edit:false;//para los botones de editar, si es false no es editable
tomaraula:number; 

aulaE  = new FormGroup({
  aula_e: new FormControl('')
});
aulaV:number;



//Editar
async editaraula(code){
  if(this.aulaE.value.aula_e == '' ){
    
    await this.aulasevice.updateAula(code,this.aulaV)//no esta leyendo el valor REVISAR

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/aula'])
    
  }); 

  }else{

  await this.aulasevice.updateAula(code,this.aulaE.value.aula_e)

  this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
  {
    this.router.navigate(['/aula'])
    
  }); 
                                } //el del else      
}



}