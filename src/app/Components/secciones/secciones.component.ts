import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

/* const secciones = []
createFormGroup(){
  return new FormGroup({
    semestre: new FormControl(''),
    codigo_carrera: new FormControl(''),
    seccion_turno: new FormControl('')
  })
} */
const secciones = [{nsemestre:"01S",codigo_carr:2614,seccion_tur:"D1"},
{nsemestre:"02S",codigo_carr:2614,seccion_tur:"D2"},
{nsemestre:"03S",codigo_carr:2614,seccion_tur:"D3"}
  
]


@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



displayedColumns: string[] = ['nsemestre', 'codigo_carr', 'seccion_tur'];
  dataSource = new MatTableDataSource(secciones);
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  seccionForm  = new FormGroup({
    nsemestre: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    codigo_carr: new FormControl('',[Validators.required,Validators.maxLength(4)]),
    seccion_tur: new FormControl('',[Validators.required,Validators.maxLength(2)])
  });

  get nsemestre() {return this.seccionForm.get('nsemestre')}
  get codigo_carr() {return this.seccionForm.get('codigo_carr')}
  get seccion_tur() {return this.seccionForm.get('seccion_tur')}
 


  guardarSeccion(){
    secciones.push(this.seccionForm.value)
    
    this.router.navigateByUrl('/reload', {skipLocationChange: true}).then(()=>
    {
      this.router.navigate(['/secciones'])
      
    }); 
    
  }
}