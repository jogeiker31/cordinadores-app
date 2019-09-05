import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { profesores } from 'src/assets/DB/profesores';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['ci', 'nom_prof', 'ape_prof', 'correo_prof'];
  dataSource = new MatTableDataSource(profesores);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  profesoresForm  = new FormGroup({
    ci_profesor: new FormControl('',[Validators.required,Validators.maxLength(8),Validators.pattern('^[0-9]{1,8}$')]),
    nombre_profesor: new FormControl('',[Validators.required]),
    apellido_profesor: new FormControl('',[Validators.required]),
    correo_profesor: new FormControl('',[Validators.email,Validators.required]),
    
  });

  get ci_profesor() {return this.profesoresForm.get('ci_profesor')}
  get nombre_profesor() {return this.profesoresForm.get('nombre_profesor')}
  get apellido_profesor() {return this.profesoresForm.get('apellido_profesor')}
  get correo_profesor() {return this.profesoresForm.get('correo_profesor')}
 



  guardarProfesor(){
    profesores.push(this.profesoresForm.value)
    
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/profesores'])
      
    }); 
    
  }
}
