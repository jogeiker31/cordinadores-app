import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


const materias = [
  {codigo_materia: 'MAT-123456',nombre_mat:'Base de datos',horas_teo: 3, horas_pra:2,horas_lab:0,uc:4},
  {codigo_materia: 'MAT-222333',nombre_mat:'diseño de sistemas',horas_teo: 3, horas_pra:3,horas_lab:0,uc:4},
  {codigo_materia: 'MAT-345678',nombre_mat:'optimizacion no lineal',horas_teo: 4, horas_pra:3,horas_lab:0,uc:4}
]

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  displayedColumns: string[] = ['codigo', 'materia', 'horas_teo', 'horas_pra','horas_lab', 'horas_tot'];
  dataSource = new MatTableDataSource(materias);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  materiasForm  = new FormGroup({
    codigo_materia: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.pattern('^[A-Z]{3}\-[0-9]{5}$')]),
    nombre_mat: new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4)]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4)]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4)]),
    uc: new FormControl('',[Validators.min(0),Validators.max(5)])
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get horas_teo() {return this.materiasForm.get('horas_teo')}
  get horas_pra() {return this.materiasForm.get('horas_pra')}
  get horas_lab() {return this.materiasForm.get('horas_lab')}
  get uc() {return this.materiasForm.get('uc')}



  guardarMateria(){
    materias.push(this.materiasForm.value)
    
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/materias'])
      
    }); 
    
  }
}
