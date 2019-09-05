import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { materias } from 'src/assets/DB/materias';
declare const M;



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


  displayedColumns: string[] = ['codigo', 'materia','semestre', 'horas_teo', 'horas_pra','horas_lab', 'horas_tot'];
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
    semestre_mat:new FormControl('',[Validators.required]),
    horas_teo: new FormControl('',[Validators.min(0),Validators.max(4)]),
    horas_pra: new FormControl('',[Validators.min(0),Validators.max(4)]),
    horas_lab: new FormControl('',[Validators.min(0),Validators.max(4)]),
    uc: new FormControl('',[Validators.min(0),Validators.max(5)])
  });

  get codigo_materia() {return this.materiasForm.get('codigo_materia')}
  get nombre_mat() {return this.materiasForm.get('nombre_mat')}
  get semestre_mat() {return this.materiasForm.get('semestre_mat')}
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
