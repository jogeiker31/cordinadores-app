import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  links = [
    {url:'/horario',nombre:'Horario'},
    {url:'/profesores',nombre:'Profesores'},
    {url: '/materias',nombre:'materias'},
    {url: '/logout',nombre:'Cerrar sesión'}
    
  ]
  


}
