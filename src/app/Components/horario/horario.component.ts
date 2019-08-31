import { Component, OnInit } from '@angular/core';

export interface Horario {
  seccion: String;
  aula: String;
  hora: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;

}

const horario_data: Horario[] = [
  {hora: '7:00 a 7:45', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '7:45 a 8:30', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '8:30 a 9:15', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '9:15 a 10:00', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '10:00 a 10:45', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '10:45 a 11:30', lunes: 'Base de datos', martes: 'Programacion', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '11:30 a 12:15', lunes: 'Base de datos', martes: '', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '12:15 a 13:00', lunes: 'Base de datos', martes: '', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '13:00 a 13:45', lunes: 'Base de datos', martes: '', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '13:45 a 14:30', lunes: 'Base de datos', martes: '', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '14:30 a 15:15', lunes: 'Base de datos', martes: '', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '15:15 a 16:00', lunes: 'Base de datos', martes: '', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '16:00 a 16:45', lunes: '', martes: '', miercoles: 'defensa',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},
  {hora: '16:45 a 17:30', lunes: '', martes: '', miercoles: 'H',jueves: '', viernes : '', sabado: '',seccion:'06S-2614-D1',aula:'19'},

];

@Component({
  selector: 'horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  displayedColumns: string[] = ['Hora', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
  dataSource = horario_data;

  constructor() { }

  ngOnInit() {
  }

  elemento(hora,dia){
  console.log(`${hora.hora}, dia seleccionado ${dia}`)
  }

}
