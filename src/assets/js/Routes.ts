import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';
import { MateriasComponent } from 'src/app/Components/materias/materias.component';
import { ReloadComponent } from 'src/app/Components/reload/reload.component';
import { SeccionesComponent } from 'src/app/Components/secciones/secciones.component';

 const appRoutes: Routes = [
    { path: 'horario', component: HorarioComponent },
    { path: '',      component: InicioComponent },
    {path: 'profesores',component: ProfesoresComponent},
    {path: 'materias', component:MateriasComponent},
    { path: 'reload', component: ReloadComponent},
    {path: 'secciones', component: SeccionesComponent}
  ];


export const Rutas =  RouterModule.forRoot(appRoutes)

