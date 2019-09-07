import { AppComponent } from 'src/app/app.component';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { SidenavContentComponent } from 'src/app/Components/sidenav-content/sidenav-content.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { AsignarMateriaComponent } from 'src/app/Components/dialog/asignar-materia/asignar-materia.component';
import { MateriasComponent } from 'src/app/Components/materias/materias.component';
import { ReloadComponent } from 'src/app/Components/reload/reload.component';
import { SeccionesComponent } from 'src/app/Components/secciones/secciones.component';
import { AsignarMateriaSeccionComponent } from 'src/app/Components/dialog/asignar-materia-seccion/asignar-materia-seccion.component';

export const components = [AppComponent,
    HorarioComponent,
    SidenavContentComponent,
    InicioComponent,
    ProfesoresComponent,
    AsignarMateriaComponent,
    MateriasComponent,
    ReloadComponent,
    SeccionesComponent,
    AsignarMateriaSeccionComponent
    ]

export const dialogs = [AsignarMateriaComponent,AsignarMateriaSeccionComponent]