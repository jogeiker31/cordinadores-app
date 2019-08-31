import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';

 const appRoutes: Routes = [
    { path: 'horario', component: HorarioComponent },
    { path: '',      component: InicioComponent },
    {
      path: 'profesores',
      component: ProfesoresComponent,
     
    }
  ];


export const Rutas =  RouterModule.forRoot(appRoutes)

