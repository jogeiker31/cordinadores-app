import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';



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
    public profesoresService:ProfesoresService
    ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['ci', 'nom_prof', 'ape_prof', 'correo_prof','h_e'];
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
}
